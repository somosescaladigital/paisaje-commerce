'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function ProductTypeModal() {
  const [isOpen, setIsOpen] = useState(false)

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-primary hover:bg-forest text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-primary/10 active:scale-95 inline-flex items-center gap-2 uppercase tracking-widest text-xs"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        Añadir Producto
      </button>
    )
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-primary/20 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="absolute inset-0" 
        onClick={() => setIsOpen(false)}
      ></div>
      
      <div className="relative bg-white rounded-[3rem] shadow-2xl p-10 max-w-2xl w-full border border-light-green/20 animate-in zoom-in-95 duration-300">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 text-primary/20 hover:text-primary transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <div className="text-center mb-10">
          <h2 className="text-4xl font-serif text-primary italic mb-2 leading-tight">
            ¿Qué vas a <span className="not-italic font-bold text-accent italic">crear</span> hoy?
          </h2>
          <p className="text-primary/40 font-sans tracking-tight">Selecciona el tipo de recurso que deseas añadir a tu catálogo.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Link 
            href="/commerce/admin/nuevo/digital"
            className="group block p-8 rounded-[2rem] bg-neutral-50 border border-neutral-100 hover:border-primary/20 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <h3 className="text-xl font-serif text-primary font-bold mb-2">Producto Digital</h3>
            <p className="text-sm text-primary/40 font-sans italic leading-relaxed">Guías PDF, recursos, kits de diseño y más.</p>
          </Link>

          <Link 
            href="/commerce/admin/nuevo/curso"
            className="group block p-8 rounded-[2rem] bg-neutral-50 border border-neutral-100 hover:border-forest/20 hover:bg-white hover:shadow-xl hover:shadow-forest/5 transition-all text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-forest opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-16 h-16 bg-forest/5 rounded-2xl flex items-center justify-center text-forest mx-auto mb-6 group-hover:scale-110 transition-transform">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
            </div>
            <h3 className="text-xl font-serif text-primary font-bold mb-2">Curso</h3>
            <p className="text-sm text-primary/40 font-sans italic leading-relaxed">Con videos, imágenes y contenido multimedia.</p>
          </Link>

          <Link 
            href="/commerce/admin/nuevo/membresia"
            className="group block p-8 rounded-[2rem] bg-neutral-50 border border-neutral-100 hover:border-accent/20 hover:bg-white hover:shadow-xl hover:shadow-accent/5 transition-all text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-16 h-16 bg-accent/5 rounded-2xl flex items-center justify-center text-accent mx-auto mb-6 group-hover:scale-110 transition-transform">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h3 className="text-xl font-serif text-primary font-bold mb-2">Membresía</h3>
            <p className="text-sm text-primary/40 font-sans italic leading-relaxed">Acceso recurrentes a la escuela y beneficios exclusivos.</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
