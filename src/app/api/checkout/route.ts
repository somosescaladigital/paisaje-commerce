import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { MercadoPagoConfig, Preference } from 'mercadopago'

const client = new MercadoPagoConfig({ 
  accessToken: process.env.MP_ACCESS_TOKEN || '', 
  options: { timeout: 5000 } 
})

export async function POST(req: Request) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Debes iniciar sesión para comprar' }, { status: 401 })
    }

    const body = await req.json()
    const { items } = body // Esperamos que items venga del store del carrito

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'El carrito está vacío' }, { status: 400 })
    }

    // 1. Configuramos la Preferencia para Mercado Pago
    const preference = new Preference(client)
    
    // Obtenemos el origen de la URL (para los callbacks de redirección de MP)
    const origin = req.headers.get('origin') || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || origin

    const orderBody = {
      items: items.map((item: any) => ({
        id: item.id,
        title: item.nombre,
        quantity: item.cantidad,
        unit_price: Number(item.precio),
        currency_id: 'ARS',
        picture_url: item.imagen_url || undefined,
      })),
      payer: {
        email: user.email,
        name: user.user_metadata?.nombre_completo || 'Usuario', // Metadata si existe
      },
      back_urls: {
        success: `${siteUrl}/dashboard?status=success`,
        pending: `${siteUrl}/dashboard?status=pending`,
        failure: `${siteUrl}/shop?status=failure`,
      },
      auto_return: 'approved',
      // En producción, aquí va tu URL pública (ej. de ngrok/localtunnel si estás local)
      // Agregamos localtunnel_bypass para saltar la pantalla de seguridad de Localtunnel
      notification_url: `${siteUrl}/api/webhooks/mercadopago?localtunnel_bypass=true`,
    }

    // Creamos la preferencia en MP
    const createdPreference = await preference.create({ body: orderBody })

    // 2. Registramos los pedidos en Supabase (un registro por producto)
    // Usamos el ID de la preferencia para vincularlos a todos
    const pedidosInsert = items.map((item: any) => ({
      usuario_id: user.id,
      producto_id: item.id,
      estado_pago: 'pendiente',
      mp_preference_id: createdPreference.id,
      monto_total: item.precio * item.cantidad,
    }))

    const { error: dbError } = await supabase
      .from('pedidos')
      .insert(pedidosInsert)

    if (dbError) {
      console.error('Error insertando en pedidos:', dbError)
      return NextResponse.json({ error: 'Error interno registrando orden' }, { status: 500 })
    }

    // 3. Devolvemos la URL del Checkout al cliente
    return NextResponse.json({ 
      init_point: createdPreference.init_point,
      preferenceId: createdPreference.id 
    })
    
  } catch (error) {
    console.error('API Checkout Error:', error)
    return NextResponse.json({ error: 'Error procesando el pago' }, { status: 500 })
  }
}
