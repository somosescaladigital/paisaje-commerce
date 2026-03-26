import React from 'react'
import Link from 'next/link'
import { createProduct } from '../actions'
import FileUpload from '@/components/admin/FileUpload'

export default function NewMembershipPage() {
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
        <h1 className="text-5xl font-serif text-primary italic leading-tight">
          Nueva <span className="not-italic font-bold">Membresía</span>
        </h1>
        <p className="text-primary/60 mt-2 font-sans italic">Configura una suscripción para el classroom privado.</p>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-xl shadow-primary/5 border border-light-green/20 overflow-hidden">
        <form action={createProduct} className="p-10 space-y-8">
          <input type="hidden" name="es_membresia" value="true" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary/40 uppercase tracking-widest ml-1">Nombre del Plan</label>
              <input 
                type="text" 
                name="nombre" 
                placeholder="Ej: Membresía 6 Meses - Acceso Full" 
                required 
                className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all font-sans"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary/40 uppercase tracking-widest ml-1">Precio Total (ARS)</label>
              <input 
                type="number" 
                name="precio" 
                placeholder="0.00" 
                step="0.01" 
                required 
                className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all font-sans"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary/40 uppercase tracking-widest ml-1">Duración (Meses)</label>
              <select 
                name="duracion_meses"
                required
                className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all font-sans appearance-none"
              >
                <option value="1">Mensual (1 Mes)</option>
                <option value="3">Trimestral (3 Meses)</option>
                <option value="6">Semestral (6 Meses)</option>
                <option value="12">Anual (12 Meses)</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-primary/40 uppercase tracking-widest ml-1">Descripción del Plan</label>
            <textarea 
              name="descripcion" 
              placeholder="Detalla qué incluye el acceso al classroom..." 
              required 
              rows={4}
              className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all font-sans resize-none"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FileUpload 
              name="imagen"
              label="Imagen de Portada (Plan)"
              accept="image/*"
            />
            
            <div className="space-y-4">
              <label className="text-xs font-bold text-primary/40 uppercase tracking-widest ml-1">Archivos Adjuntos (Opcional)</label>
              <FileUpload 
                name="archivo"
                label="Brochure o Info PDF"
                accept=".pdf,.xlsx,.xls,.docx,.doc"
                multiple
                accentColor="accent"
              />
            </div>
          </div>

          <div className="pt-6 border-t border-light-green/10 flex justify-end">
            <button className="bg-primary hover:bg-forest text-white px-12 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-primary/20 active:scale-[0.98] uppercase tracking-widest text-sm flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              Crear Membresía
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
