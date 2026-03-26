'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useAuthModalStore } from '@/stores/useAuthModalStore'
import { useRouter } from 'next/navigation'
import { sendWelcomeAction } from '@/app/actions/emails'

export default function AuthModal() {
  const { isOpen, view, closeModal, setView } = useAuthModalStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [origin, setOrigin] = useState('')
  
  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOrigin(window.location.origin)
    }
  }, [])

  if (!isOpen) return null

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) closeModal()
  }

  const handleGoogleLogin = async () => {
    setLoading(true)
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${origin}/auth/callback`,
      },
    })
    if (error) setError(error.message)
    setLoading(false)
  }

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    if (view === 'login') {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) {
        setError('Credenciales inválidas')
      } else {
        closeModal()
        router.refresh()
      }
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            nombre_completo: name,
          },
        },
      })
      if (error) {
        setError(error.message)
      } else {
        // Enviar mail de bienvenida (no esperamos a que termine para no bloquear la UI)
        sendWelcomeAction(email, name).catch(console.error)
        
        setError('¡Registro exitoso! Por favor verifica tu email o inicia sesión.')
        // Opcionalmente cambiar a login view
        setTimeout(() => setView('login'), 2000)
      }
    }
    setLoading(false)
  }

  return (
    <div 
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-primary/20 backdrop-blur-sm p-4 animate-in fade-in duration-300"
      onClick={handleOverlayClick}
    >
      <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden border border-light-green/20 animate-in zoom-in-95 duration-300">
        <div className="p-8 sm:p-10">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="font-serif text-3xl text-primary leading-tight">
                {view === 'login' ? 'Bienvenido ' : 'Crea tu '}
                <span className="text-accent italic">{view === 'login' ? 'de vuelta' : 'cuenta'}</span>
              </h2>
              <p className="text-primary/60 mt-1 text-sm italic">
                {view === 'login' ? 'Ingresa a tu jardín de conocimientos' : 'Únete a nuestra comunidad de paisajistas'}
              </p>
            </div>
            <button 
              onClick={closeModal}
              className="text-primary/40 hover:text-primary transition-colors p-2"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <form onSubmit={handleEmailAuth} className="space-y-4">
            {view === 'register' && (
              <div className="space-y-1">
                <label className="text-xs font-bold text-primary/40 uppercase tracking-widest ml-1">Nombre Completo</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-2xl border border-light-green/20 bg-primary/5 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all font-sans"
                  required
                />
              </div>
            )}
            <div className="space-y-1">
              <label className="text-xs font-bold text-primary/40 uppercase tracking-widest ml-1">Email</label>
              <input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl border border-light-green/20 bg-primary/5 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all font-sans"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-primary/40 uppercase tracking-widest ml-1">Contraseña</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-2xl border border-light-green/20 bg-primary/5 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all font-sans"
                required
              />
            </div>

            {error && (
              <div className={`text-sm p-3 rounded-xl border font-medium text-center ${error.includes('exitoso') ? 'bg-green-50 text-green-600 border-green-100' : 'bg-red-50 text-red-600 border-red-100'}`}>
                {error}
              </div>
            )}

            <button 
              disabled={loading}
              className="w-full bg-primary hover:bg-forest text-white rounded-2xl py-4 font-bold transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:scale-100 mt-2"
            >
              {loading ? 'Procesando...' : view === 'login' ? 'Iniciar Sesión' : 'Registrarse'}
            </button>
          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-light-green/10"></div>
            <span className="text-xs font-bold text-primary/30 uppercase tracking-widest font-sans">O continua con</span>
            <div className="flex-1 h-px bg-light-green/10"></div>
          </div>

          <button 
            onClick={handleGoogleLogin}
            className="w-full bg-white border border-light-green/20 hover:bg-primary/5 text-primary rounded-2xl py-3 font-semibold transition-all flex items-center justify-center gap-3 shadow-sm active:scale-95"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25C22.56 11.47 22.49 10.74 22.36 10.04H12V14.22H17.93C17.67 15.58 16.92 16.73 15.77 17.49V20.21H19.33C21.41 18.29 22.56 15.51 22.56 12.25Z" fill="#4285F4" />
              <path d="M12 23C14.97 23 17.46 22.02 19.33 20.21L15.77 17.49C14.76 18.17 13.48 18.57 12 18.57C9.13 18.57 6.69 16.63 5.81 14.04H2.14V16.89C3.96 20.5 7.69 23 12 23Z" fill="#34A853" />
              <path d="M5.81 14.04C5.58 13.36 5.45 12.64 5.45 11.89C5.45 11.14 5.58 10.42 5.81 9.74V6.89H2.14C1.39 8.39 0.95 10.09 0.95 11.89C0.95 13.69 1.39 15.39 2.14 16.89L5.81 14.04Z" fill="#FBBC05" />
              <path d="M12 5.21C13.62 5.21 15.07 5.77 16.21 6.87L19.41 3.67C17.45 1.83 14.97 0.780029 12 0.780029C7.69 0.780029 3.96 3.28003 2.14 6.89003L5.81 9.74003C6.69 7.15003 9.13 5.21 12 5.21Z" fill="#EA4335" />
            </svg>
            Google
          </button>

          <div className="mt-8 text-center text-sm">
            <button 
              onClick={() => setView(view === 'login' ? 'register' : 'login')}
              className="text-primary/60 hover:text-forest transition-colors font-sans italic"
            >
              {view === 'login' ? '¿Aún no tienes cuenta? ' : '¿Ya tienes cuenta? '}
              <span className="text-forest font-bold not-italic hover:underline ml-1">
                {view === 'login' ? 'Regístrate aquí' : 'Inicia sesión'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
