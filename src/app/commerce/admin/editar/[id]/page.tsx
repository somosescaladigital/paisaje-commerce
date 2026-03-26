import React from 'react'
import { createClient } from '@/lib/supabase/server'
import { updateProduct } from '../../nuevo/actions'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import FileUpload from '@/components/admin/FileUpload'
import DeleteResourceButton from '@/components/admin/DeleteResourceButton'

interface EditPageProps {
  params: { id: string }
}

export default async function EditProductPage({ params }: EditPageProps) {
  const { id } = await params
  const supabase = await createClient()

  const { data: product, error } = await supabase
    .from('productos')
    .select('*, producto_archivos(*)')
    .eq('id', id)
    .single()

  if (error || !product) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-10">
        <Link 
          href="/commerce/admin"
          className="text-primary/40 hover:text-primary transition-colors inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-6"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Volver al Panel
        </Link>
        <h1 className="text-4xl font-serif text-primary italic leading-tight">
          Editar <span className="not-italic font-bold">{product.nombre}</span>
        </h1>
        <p className="text-primary/60 mt-2 font-sans italic">Actualiza los detalles y recursos de este producto.</p>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-xl shadow-primary/5 border border-light-green/20 overflow-hidden">
        <form action={updateProduct} className="p-10 space-y-8">
          <input type="hidden" name="id" value={product.id} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary/40 uppercase tracking-widest ml-1">Nombre del Producto</label>
              <input 
                type="text" 
                name="nombre" 
                required 
                defaultValue={product.nombre}
                className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all font-sans"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary/40 uppercase tracking-widest ml-1">Precio (ARS)</label>
              <input 
                type="number" 
                name="precio" 
                step="0.01" 
                required 
                defaultValue={product.precio}
                className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all font-sans"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-primary/40 uppercase tracking-widest ml-1">Descripción</label>
            <textarea 
              name="descripcion" 
              required 
              rows={4}
              defaultValue={product.descripcion}
              className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all font-sans resize-none"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <FileUpload 
                name="imagen"
                label="Nueva Imagen de Portada (Opcional)"
                accept="image/*"
              />
              {product.imagen_url && (
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-neutral-100">
                  <img src={product.imagen_url} alt="Portada actual" className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">Portada Actual</div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <FileUpload 
                name="archivo"
                label="Añadir más Archivos (PDF, Excel, Word)"
                accept=".pdf,.xlsx,.xls,.docx,.doc"
                multiple
                accentColor="accent"
              />
              
              <div className="space-y-3">
                <label className="text-xs font-bold text-primary/40 uppercase tracking-widest ml-1">Recursos Actuales</label>
                {product.producto_archivos?.length === 0 ? (
                  <p className="text-sm text-primary/30 italic ml-1">No hay archivos vinculados.</p>
                ) : (
                  <div className="grid grid-cols-1 gap-2">
                    {product.producto_archivos.map((file: any) => (
                      <div key={file.id} className="flex items-center justify-between bg-neutral-50 p-3 rounded-2xl border border-neutral-50">
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className="w-8 h-8 bg-accent/5 text-accent rounded-lg flex items-center justify-center shrink-0">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                          </div>
                          <p className="text-xs font-bold text-primary truncate italic">{file.nombre_archivo}</p>
                        </div>
                        <DeleteResourceButton fileId={file.id} fileName={file.nombre_archivo} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-light-green/10 flex justify-end">
            <button className="bg-primary hover:bg-forest text-white px-12 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-primary/20 active:scale-[0.98] uppercase tracking-widest text-sm flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
