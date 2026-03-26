import { adminLogin } from '../actions'

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const { error } = await searchParams

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 px-6 font-sans">
      <div className="w-full max-w-md bg-white rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500">
        <div className="p-10">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-serif text-primary mb-2 italic tracking-tight">Acceso <span className="not-italic font-bold">Admin</span></h1>
            <p className="text-primary/60 text-sm">Paisajismo y Sentidos | Panel de Gestión</p>
          </div>

          <form action={adminLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-primary/40 uppercase tracking-widest ml-1">Usuario</label>
              <input
                type="text"
                name="username"
                required
                placeholder="superadmin"
                className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-sans"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-primary/40 uppercase tracking-widest ml-1">Contraseña</label>
              <input
                type="password"
                name="password"
                required
                placeholder="••••••••"
                className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-sans"
              />
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-bold border border-red-100 text-center animate-in shake duration-300">
                {error}
              </div>
            )}

            <button className="w-full bg-primary hover:bg-forest text-white rounded-2xl py-5 font-bold transition-all shadow-xl shadow-primary/20 active:scale-[0.98] mt-4 uppercase tracking-widest text-sm">
              Ingresar al Panel
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-xs text-primary/30">© 2026 Paisajismo y Sentidos. Acceso Restringido.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
