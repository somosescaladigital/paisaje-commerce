import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

export default async function Home() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="flex flex-col items-center justify-center text-center bg-neutral-50 w-full h-full flex-1 p-8">
      <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-4">Escala Digital</h1>
      <p className="text-lg md:text-xl text-neutral-600 mb-10 max-w-lg">
        La plataforma de tienda virtual y servicios para paisajismo.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        {user ? (
          <Link href="/commerce/dashboard" className="block w-full sm:w-auto bg-green-700 hover:bg-green-800 text-white font-medium px-8 py-3 rounded-xl transition-colors shadow-sm text-lg">
            Ir a mi Panel
          </Link>
        ) : (
          <>
            <Link href="/commerce/login" className="block w-full sm:w-auto bg-green-700 hover:bg-green-800 text-white font-medium px-8 py-3 rounded-xl transition-colors shadow-sm text-lg">
              Iniciar Sesión
            </Link>
            <Link href="/commerce/register" className="block w-full sm:w-auto bg-white hover:bg-neutral-50 border border-neutral-300 text-neutral-700 font-medium px-8 py-3 rounded-xl transition-colors shadow-sm text-lg">
              Crear Cuenta
            </Link>
          </>
        )}
      </div>
    </div>
  )
}
