import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { sendPurchaseNotificationAction } from '@/app/actions/emails'

export async function POST(req: Request) {
  try {
    const url = new URL(req.url)
    const topic = url.searchParams.get('topic') || url.searchParams.get('type')
    let paymentId = url.searchParams.get('data.id') || url.searchParams.get('id')

    if (!paymentId) {
      const body = await req.json().catch(() => ({}))
      if (body.type === 'payment' && body.data?.id) {
        paymentId = body.data.id
      }
    }

    if (!paymentId) {
      return NextResponse.json({ success: true, message: 'No es un evento de pago' })
    }

    // 1. Consultar a Mercado Pago por el estado real del pago para verificarlo
    const response = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: {
        Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
      },
    })

    if (!response.ok) {
      console.error('Error verificando pago en MP:', await response.text())
      return NextResponse.json({ error: 'Failed to fetch payment' }, { status: 500 })
    }

    const paymentData = await response.json()
    const paymentStatus = paymentData.status
    const preferenceId = paymentData.order?.preference_id || null

    if (paymentStatus === 'approved' && preferenceId) {
      // 2. Actualizar Supabase 
      // Usamos el cliente base de Supabase con SERVICE_ROLE_KEY porque el Webhook no tiene cookies de usuario
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
      const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
      
      if (!supabaseServiceKey) {
          console.error('Falta SUPABASE_SERVICE_ROLE_KEY en las variables de entorno')
          return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
      }

      const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)

      // 2. Obtener los pedidos asociados a esta preferencia (con datos de usuario y producto)
      const { data: pedidos, error: fetchError } = await supabaseAdmin
        .from('pedidos')
        .select(`
          *,
          usuarios:usuario_id (
            email,
            perfiles (nombre_completo)
          ),
          productos (
            id,
            nombre,
            es_membresia,
            duracion_meses
          )
        `)
        .eq('mp_preference_id', preferenceId)

      if (fetchError || !pedidos) {
        console.error('Error obteniendo pedidos para notificar:', fetchError)
        return NextResponse.json({ error: 'Failed to fetch order data' }, { status: 500 })
      }

      // 3. Actualizar todos los pedidos a 'approved'
      const { error: updateError } = await supabaseAdmin
        .from('pedidos')
        .update({ estado_pago: 'approved' })
        .eq('mp_preference_id', preferenceId)

      if (updateError) {
        console.error('Error actualizando pedido en DB:', updateError)
        return NextResponse.json({ error: 'Database update failed' }, { status: 500 })
      }

      // 4. Lógica de Membresías y Notificaciones
      const primerPedido = pedidos[0]
      const usuario = (primerPedido.usuarios as any)
      const perfil = (usuario.perfiles as any)
      const emailCliente = usuario.email
      const nombreCliente = perfil?.nombre_completo || emailCliente.split('@')[0]
      
      const itemsParaEmail: any[] = []
      let totalPagado = 0

      for (const pedido of pedidos) {
        const producto = pedido.productos as any
        totalPagado += pedido.monto_total
        itemsParaEmail.push({
          nombre: producto.nombre,
          precio: pedido.monto_total,
          pago_tipo: pedido.pago_tipo
        })

        // Si es una membresía, actualizar el estado de suscripción
        if (producto.es_membresia) {
          const mesesPagadosPedid = pedido.pago_tipo === 'total' ? producto.duracion_meses : 1
          
          // Verificar si ya existe un registro de membresía
          const { data: membresiaExistente } = await supabaseAdmin
            .from('membresias_usuarios')
            .select('*')
            .eq('usuario_id', pedido.usuario_id)
            .eq('producto_id', producto.id)
            .single()

          const hoy = new Date()
          const fechaFin = new Date()
          fechaFin.setMonth(hoy.getMonth() + (pedido.pago_tipo === 'total' ? producto.duracion_meses : 1))

          if (!membresiaExistente) {
             // Crear nueva membresía
             await supabaseAdmin
               .from('membresias_usuarios')
               .insert({
                 usuario_id: pedido.usuario_id,
                 producto_id: producto.id,
                 estado: 'activa',
                 fecha_inicio: hoy.toISOString(),
                 fecha_fin: fechaFin.toISOString(),
                 meses_abonados: mesesPagadosPedid,
                 duracion_total: producto.duracion_meses
               })
          } else {
             // Actualizar membresía existente (sumar meses y extender fecha)
             const nuevaFechaFin = new Date(membresiaExistente.fecha_fin)
             nuevaFechaFin.setMonth(nuevaFechaFin.getMonth() + (pedido.pago_tipo === 'total' ? producto.duracion_meses : 1))
             
             await supabaseAdmin
               .from('membresias_usuarios')
               .update({
                 estado: 'activa',
                 fecha_fin: nuevaFechaFin.toISOString(),
                 meses_abonados: membresiaExistente.meses_abonados + mesesPagadosPedid
               })
               .eq('id', membresiaExistente.id)
          }
        }
      }

      // 5. Enviar Notificaciones por Email (Alumno + Mariana)
      try {
        await sendPurchaseNotificationAction(
          emailCliente,
          nombreCliente,
          itemsParaEmail,
          totalPagado
        )
      } catch (mailErr) {
        console.error('Error enviando notificaciones de venta:', mailErr)
        // No fallamos el webhook si el mail falla, para no duplicar cargos en MP
      }
      
      console.log(`¡Pago procesado, base de datos actualizada y notificaciones enviadas para: ${preferenceId}`)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Webhook Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
