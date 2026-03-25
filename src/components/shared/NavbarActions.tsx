'use client'

import React from 'react'
import CartSidebar from '@/components/features/CartSidebar'
import UserDropdown from '@/components/shared/UserDropdown'
import { useAuthModalStore } from '@/stores/useAuthModalStore'
import { User } from '@supabase/supabase-js'

export default function NavbarActions({ user }: { user: User | null }) {
  const { openModal } = useAuthModalStore()

  return (
    <div className="flex items-center gap-4 sm:gap-6">
      {user && (
        <div className="flex items-center gap-2">
          <CartSidebar />
        </div>
      )}
      
      <div className="w-px h-8 bg-primary/10"></div>

      {user ? (
        <UserDropdown user={user} />
      ) : (
        <button 
          onClick={() => openModal('login')}
          className="bg-primary hover:bg-forest text-white px-7 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg active:scale-95"
        >
          Ingresar
        </button>
      )}
    </div>
  )
}
