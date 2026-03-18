'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { signOut } from '@/app/(auth)/actions'

interface UserDropdownProps {
  user: any
}

export default function UserDropdown({ user }: UserDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Cerrar al hacer clic afuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const userInitial = user.email?.charAt(0).toUpperCase() || 'U'
  const userName = user.user_metadata?.nombre_completo || user.email?.split('@')[0]

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 group focus:outline-none transition-all"
      >
        <div className="w-9 h-9 rounded-full bg-light-green/30 flex items-center justify-center text-primary border border-light-green/50 group-hover:bg-light-green/50 transition-colors shadow-sm overflow-hidden">
           {user.user_metadata?.avatar_url ? (
             <img src={user.user_metadata.avatar_url} alt="Avatar" className="w-full h-full object-cover" />
           ) : (
             <span className="font-bold text-sm">{userInitial}</span>
           )}
        </div>
        <svg 
          className={`w-4 h-4 text-primary/40 group-hover:text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Menú Desplegable */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-64 bg-white/90 backdrop-blur-xl rounded-[1.5rem] shadow-2xl border border-light-green/20 py-3 z-50 animate-in fade-in zoom-in duration-200">
          <div className="px-5 py-3 border-b border-light-green/10 mb-2">
            <p className="text-xs font-bold text-primary/40 uppercase tracking-widest mb-1">Cuenta</p>
            <p className="font-serif text-primary truncate leading-tight">{userName}</p>
            <p className="text-[10px] text-primary/40 truncate">{user.email}</p>
          </div>

          <div className="flex flex-col">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="px-5 py-2.5 text-sm text-primary/80 hover:text-primary hover:bg-light-green/10 transition-colors flex items-center gap-3"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
              Inicio
            </Link>
            <Link 
              href="/shop" 
              onClick={() => setIsOpen(false)}
              className="px-5 py-2.5 text-sm text-primary/80 hover:text-primary hover:bg-light-green/10 transition-colors flex items-center gap-3"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
              Catálogo
            </Link>
            <Link 
              href="/dashboard" 
              onClick={() => setIsOpen(false)}
              className="px-5 py-2.5 text-sm text-primary/80 hover:text-primary hover:bg-light-green/10 transition-colors flex items-center gap-3"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
              Mi Panel
            </Link>

            {/* Opción Admin si los metadatos lo indican (esto depende de tu lógica de roles) */}
            {user.email?.includes('admin') && (
               <Link 
               href="/admin" 
               onClick={() => setIsOpen(false)}
               className="px-5 py-2.5 text-sm text-accent hover:bg-accent/5 transition-colors flex items-center gap-3 font-semibold"
             >
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
               Administración
             </Link>
            )}

            <div className="mt-2 pt-2 border-t border-light-green/10 px-2">
              <form action={signOut}>
                <button 
                  type="submit"
                  className="w-full text-left px-3 py-2.5 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-all rounded-xl flex items-center gap-3 font-medium"
                >
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
                   Cerrar Sesión
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
