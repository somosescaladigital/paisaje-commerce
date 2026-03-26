import Link from 'next/link'

export default function RootPage() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-light-green/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl w-full z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="flex justify-center mb-8">
            <img src="/landing/assets/logoico.png" alt="Logo" className="h-20 w-auto drop-shadow-sm" />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-primary mb-6 leading-tight">
            Bienvenidos a <br />
            <span className="italic font-normal">Paisajismo y Sentidos</span>
          </h1>
          <p className="font-sans text-xl text-primary/60 max-w-2xl mx-auto italic">
            Tu portal al mundo del diseño natural y el crecimiento profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          {/* Card Escuela */}
          <Link href="/landing" className="group">
            <div className="h-full bg-primary p-10 rounded-[2.5rem] shadow-xl shadow-primary/20 transition-all duration-500 hover:bg-white/80 hover:backdrop-blur-xl hover:border hover:border-white/40 hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500 text-white">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="font-serif text-3xl text-white group-hover:text-primary mb-4 transition-colors">Escuela</h2>
              <p className="text-white/80 group-hover:text-primary/60 mb-8 leading-relaxed transition-colors text-sm">
                Formación profesional con propósito. Explora nuestra metodología y cursos técnicos.
              </p>
              <span className="inline-flex items-center gap-2 text-white group-hover:text-primary font-bold group-hover:gap-4 transition-all uppercase tracking-widest text-[10px]">
                Ingresar
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </div>
          </Link>

          {/* Card Tienda */}
          <Link href="/commerce/shop" className="group">
            <div className="h-full bg-accent p-10 rounded-[2.5rem] shadow-xl shadow-accent/20 transition-all duration-500 hover:bg-white/80 hover:backdrop-blur-xl hover:border hover:border-white/40 hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-colors duration-500 text-white">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h2 className="font-serif text-3xl text-white group-hover:text-primary mb-4 transition-colors">Tienda</h2>
              <p className="text-white/80 group-hover:text-primary/60 mb-8 leading-relaxed transition-colors text-sm">
                Adquiere herramientas profesionales, guías y recursos para potenciar tus proyectos.
              </p>
              <span className="inline-flex items-center gap-2 text-white group-hover:text-primary font-bold group-hover:gap-4 transition-all uppercase tracking-widest text-[10px]">
                Explorar
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </div>
          </Link>

          {/* Card Campus (NUEVA) */}
          <Link href="https://www.paisajismoysentidos.ar" target="_blank" className="group">
            <div className="h-full bg-[#2C4A3E] p-10 rounded-[2.5rem] shadow-xl shadow-primary/20 transition-all duration-500 hover:bg-white/80 hover:backdrop-blur-xl hover:border hover:border-white/40 hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#2C4A3E] group-hover:text-white transition-colors duration-500 text-white">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="font-serif text-3xl text-white group-hover:text-primary mb-4 transition-colors">Campus</h2>
              <p className="text-white/80 group-hover:text-primary/60 mb-8 leading-relaxed transition-colors text-sm">
                Acceso exclusivo para alumnos. Nuestra plataforma de aprendizaje privado y tutorías.
              </p>
              <span className="inline-flex items-center gap-2 text-white group-hover:text-primary font-bold group-hover:gap-4 transition-all uppercase tracking-widest text-[10px]">
                Entrar al Campus
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
