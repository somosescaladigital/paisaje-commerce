'use client'

import React from 'react'
import Link from 'next/link'
import { adminLogout } from '@/app/commerce/admin/actions'

export default function AdminNavbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-[1000] px-4 sm:px-8 py-4 animate-in slide-in-from-top duration-500">
      <div className="max-w-7xl mx-auto bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl">
        <div className="flex items-center justify-between h-16 px-6 sm:px-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-accent rounded-2xl flex items-center justify-center text-white font-bold shadow-lg shadow-accent/20">
              M
            </div>
            <div className="flex flex-col">
              <span className="text-white font-serif text-lg leading-tight tracking-tight">¡Bienvenida <span className="text-accent italic">Mariana!</span></span>
              <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Panel de Control Superadmin</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/commerce/admin" className="text-xs font-bold text-white/60 hover:text-white uppercase tracking-widest transition-colors">Inicio</Link>
            <Link href="/commerce/shop" className="text-xs font-bold text-white/60 hover:text-white uppercase tracking-widest transition-colors">Volver a la Tienda</Link>
          </nav>

          <form action={adminLogout}>
            <button className="bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 px-6 py-2 rounded-2xl text-xs font-bold transition-all active:scale-95 uppercase tracking-widest">
              Cerrar Sesión
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}
