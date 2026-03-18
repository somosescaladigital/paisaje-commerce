import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const filePath = url.searchParams.get('path')

    if (!filePath) {
      return NextResponse.json({ error: 'Falta la ruta del archivo' }, { status: 400 })
    }

    const supabase = await createClient()

    // 1. Verificar Autenticación (Solo logueados)
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    // 2. Verificar que el usuario tenga permitido este archivo
    // Comprobamos en la dB si existe un pedido en estado 'approved' para un producto que contenga este 'archivo_url'
    const { data: permisoData, error: permisoError } = await supabase
      .from('pedidos')
      .select('id, productos!inner(id, archivo_url)')
      .eq('usuario_id', user.id)
      .eq('estado_pago', 'approved')
      .eq('productos.archivo_url', filePath)
      .limit(1)

    if (permisoError || !permisoData || permisoData.length === 0) {
      return NextResponse.json({ error: 'No tienes acceso a este archivo o la compra no está aprobada' }, { status: 403 })
    }

    // 3. Generar URL Firmada y Temporal
    // Esto firma una URL con el Service Role/Auth en background que vence en 60 segundos
    const { data: signedUrlData, error: signError } = await supabase
      .storage
      .from('productos-digitales-archivos')
      .createSignedUrl(filePath, 60, {
        download: true // Forza a que el navegador lo baje en lugar de abrirlo (opcional)
      })

    if (signError || !signedUrlData) {
      console.error('Error firmando URL:', signError)
      return NextResponse.json({ error: 'Error generando link seguro' }, { status: 500 })
    }

    // 4. Redirigir directamente al cliente al link de descarga segura de Supabase
    return NextResponse.redirect(signedUrlData.signedUrl)
    
  } catch (error) {
    console.error('Download API Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
