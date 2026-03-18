'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createProductAction(formData: FormData) {
  const supabase = await createClient()

  const nombre = formData.get('nombre') as string
  const descripcion = formData.get('descripcion') as string
  const precioStr = formData.get('precio') as string
  const precio = parseFloat(precioStr)

  const portadaFile = formData.get('portada') as File | null
  const archivoFile = formData.get('archivo') as File | null

  if (!nombre || isNaN(precio)) {
    return { error: 'Nombre y Precio son obligatorios' }
  }

  let imagen_url = null
  let archivo_url = null

  // 1. Subir imagenPortada al bucket público 'portadas'
  if (portadaFile && portadaFile.size > 0) {
    const fileExt = portadaFile.name.split('.').pop()
    const fileName = `${Date.now()}-portada.${fileExt}`

    // En Node.js (Server actions), es crucial convertir a Buffer/ArrayBuffer
    const buffer = await portadaFile.arrayBuffer()

    const { data: uploadData, error: uploadError } = await supabase
      .storage
      .from('productos-digitales-portadas') // <-- ESTE ES EL NOMBRE DEL BUCKET PÚBLICO
      .upload(fileName, buffer, {
        contentType: portadaFile.type,
      })

    if (uploadError) {
      console.error('Error subiendo portada:', uploadError)
      return { error: 'No se pudo subir la imagen de portada' }
    }

    // Obtener la URL pública inmediatamente porque el bucket es público
    const { data: publicUrlData } = supabase.storage.from('productos-digitales-portadas').getPublicUrl(fileName)
    imagen_url = publicUrlData.publicUrl
  }

  // 2. Subir PDF al bucket privado 'archivos'
  if (archivoFile && archivoFile.size > 0) {
    const fileExt = archivoFile.name.split('.').pop()
    const fileName = `${Date.now()}-archivo.${fileExt}`

    // Misma conversión a Buffer
    const buffer = await archivoFile.arrayBuffer()

    const { data: uploadData, error: uploadError } = await supabase
      .storage
      .from('productos-digitales-archivos') // <-- ESTE ES EL NOMBRE DEL BUCKET PRIVADO
      .upload(fileName, buffer, {
        contentType: archivoFile.type,
      })

    if (uploadError) {
      console.error('Error subiendo archivo PDF:', uploadError)
      return { error: 'No se pudo subir el archivo PDF' }
    }

    // Para buckets privados guardamos el path interno (path del archivo en el bucket)
    // Luego se generarán URLs firmadas cuando el cliente pague.
    archivo_url = uploadData.path
  }

  // 3. Insertar el producto en la base de datos
  const { error: insertError } = await supabase
    .from('productos')
    .insert({
      nombre,
      descripcion,
      precio,
      imagen_url,
      archivo_url
    })

  if (insertError) {
    console.error('Error insertando producto en DB:', insertError)
    return { error: 'Error guardando datos del producto en la base de datos' }
  }

  revalidatePath('/admin')
  revalidatePath('/shop')
  redirect('/admin')
}
