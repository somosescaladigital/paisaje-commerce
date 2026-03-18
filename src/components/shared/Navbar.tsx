import Link from 'next/link'
import CartSidebar from '@/components/features/CartSidebar'
import UserDropdown from '@/components/shared/UserDropdown'
import { createClient } from '@/lib/supabase/server'

export default async function Navbar() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <header className="sticky top-0 z-40 w-full px-4 sm:px-8 py-4">
      <div className="max-w-7xl mx-auto bg-background/60 backdrop-blur-xl border border-white/20 rounded-[2rem] shadow-lg shadow-primary/5">
        <div className="flex items-center justify-between h-16 px-6 sm:px-8">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-serif text-xl sm:text-2xl text-primary tracking-tight">
              Paisajismo <span className="text-accent italic font-medium">y Sentidos</span>
            </span>
          </Link>

          {/* Navegación - Solo visible en desktop si no está logueado, sino va al dropdown */}
          {!user && (
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium text-primary/80 hover:text-primary transition-colors">Inicio</Link>
              <Link href="/shop" className="text-sm font-medium text-primary/80 hover:text-primary transition-colors">Catálogo</Link>
            </nav>
          )}

          {/* Acciones */}
          <div className="flex items-center gap-3 sm:gap-6">
            {!user && (
              <Link href="/shop" className="md:hidden text-sm font-medium text-primary/80 hover:text-primary transition-colors px-2">Tienda</Link>
            )}
            
            <CartSidebar />
            
            <div className="w-px h-6 bg-light-green/20"></div>

            {user ? (
              <UserDropdown user={user} />
            ) : (
              <Link href="/login" className="bg-primary hover:bg-forest text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md active:scale-95">
                Ingresar
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
