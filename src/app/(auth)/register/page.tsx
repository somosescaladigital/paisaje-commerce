import { signup, signInWithGoogle } from '../actions'
import Link from 'next/link'

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ message: string }>
}) {
  const param = await searchParams;
  const message = param.message;

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Crear Cuenta</h1>
        <p className="text-neutral-500 mt-2">Accede a tus recursos y compras de paisajismo</p>
      </div>

      <form className="animate-in flex-1 flex flex-col w-full justify-center gap-4 text-neutral-800" action={signup}>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium" htmlFor="name">
            Nombre Completo
          </label>
          <input
            className="rounded-xl border border-neutral-300 bg-white px-4 py-3 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
            name="name"
            placeholder="Ej. María Pérez"
            required
            type="text"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-xl border border-neutral-300 bg-white px-4 py-3 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
            name="email"
            placeholder="tu@email.com"
            required
            type="email"
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium" htmlFor="password">
            Contraseña
          </label>
          <input
            className="rounded-xl border border-neutral-300 bg-white px-4 py-3 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
        </div>

        <button className="bg-green-700 hover:bg-green-800 text-white rounded-xl px-4 py-3 text-sm font-semibold transition-colors mt-4 shadow-sm">
          Registrarse
        </button>

        {message && (
          <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-xl text-center text-sm font-medium border border-red-100">
            {message}
          </div>
        )}
      </form>

      <div className="flex items-center gap-4 my-2">
        <div className="flex-1 border-t border-neutral-300"></div>
        <span className="text-sm text-neutral-500">O regístrate con</span>
        <div className="flex-1 border-t border-neutral-300"></div>
      </div>

      <form action={signInWithGoogle} className="w-full">
        <button className="w-full bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-700 rounded-xl px-4 py-3 text-sm font-semibold transition-colors shadow-sm flex items-center justify-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25C22.56 11.47 22.49 10.74 22.36 10.04H12V14.22H17.93C17.67 15.58 16.92 16.73 15.77 17.49V20.21H19.33C21.41 18.29 22.56 15.51 22.56 12.25Z" fill="#4285F4"/>
            <path d="M12 23C14.97 23 17.46 22.02 19.33 20.21L15.77 17.49C14.76 18.17 13.48 18.57 12 18.57C9.13 18.57 6.69 16.63 5.81 14.04H2.14V16.89C3.96 20.5 7.69 23 12 23Z" fill="#34A853"/>
            <path d="M5.81 14.04C5.58 13.36 5.45 12.64 5.45 11.89C5.45 11.14 5.58 10.42 5.81 9.74V6.89H2.14C1.39 8.39 0.95 10.09 0.95 11.89C0.95 13.69 1.39 15.39 2.14 16.89L5.81 14.04Z" fill="#FBBC05"/>
            <path d="M12 5.21C13.62 5.21 15.07 5.77 16.21 6.87L19.41 3.67C17.45 1.83 14.97 0.780029 12 0.780029C7.69 0.780029 3.96 3.28003 2.14 6.89003L5.81 9.74003C6.69 7.15003 9.13 5.21 12 5.21Z" fill="#EA4335"/>
          </svg>
          Google
        </button>
      </form>

      <div className="mt-8 text-center text-sm text-neutral-500">
        ¿Ya tienes cuenta?{' '}
        <Link href="/login" className="text-green-700 font-semibold hover:underline">
          Inicia sesión
        </Link>
      </div>
    </div>
  )
}
