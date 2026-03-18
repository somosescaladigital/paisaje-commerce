'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useCartStore } from '@/stores/useCartStore'
import { formatCurrency } from '@/lib/utils'

export default function CartSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { items, removeItem, updateQuantity, getTotal, getTotalItems } = useCartStore()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleCheckout = async () => {
    try {
      setIsLoading(true)
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Error al procesar el pago')
      }

      // Redirigimos al checkout de Mercado Pago
      if (data.init_point) {
        window.location.href = data.init_point
      }
    } catch (error: any) {
      alert(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="relative p-2 text-primary hover:text-forest transition-colors"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        {getTotalItems() > 0 && (
          <span className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full transform translate-x-1 -translate-y-1 shadow-sm">
            {getTotalItems()}
          </span>
        )}
      </button>

      {mounted && createPortal(
        <>
          {/* Overlay */}
          {isOpen && (
            <div 
              className="fixed inset-0 bg-black/60 z-[100] transition-opacity backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
          )}

          {/* Sidebar */}
          <div 
            className={`fixed top-0 right-0 h-full w-full sm:w-[500px] bg-white shadow-[-20px_0_50px_rgba(0,0,0,0.1)] z-[101] transform transition-transform duration-500 ease-out flex flex-col ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="p-8 border-b border-light-green/10 flex items-center justify-between bg-background">
              <h2 className="text-3xl font-serif text-primary italic">Tu Selección</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-3 text-primary/40 hover:text-primary hover:bg-light-green/10 rounded-2xl transition-all active:scale-90"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 bg-background/30 backdrop-blur-3xl">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-primary/40 gap-6">
                  <div className="w-20 h-20 bg-light-green/10 rounded-full flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="font-serif text-xl text-primary/60">Tu carrito está vacío</p>
                    <button 
                      onClick={() => setIsOpen(false)}
                      className="text-accent font-bold hover:underline mt-2 text-sm"
                    >
                      Explorar el catálogo
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-8">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-6 group">
                      <div className="w-28 h-28 bg-white rounded-[1.5rem] overflow-hidden shrink-0 relative border border-light-green/10 shadow-sm transition-transform group-hover:scale-105">
                         {item.imagen_url ? (
                           <img src={item.imagen_url} alt={item.nombre} className="w-full h-full object-cover" />
                         ) : (
                           <div className="w-full h-full flex items-center justify-center text-primary/10 bg-white">
                             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                               <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                               <polyline points="17 8 12 3 7 8"></polyline>
                               <line x1="12" y1="3" x2="12" y2="15"></line>
                             </svg>
                           </div>
                         )}
                      </div>
                      
                      <div className="flex flex-col flex-1 py-1">
                        <div className="flex justify-between items-start gap-3">
                          <h4 className="font-serif text-lg text-primary leading-tight line-clamp-2">{item.nombre}</h4>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-primary/20 hover:text-red-500 transition-colors p-1"
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M3 6h18"></path>
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            </svg>
                          </button>
                        </div>
                        
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center gap-4 border border-light-green/10 rounded-2xl px-2 py-1 bg-white shadow-sm">
                            <button 
                              onClick={() => updateQuantity(item.id, item.cantidad - 1)}
                              className="w-8 h-8 flex items-center justify-center text-primary/40 hover:text-primary transition-colors font-bold"
                            >
                              -
                            </button>
                            <span className="text-sm font-bold w-4 text-center text-primary">{item.cantidad}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.cantidad + 1)}
                              className="w-8 h-8 flex items-center justify-center text-primary/40 hover:text-primary transition-colors font-bold"
                            >
                              +
                            </button>
                          </div>
                          <span className="font-serif text-xl text-accent">
                            {formatCurrency(item.precio * item.cantidad)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-10 border-t border-light-green/10 bg-white">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-primary/60 font-serif text-lg italic">Subtotal</span>
                  <span className="text-3xl font-serif text-primary">{formatCurrency(getTotal())}</span>
                </div>
                <div className="flex items-center gap-3 mb-8 px-4 py-3 bg-background rounded-2xl border border-light-green/10">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-forest"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                   <p className="text-[10px] text-primary/60 font-bold uppercase tracking-widest">Pago 100% Seguro vía Mercado Pago</p>
                </div>
                <button 
                  onClick={handleCheckout}
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-forest disabled:bg-primary/50 disabled:cursor-not-allowed text-white text-xl font-bold py-6 rounded-[2rem] shadow-2xl shadow-primary/20 transition-all hover:shadow-forest/30 active:scale-[0.98] flex items-center justify-center gap-4 group"
                >
                  {isLoading ? (
                    <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <>
                      <span className="group-hover:translate-x-1 transition-transform">Finalizar Pedido</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </>,
        document.body
      )}
    </>
  )
}
