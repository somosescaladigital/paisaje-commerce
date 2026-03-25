import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import NavbarActions from './NavbarActions'

export default async function Navbar() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <header className="fixed top-0 left-0 w-full z-1000 px-4 sm:px-8 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-xl border border-white/40 rounded-[2.5rem] shadow-xl shadow-primary/5">
        <div className="flex items-center justify-between h-16 px-6 sm:px-10">
          <Link href="/" className="flex items-center gap-3 group transition-transform hover:scale-[1.02]">
            <img src="/landing/assets/logoico.png" alt="Logo" className="h-10 w-auto" />
            <span className="font-serif text-xl sm:text-2xl text-primary tracking-tight font-semibold">
              Paisajismo <span className="text-accent italic font-normal">y Sentidos</span>
            </span>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link href="/landing" className="text-sm font-semibold text-primary/80 hover:text-primary transition-all relative group/item">
              Landing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover/item:w-full"></span>
            </Link>
            <Link href="/commerce/shop" className="text-sm font-semibold text-primary/80 hover:text-primary transition-all relative group/item">
              Catálogo
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover/item:w-full"></span>
            </Link>
          </nav>

          {/* Acciones */}
          <NavbarActions user={user} />
        </div>
      </div>
    </header>
  );
}
