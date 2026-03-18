'use client'

import { useState } from 'react'
import Link from 'next/link'
import { createProductAction } from './actions'

export default function NuevoProductoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setErrorMsg('')
    
    try {
      const res = await createProductAction(formData)
      if (res?.error) {
        setErrorMsg(res.error)
      }
    } catch (err: any) {
      setErrorMsg('Error de red al crear producto')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-8 py-4">
      <div className="flex items-center gap-6 pb-6 border-b border-light-green/20">
        <Link href="/admin" className="p-3 text-primary/40 hover:text-primary transition-colors rounded-2xl bg-white border border-light-green/10 hover:border-light-green/40 shadow-sm active:scale-95">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </Link>
        <div>
          <h2 className="text-3xl font-serif text-primary leading-tight">Nuevo Recurso</h2>
          <p className="text-primary/60 text-sm mt-1 italic font-sans leading-tight">Añade una nueva semilla de conocimiento a tu catálogo.</p>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] shadow-sm border border-light-green/20 p-8 sm:p-10">
        <form action={handleSubmit} className="flex flex-col gap-6">
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-primary/60 uppercase tracking-widest px-1" htmlFor="nombre">Nombre del Producto *</label>
            <input 
              type="text" 
              name="nombre" 
              id="nombre" 
              required
              className="rounded-2xl border border-light-green/30 bg-background/30 px-5 py-4 text-primary placeholder-primary/30 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all font-serif text-lg"
              placeholder="Ej. Guía Práctica de Paisajismo"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-neutral-900" htmlFor="descripcion">Descripción</label>
            <textarea 
              name="descripcion" 
              id="descripcion" 
              rows={3}
              className="rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all resize-none"
              placeholder="Explica qué incluye este recurso..."
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-primary/60 uppercase tracking-widest px-1" htmlFor="precio">Precio (ARS) *</label>
            <div className="relative">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-primary font-bold pr-2 border-r border-light-green/20">$</span>
              <input 
                type="number" 
                name="precio" 
                id="precio" 
                required
                min="0"
                step="0.01"
                className="w-full rounded-2xl border border-light-green/30 bg-background/30 pl-12 pr-5 py-4 text-primary placeholder-primary/30 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all font-serif text-lg"
                placeholder="0.00"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-neutral-100">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-green-700 flex items-center gap-2" htmlFor="portada">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                Imagen (Portada Pública)
              </label>
              <input 
                type="file" 
                name="portada" 
                id="portada" 
                accept="image/*"
                className="block w-full text-sm text-neutral-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 transition-all border border-neutral-200 rounded-xl"
              />
              <p className="text-xs text-neutral-500 mt-1">Sube a bucket: portadas</p>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-blue-700 flex items-center gap-2" htmlFor="archivo">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16h16V8l-6-6z"></path><path d="M14 2v6h6"></path><path d="M16 13H8"></path><path d="M16 17H8"></path><path d="M10 9H8"></path></svg>
                Archivo Digital (Privado)
              </label>
              <input 
                type="file" 
                name="archivo" 
                id="archivo" 
                accept=".pdf,.zip,.rar"
                className="block w-full text-sm text-neutral-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all border border-neutral-200 rounded-xl"
              />
              <p className="text-xs text-neutral-500 mt-1">Sube a bucket: archivos</p>
            </div>
          </div>

          {errorMsg && (
            <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm font-medium">
              {errorMsg}
            </div>
          )}

          <div className="pt-8 mt-4 border-t border-light-green/10 flex justify-end">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-primary hover:bg-forest disabled:bg-primary/50 disabled:cursor-not-allowed text-white px-10 py-4 rounded-[1.5rem] font-bold transition-all shadow-xl shadow-primary/10 flex items-center gap-3 active:scale-95"
            >
              {isSubmitting ? (
                 <>
                   <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                   </svg>
                   Guardando...
                 </>
              ) : (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                  Crear Producto
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
