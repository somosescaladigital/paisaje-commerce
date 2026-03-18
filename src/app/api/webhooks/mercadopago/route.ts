import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

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

      const { error } = await supabaseAdmin
        .from('pedidos')
        .update({ estado_pago: 'approved' })
        .eq('mp_preference_id', preferenceId)

      if (error) {
        console.error('Error actualizando pedido en DB:', error)
        return NextResponse.json({ error: 'Database update failed' }, { status: 500 })
      }
      
      console.log(`¡Pago exitoso! Pedido actualizado a 'approved' para preferencia: ${preferenceId}`)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Webhook Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
