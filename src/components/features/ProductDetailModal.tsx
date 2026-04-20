'use client'

import React from 'react'
import { useCartStore } from '@/stores/useCartStore'
import { useAuthModalStore } from '@/stores/useAuthModalStore'
import { formatCurrency } from '@/lib/utils'
import { User } from '@supabase/supabase-js'

interface ProductFile {
  id: string
  nombre_archivo: string
  archivo_url: string
}

interface ProductDetailModalProps {
  product: {
    id: string
    nombre: string
    descripcion: string
    precio: number
    imagen_url: string | null
    es_membresia?: boolean
    duracion_meses?: number
  }
  archivos: ProductFile[]
  user: User | null
  isOpen: boolean
  onClose: () => void
}

export default function ProductDetailModal({
  product,
  archivos,
  user,
  isOpen,
  onClose
}: ProductDetailModalProps) {
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
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6">
        <div 
          className="relative bg-white rounded-3xl max-w-6xl w-full shadow-2xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
            aria-label="Cerrar"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 p-6 sm:p-10">
            {/* Image Column */}
            <div className="md:col-span-3">
              <div className="aspect-4/5 bg-neutral-100 rounded-2xl overflow-hidden sticky top-6">
                {product.imagen_url ? (
                  <img
                    src={product.imagen_url}
                    alt={product.nombre}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-neutral-400">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="17 8 12 3 7 8"></polyline>
                      <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                  </div>
                )}
              </div>
            </div>

            {/* Info Column */}
            <div className="md:col-span-2 flex flex-col">
              {/* Badge */}
              {product.es_membresia && (
                <div className="inline-block bg-accent text-white text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-md mb-4 w-fit">
                  Membresía {product.duracion_meses}m
                </div>
              )}

              {/* Title */}
              <h1 className="font-serif text-3xl sm:text-4xl text-primary mb-4 leading-tight">
                {product.nombre}
              </h1>

              {/* Description */}
              <p className="text-primary/70 text-base leading-relaxed mb-6 italic">
                {product.descripcion}
              </p>

              {/* Archivos Incluidos */}
              {archivos && archivos.length > 0 && (
                <div className="mb-8">
                  <h2 className="font-serif text-lg text-primary mb-3">Archivos Incluidos</h2>
                  <div className="space-y-2 bg-neutral-50 rounded-xl p-4 border border-neutral-200">
                    {archivos.map((archivo) => (
                      <div 
                        key={archivo.id}
                        className="flex items-center gap-3 text-primary/70"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                        <span className="text-sm">{archivo.nombre_archivo}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Divider */}
              <div className="border-t border-light-green/10 my-6"></div>

              {/* Tipo de Pago (Membresías) */}
              {product.es_membresia && (
                <div className="mb-6">
                  <div className="flex bg-neutral-50 p-1 rounded-xl gap-1 border border-neutral-100">
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
                </div>
              )}

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-serif text-accent">
                    {formatCurrency(precioMostrar)}
                  </span>
                  {product.es_membresia && pagoTipo === 'mensual' && (
                    <span className="text-sm font-bold text-primary/30 uppercase tracking-widest">por mes</span>
                  )}
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAdd}
                className="w-full bg-primary hover:bg-forest text-white py-3 rounded-2xl font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
