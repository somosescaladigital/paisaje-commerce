import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartItem {
  id: string
  nombre: string
  precio: number
  imagen_url: string | null
  cantidad: number
  pago_tipo?: 'mensual' | 'total'
}

interface CartState {
  items: CartItem[]
  isSidebarOpen: boolean
  addItem: (item: Omit<CartItem, 'cantidad'>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, cantidad: number) => void
  clearCart: () => void
  openSidebar: () => void
  closeSidebar: () => void
  getTotal: () => number
  getTotalItems: () => number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isSidebarOpen: false,
      
      openSidebar: () => set({ isSidebarOpen: true }),
      closeSidebar: () => set({ isSidebarOpen: false }),

      addItem: (newItem) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === newItem.id && item.pago_tipo === newItem.pago_tipo
          )
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === newItem.id && item.pago_tipo === newItem.pago_tipo
                  ? { ...item, cantidad: item.cantidad + 1 }
                  : item
              ),
              isSidebarOpen: true,
            }
          }
          return { 
            items: [...state.items, { ...newItem, cantidad: 1 }],
            isSidebarOpen: true,
          }
        })
      },
      
      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }))
      },
      
      updateQuantity: (id, cantidad) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, cantidad: Math.max(1, cantidad) } : item
          ),
        }))
      },
      
      clearCart: () => set({ items: [] }),
      
      getTotal: () => {
        const { items } = get()
        return items.reduce((total, item) => total + item.precio * item.cantidad, 0)
      },
      
      getTotalItems: () => {
        const { items } = get()
        return items.reduce((total, item) => total + item.cantidad, 0)
      },
    }),
    {
      name: 'escala-cart-storage', // Key para el localStorage
    }
  )
)
