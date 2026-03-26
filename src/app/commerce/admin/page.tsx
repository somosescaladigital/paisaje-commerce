import React from 'react'
import { isAdminAuthenticated } from '@/lib/admin-auth'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { formatCurrency } from '@/lib/utils'
import Link from 'next/link'
import ProductTypeModal from '@/components/admin/ProductTypeModal'

import DeleteProductButton from '@/components/admin/DeleteProductButton'

export default async function AdminDashboard() {
  const authenticated = await isAdminAuthenticated()

  if (!authenticated) {
    redirect('/commerce/admin/login')
  }

  const supabase = await createClient()
  const { data: productos, error } = await supabase
    .from('productos')
    .select('*, producto_archivos(id, nombre_archivo)')
    .eq('activo', true)
    .order('created_at', { ascending: false })

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* ... (anterior Header y Stats) ... */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-5xl font-serif text-primary mb-4 leading-tight italic">
            Bienvenida, <span className="not-italic font-bold">Mariana</span>
          </h1>
          <p className="text-primary/60 text-lg font-sans max-w-2xl italic leading-relaxed">
            Este es tu espacio para gestionar los recursos de Paisajismo y Sentidos.
          </p>
        </div>
        <ProductTypeModal />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-light-green/10 flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
          </div>
          <div>
            <span className="text-2xl font-serif text-primary block leading-tight">{productos?.length || 0}</span>
            <span className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">Productos</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-light-green/10 flex items-center gap-4">
          <div className="w-12 h-12 bg-accent/5 rounded-2xl flex items-center justify-center text-accent">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <div>
            <span className="text-2xl font-serif text-primary block leading-tight">1,240</span>
            <span className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">Alumnos</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-light-green/10 flex items-center gap-4">
          <div className="w-12 h-12 bg-forest/5 rounded-2xl flex items-center justify-center text-forest">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          </div>
          <div>
            <span className="text-2xl font-serif text-primary block leading-tight">$12,450</span>
            <span className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">Ingresos</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-sm border border-light-green/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="uppercase tracking-widest border-b border-light-green/10 bg-neutral-50">
              <tr>
                <th scope="col" className="px-8 py-5 text-primary/40 font-bold text-[10px]">Producto</th>
                <th scope="col" className="px-8 py-5 text-primary/40 font-bold text-[10px]">Precio</th>
                <th scope="col" className="px-8 py-5 text-primary/40 font-bold text-[10px]">Recursos</th>
                <th scope="col" className="px-8 py-5 text-primary/40 font-bold text-[10px] text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {productos?.length === 0 ? (
                <tr><td colSpan={4} className="px-8 py-20 text-center text-primary/40 italic">No hay productos cargados aún.</td></tr>
              ) : (
                productos?.map((prod: any) => {
                  const archivos = prod.producto_archivos || []
                  const hasArchivos = archivos.length > 0

                  return (
                    <tr key={prod.id} className="hover:bg-neutral-50 transition-colors group">
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-neutral-100 overflow-hidden border border-neutral-200">
                            {prod.imagen_url && <img src={prod.imagen_url} alt="" className="w-full h-full object-cover" />}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-serif text-base text-primary font-bold">{prod.nombre}</p>
                              {prod.es_membresia && (
                                <span className="bg-accent/10 text-accent text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Membresía {prod.duracion_meses}m</span>
                              )}
                            </div>
                            <p className="text-[10px] text-primary/40 font-sans uppercase tracking-wider">{prod.id.slice(0, 8)}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-5 font-serif text-base text-accent">
                        {formatCurrency(prod.precio)}
                      </td>
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-2">
                          <span className={`flex items-center justify-center w-8 h-8 rounded-lg border ${hasArchivos ? 'bg-green-50 text-green-600 border-green-100' : 'bg-red-50 text-red-600 border-red-100'}`}>
                            {hasArchivos ? (
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                            ) : (
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                            )}
                          </span>
                          {archivos.length > 1 && (
                            <span className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">
                              {archivos.length} archivos
                            </span>
                          )}
                          {archivos.length === 1 && (
                            <span className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">
                              1 archivo
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-8 py-5 text-right flex items-center justify-end gap-2">
                        <Link 
                          href={`/commerce/admin/editar/${prod.id}`}
                          className="text-primary/30 hover:text-accent p-2 transition-colors"
                          title="Editar producto"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                        </Link>
                        <DeleteProductButton productId={prod.id} productName={prod.nombre} />
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
