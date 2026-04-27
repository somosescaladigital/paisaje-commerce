'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { createProduct } from '../actions'
import FileUpload from '@/components/admin/FileUpload'

export default function NewCoursePage() {
  const [videoCount, setVideoCount] = useState(1)

  const addVideoField = () => {
    setVideoCount(videoCount + 1)
  }

  const removeVideoField = (index: number) => {
    setVideoCount(videoCount - 1)
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
        <h1 className="text-5xl font-serif text-primary italic leading-tight">
          Nuevo <span className="not-italic font-bold">Curso</span>
        </h1>
        <p className="text-primary/60 mt-2 font-sans italic">Crea un curso completo con imágenes y videos para tu comunidad.</p>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-xl shadow-primary/5 border border-light-green/20 overflow-hidden">
        <form action={createProduct} className="p-10 space-y-8">
          <input type="hidden" name="type" value="curso" />
          
          {/* Información Básica */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary/40 uppercase tracking-widest ml-1">Nombre del Curso</label>
              <input 
                type="text" 
                name="nombre" 
                placeholder="Ej: Diseño de Jardines Sostenibles" 
                required 
                className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all font-sans"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary/40 uppercase tracking-widest ml-1">Precio (ARS)</label>
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

          {/* Descripción */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-primary/40 uppercase tracking-widest ml-1">Descripción del Curso</label>
            <textarea 
              name="descripcion" 
              placeholder="Cuenta de qué trata el curso, qué aprenderán los alumnos..." 
              required 
              rows={5}
              className="w-full rounded-2xl border border-neutral-100 bg-neutral-50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all font-sans resize-none"
            ></textarea>
          </div>

          {/* Imágenes del Curso */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h3 className="text-sm font-bold text-primary uppercase tracking-widest">Multimedia del Curso</h3>
              <div className="flex-1 h-px bg-light-green/10"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FileUpload 
                name="imagen"
                label="Portada Principal (Imagen)"
                accept="image/*"
                required
              />
              
              <FileUpload 
                name="imagen_galeria"
                label="Imágenes Adicionales (Galería)"
                accept="image/*"
                multiple
                accentColor="accent"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-primary/40 uppercase tracking-widest ml-1">Videos del Curso</label>
              <p className="text-[12px] text-primary/40 italic font-sans">Puedes agregar URLs de YouTube o cargar archivos de video</p>
              <div className="space-y-2">
                {Array.from({ length: videoCount }).map((_, index) => (
                  <div key={index} className="flex gap-2">
                    <input 
                      type="text" 
                      name="video_url" 
                      placeholder="https://youtube.com/watch?v=... o URL de video" 
                      className="flex-1 rounded-2xl border border-neutral-100 bg-neutral-50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-accent/10 transition-all font-sans text-[14px]"
                    />
                    {index === videoCount - 1 ? (
                      <button 
                        type="button"
                        onClick={addVideoField}
                        className="px-6 py-4 rounded-2xl bg-accent/10 hover:bg-accent/20 text-accent font-bold transition-all"
                      >
                        +
                      </button>
                    ) : (
                      <button 
                        type="button"
                        onClick={() => removeVideoField(index)}
                        className="px-6 py-4 rounded-2xl bg-red-50 hover:bg-red-100 text-red-600 font-bold transition-all"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <FileUpload 
                name="video_archivo"
                label="O Sube Archivos de Video (MP4, WebM)"
                accept="video/mp4,video/webm,.mp4,.webm"
                multiple
                accentColor="accent"
              />
            </div>
          </div>

          {/* Recursos Adicionales (Opcional) */}
          <div className="space-y-2 pt-4">
            <label className="text-xs font-bold text-primary/40 uppercase tracking-widest ml-1">Archivos Adicionales (PDFs, Documentos)</label>
            <FileUpload 
              name="archivo"
              label="Materiales de Apoyo"
              accept=".pdf,.xlsx,.xls,.docx,.doc"
              multiple
              accentColor="forest"
            />
          </div>

          {/* Botón Submit */}
          <div className="pt-6 border-t border-light-green/10 flex justify-end">
            <button type="submit" className="bg-primary hover:bg-forest text-white px-12 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-primary/20 active:scale-[0.98] uppercase tracking-widest text-sm flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
              Crear Curso
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
