'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createProduct(formData: FormData) {
  const supabase = await createClient()

  const nombre = formData.get('nombre') as string
  const descripcion = formData.get('descripcion') as string
  const precio = parseFloat(formData.get('precio') as string)
  const es_membresia = formData.get('es_membresia') === 'true'
  const duracion_meses = parseInt(formData.get('duracion_meses') as string || '1')
  const imageFile = formData.get('imagen') as File
  const resourceFiles = formData.getAll('archivo') as File[]

  console.log('DEBUG: Creando producto', { 
    nombre, 
    imageSize: imageFile?.size, 
    imageName: imageFile?.name,
    resourcesCount: resourceFiles.length 
  })

  let imagen_url = ''

  // 1. Subir Imagen de Portada
  if (imageFile && imageFile.size > 0 && imageFile.name !== 'undefined') {
    const fileExt = imageFile.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    const { error: uploadError } = await supabase.storage
      .from('productos-digitales-portadas')
      .upload(fileName, imageFile)

    if (!uploadError) {
      const { data: { publicUrl } } = supabase.storage
        .from('productos-digitales-portadas')
        .getPublicUrl(fileName)
      imagen_url = publicUrl
    } else {
      console.error('ERROR UPLOADING IMAGE:', uploadError)
    }
  }

  // 2. Insertar Producto Principal
  const { data: productData, error: productError } = await supabase
    .from('productos')
    .insert({
      nombre,
      descripcion,
      precio,
      imagen_url,
      es_membresia,
      duracion_meses,
      archivo_url: '' // Satisfacer constraint NOT NULL mientras migramos
    })
    .select()
    .single()

  if (productError) {
    console.error('Error insertando producto:', productError)
    redirect('/commerce/admin/nuevo?error=database')
  }

  const productId = productData.id

  // 3. Subir e Insertar Archivos de Recurso
  for (const file of resourceFiles) {
    if (file && file.size > 0 && file.name !== 'undefined') {
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const originalName = file.name

      const { error: uploadError } = await supabase.storage
        .from('productos-digitales-archivos')
        .upload(fileName, file)

      if (!uploadError) {
        const { data: { publicUrl } } = supabase.storage
          .from('productos-digitales-archivos')
          .getPublicUrl(fileName)
        
        const { error: relError } = await supabase
          .from('producto_archivos')
          .insert({
            producto_id: productId,
            nombre_archivo: originalName,
            archivo_url: publicUrl
          })
        
        if (relError) {
          console.error('ERROR INSERTING INTO producto_archivos:', relError)
        }
      } else {
        console.error('ERROR UPLOADING RESOURCE:', uploadError)
      }
    }
  }

  revalidatePath('/commerce/admin')
  revalidatePath('/commerce/shop')
  redirect('/commerce/admin')
}

export async function deleteProduct(productId: string) {
  const supabase = await createClient()

  // SÓLO DESACTIVAMOS para no romper historial de pedidos (Soft Delete)
  const { error } = await supabase
    .from('productos')
    .update({ activo: false }) // En lugar de .delete()
    .eq('id', productId)

  if (error) {
    console.error('Error desactivando producto:', error)
    return { error: 'No se pudo eliminar el producto' }
  }

  revalidatePath('/commerce/admin')
  revalidatePath('/commerce/shop')
  return { success: true }
}

export async function deleteResourceFile(fileId: string) {
  const supabase = await createClient()

  const { error } = await supabase
    .from('producto_archivos')
    .delete()
    .eq('id', fileId)

  if (error) {
    console.error('Error eliminando archivo:', error)
    return { error: 'No se pudo eliminar el archivo' }
  }

  revalidatePath('/commerce/admin')
  return { success: true }
}

export async function updateProduct(formData: FormData) {
  const supabase = await createClient()

  const id = formData.get('id') as string
  const nombre = formData.get('nombre') as string
  const descripcion = formData.get('descripcion') as string
  const precio = parseFloat(formData.get('precio') as string)
  const es_membresia = formData.get('es_membresia') === 'true'
  const duracion_meses = parseInt(formData.get('duracion_meses') as string || '1')
  const imageFile = formData.get('imagen') as File
  const resourceFiles = formData.getAll('archivo') as File[]

  // 1. Actualizar datos básicos
  const updateData: any = {
    nombre,
    descripcion,
    precio,
    es_membresia: formData.get('es_membresia') === 'true',
    duracion_meses: parseInt(formData.get('duracion_meses') as string || '1'),
  }

  // 2. Subir nueva imagen si existe
  if (imageFile && imageFile.size > 0 && imageFile.name !== 'undefined') {
    const fileExt = imageFile.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    const { error: uploadError } = await supabase.storage
      .from('productos-digitales-portadas')
      .upload(fileName, imageFile)

    if (!uploadError) {
      const { data: { publicUrl } } = supabase.storage
        .from('productos-digitales-portadas')
        .getPublicUrl(fileName)
      updateData.imagen_url = publicUrl
    }
  }

  const { error: productError } = await supabase
    .from('productos')
    .update(updateData)
    .eq('id', id)

  if (productError) {
    console.error('Error actualizando producto:', productError)
    redirect(`/commerce/admin/editar/${id}?error=database`)
  }

  // 3. Subir nuevos archivos adicionales
  for (const file of resourceFiles) {
    if (file && file.size > 0 && file.name !== 'undefined') {
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const originalName = file.name

      const { error: uploadError } = await supabase.storage
        .from('productos-digitales-archivos')
        .upload(fileName, file)

      if (!uploadError) {
        const { data: { publicUrl } } = supabase.storage
          .from('productos-digitales-archivos')
          .getPublicUrl(fileName)
        
        await supabase
          .from('producto_archivos')
          .insert({
            producto_id: id,
            nombre_archivo: originalName,
            archivo_url: publicUrl
          })
      }
    }
  }

  revalidatePath('/commerce/admin')
  revalidatePath('/commerce/shop')
  revalidatePath(`/commerce/admin/editar/${id}`)
  redirect('/commerce/admin')
}
