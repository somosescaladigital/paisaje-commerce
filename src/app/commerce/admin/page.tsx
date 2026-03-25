import React from 'react'
import { isAdminAuthenticated } from '@/lib/admin-auth'
import { redirect } from 'next/navigation'

export default async function AdminDashboard() {
  const authenticated = await isAdminAuthenticated()

  if (!authenticated) {
    redirect('/commerce/admin/login')
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-5xl font-serif text-primary mb-4 leading-tight italic">
          Bienvenida, <span className="not-italic font-bold">Mariana</span>
        </h1>
        <p className="text-primary/60 text-lg sm:text-xl font-sans max-w-2xl leading-relaxed">
          Este es tu espacio exclusivo para gestionar el crecimiento de Paisajismo y Sentidos. 
          Aquí podrás supervisar las métricas clave y administrar tus recursos digitales.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Stat Cards */}
        <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-primary/5 border border-light-green/10 flex flex-col gap-4">
          <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
          </div>
          <div>
            <span className="text-3xl font-serif text-primary block">24</span>
            <span className="text-xs font-bold text-primary/40 uppercase tracking-widest">Ventas Hoy</span>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-primary/5 border border-light-green/10 flex flex-col gap-4">
          <div className="w-12 h-12 bg-accent/5 rounded-2xl flex items-center justify-center text-accent">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <div>
            <span className="text-3xl font-serif text-primary block">1,240</span>
            <span className="text-xs font-bold text-primary/40 uppercase tracking-widest">Alumnos Activos</span>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-primary/5 border border-light-green/10 flex flex-col gap-4">
          <div className="w-12 h-12 bg-forest/5 rounded-2xl flex items-center justify-center text-forest">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          </div>
          <div>
            <span className="text-3xl font-serif text-primary block">$12,450</span>
            <span className="text-xs font-bold text-primary/40 uppercase tracking-widest">Ingresos Mes</span>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-neutral-900 rounded-[2.5rem] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 animate-in fade-in duration-1000">
        <div className="max-w-xl">
          <h3 className="text-3xl font-serif mb-4 italic">¿Lista para subir nuevos recursos?</h3>
          <p className="text-white/60 font-sans leading-relaxed">
            Mantén tu catálogo actualizado con las últimas herramientas y guías para nuestra comunidad de paisajistas.
          </p>
        </div>
        <button className="bg-accent hover:bg-accent/80 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-accent/20 active:scale-95 whitespace-nowrap uppercase tracking-widest text-sm">
          Añadir Nuevo Producto
        </button>
      </div>
    </div>
  )
}
