import React from 'react'
import { createProduct } from '../actions'
import Link from 'next/link'
import FileUpload from '@/components/admin/FileUpload'

export default function NewProductPage() {
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
          Nuevo <span className="not-italic font-bold">Recurso Digital</span>
        </h1>
        <p className="text-primary/60 mt-2 font-sans italic">Sube materiales que inspiren y enseñen a tu comunidad.</p>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-xl shadow-primary/5 border border-light-green/20 overflow-hidden">
        <form action={createProduct} className="p-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary/40 uppercase tracking-widest ml-1">Nombre del Producto</label>
              <input 
                type="text" 
                name="nombre" 
                required 
                placeholder="Ej. Guía Maestra de Paisajismo"
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
                placeholder="0.00"
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
              placeholder="Cuenta de qué trata este recurso..."
              className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all font-sans resize-none"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FileUpload 
              name="imagen"
              label="Imagen de Portada (JPG/PNG)"
              accept="image/*"
              required
            />

            <FileUpload 
              name="archivo"
              label="Archivos del Recurso (PDF, Excel, Word)"
              accept=".pdf,.xlsx,.xls,.docx,.doc"
              multiple
              required
              accentColor="accent"
            />
          </div>

          <div className="pt-6 border-t border-light-green/10 flex justify-end">
            <button className="bg-primary hover:bg-forest text-white px-12 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-primary/20 active:scale-[0.98] uppercase tracking-widest text-sm flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
              Crear Producto
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
