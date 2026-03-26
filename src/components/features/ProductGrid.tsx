'use client'

import React from 'react'
import { useCartStore } from '@/stores/useCartStore'
import { useAuthModalStore } from '@/stores/useAuthModalStore'
import { formatCurrency } from '@/lib/utils'
import { User } from '@supabase/supabase-js'

interface Product {
  id: string
  nombre: string
  descripcion: string
  precio: number
  imagen_url: string | null
  es_membresia?: boolean
  duracion_meses?: number
}

export default function ProductGrid({ 
  products,
  user
}: { 
  products: Product[],
  user: User | null
}) {
  if (!products || products.length === 0) {
    return (
      <div className="w-full py-20 text-center">
        <p className="text-neutral-500">Aún no hay productos disponibles. Vuelve más tarde.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} user={user} />
      ))}
    </div>
  )
}

function ProductCard({ product, user }: { product: Product, user: User | null }) {
  const addItem = useCartStore((state) => state.addItem)
  const { openModal } = useAuthModalStore()
  const [pagoTipo, setPagoTipo] = React.useState<'mensual' | 'total'>('mensual')

  const isMembresia = product.es_membresia
  const precioMostrar = (isMembresia && pagoTipo === 'mensual' && product.duracion_meses)
    ? product.precio / product.duracion_meses
    : product.precio

  const handleAdd = () => {
    if (!user) {
      openModal('login')
      return
    }
    addItem({
      id: product.id,
      nombre: product.nombre,
      precio: precioMostrar,
      imagen_url: product.imagen_url,
      pago_tipo: isMembresia ? pagoTipo : undefined
    })
  }

  return (
    <div className="bg-white group rounded-3xl border border-light-green/20 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      <div className="aspect-[4/5] bg-neutral-100 relative overflow-hidden">
        {product.imagen_url ? (
          <img 
            src={product.imagen_url} 
            alt={product.nombre}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-neutral-400 bg-neutral-100">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
          </div>
        )}
        {isMembresia && (
          <div className="absolute top-4 right-4 bg-accent text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
            Membresía {product.duracion_meses}m
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-serif text-xl text-primary mb-2 line-clamp-2 leading-tight group-hover:text-forest transition-colors">{product.nombre}</h3>
        {product.descripcion && (
          <p className="font-sans text-sm text-primary/60 line-clamp-2 mb-4 flex-1 italic">
            {product.descripcion}
          </p>
        )}

        {isMembresia && (
          <div className="flex bg-neutral-50 p-1 rounded-xl gap-1 mb-6 border border-neutral-100">
            <button 
              onClick={() => setPagoTipo('mensual')}
              className={`flex-1 py-2 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all ${pagoTipo === 'mensual' ? 'bg-white text-primary shadow-sm' : 'text-primary/30 hover:text-primary/60'}`}
            >
              1 Mes
            </button>
            <button 
              onClick={() => setPagoTipo('total')}
              className={`flex-1 py-2 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all ${pagoTipo === 'total' ? 'bg-white text-primary shadow-sm' : 'text-primary/30 hover:text-primary/60'}`}
            >
              Total
            </button>
          </div>
        )}
        
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-light-green/10">
          <div className="flex flex-col">
            <span className="text-2xl font-serif text-accent">
              {formatCurrency(precioMostrar)}
            </span>
            {isMembresia && pagoTipo === 'mensual' && (
              <span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest">por mes</span>
            )}
          </div>
          <button 
            onClick={handleAdd}
            className="bg-primary hover:bg-forest text-white h-12 w-12 flex items-center justify-center rounded-2xl transition-all shadow-md active:scale-95 group/btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
