import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = await createClient()

  // 1. Obtener sesión actual
  const { data: { user }, error: userError } = await supabase.auth.getUser()

  if (userError || !user) {
    redirect('/commerce/login')
  }

  // 2. Obtener perfil
  const { data: perfil } = await supabase
    .from('perfiles')
    .select('*')
    .eq('id', user.id)
    .single()

  // 3. Obtener "Mis Membresías" (activos o vencidos)
  const { data: misMembresias } = await supabase
    .from('membresias_usuarios')
    .select(`
      *,
      productos (
        id,
        nombre,
        descripcion,
        imagen_url
      )
    `)
    .eq('usuario_id', user.id)
    .order('fecha_inicio', { ascending: false })

  // 4. Obtener "Mis Recursos" (pedidos APPROVED que NO son membresías para no duplicar, o todos)
  // Filtramos para que solo aparezcan productos digitales simples aquí
  const { data: misCompras, error: comprasError } = await supabase
    .from('pedidos')
    .select(`
      id,
      monto_total,
      created_at,
      estado_pago,
      pago_tipo,
      productos (
        id,
        nombre,
        descripcion,
        imagen_url,
        archivo_url,
        es_membresia
      )
    `)
    .eq('usuario_id', user.id)
    .eq('estado_pago', 'approved')
    .order('created_at', { ascending: false })

  // Filtrar recursos para no mostrar el pago de la membresía como un "Recurso" si ya está arriba
  const recursosDigitales = misCompras?.filter((c: any) => !c.productos?.es_membresia) || []

  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-12 py-8">
      {/* Saludo */}
      <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-sm border border-light-green/20 relative overflow-hidden">
        <div className="relative z-10 text-center sm:text-left">
          <h2 className="text-4xl sm:text-5xl font-serif text-primary mb-4 leading-tight">
            Hola, <span className="text-accent italic">{perfil?.nombre_completo || user.email?.split('@')[0]}</span> 👋
          </h2>
          <p className="text-primary/60 max-w-lg text-lg italic font-sans leading-relaxed">
            Tu jardín digital de conocimientos. Aquí tienes acceso a todas las herramientas y recursos que has adquirido.
          </p>
        </div>
        {/* Decoración sutil */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-light-green/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
      </div>

      {/* Mis Membresías */}
      <div className="px-4 sm:px-0">
        <h3 className="text-3xl font-serif text-primary mb-8 border-b border-light-green/20 pb-4">Mis Membresías</h3>
        
        {!misMembresias || misMembresias.length === 0 ? (
          <div className="bg-white/50 rounded-[2rem] p-10 text-center border border-light-green/10">
             <p className="text-primary/40 font-sans text-sm italic">No tienes suscripciones activas actualmente.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {misMembresias.map((memb: any) => {
              const producto = memb.productos
              const porcentaje = Math.min(Math.round((memb.meses_abonados / memb.duracion_total) * 100), 100)
              const esActiva = memb.estado === 'activa'

              return (
                <div key={memb.id} className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-light-green/20 flex flex-col hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                  
                  <div className="flex gap-6 items-start mb-8 relative z-10">
                    <div className="w-20 h-20 bg-background rounded-2xl overflow-hidden flex-shrink-0 border border-light-green/10">
                      {producto?.imagen_url && <img src={producto.imagen_url} alt="" className="w-full h-full object-cover" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${esActiva ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                          {esActiva ? 'Activa' : 'Vencida'}
                        </span>
                        <span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest">Membresía {memb.duracion_total}m</span>
                      </div>
                      <h4 className="font-serif text-xl text-primary leading-tight">{producto?.nombre}</h4>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-end">
                      <span className="text-xs font-bold text-primary/40 uppercase tracking-widest">Progreso del Plan</span>
                      <span className="text-sm font-serif text-accent">{memb.meses_abonados} / {memb.duracion_total} meses</span>
                    </div>
                    <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-accent transition-all duration-1000 ease-out" 
                        style={{ width: `${porcentaje}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="mt-auto flex gap-4">
                    <a 
                      href="/classroom" 
                      className={`flex-1 text-center py-4 rounded-2xl font-bold text-sm transition-all shadow-md active:scale-95 ${esActiva ? 'bg-primary hover:bg-forest text-white' : 'bg-neutral-100 text-neutral-400 cursor-not-allowed'}`}
                    >
                      Entrar al Classroom
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Mis Recursos */}
      <div className="px-4 sm:px-0">
        <h3 className="text-3xl font-serif text-primary mb-8 border-b border-light-green/20 pb-4">Mis Recursos</h3>
        
        {recursosDigitales.length === 0 ? (
          <div className="bg-white/50 rounded-[2rem] p-16 text-center border-2 border-light-green/20 border-dashed">
             <p className="text-primary/50 font-serif text-xl mb-8 italic">Aún no tienes recursos descargables en tu biblioteca.</p>
             <a href="/commerce/shop" className="bg-primary hover:bg-forest text-white px-10 py-4 rounded-full font-bold transition-all inline-block shadow-lg">
               Explorar Catálogo
             </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {recursosDigitales.map((compra: any) => {
              const producto = compra.productos
              if (!producto) return null

              return (
                <div key={compra.id} className="bg-white rounded-[2rem] p-8 shadow-sm border border-light-green/20 flex flex-col hover:shadow-xl transition-all duration-300 group">
                  
                  {/* Info Producto */}
                  <div className="flex gap-6 items-start">
                    <div className="w-24 h-24 bg-background rounded-2xl flex-shrink-0 overflow-hidden relative border border-light-green/10 group-hover:border-accent/30 transition-colors">
                      {producto.imagen_url ? (
                        <img src={producto.imagen_url} alt={producto.nombre} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-primary/30 font-serif text-2xl">PDF</div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-serif text-xl text-primary leading-tight mb-2 group-hover:text-forest transition-colors">{producto.nombre}</h4>
                      <p className="text-sm text-primary/60 italic line-clamp-2">{producto.descripcion || 'Recurso digital educativo'}</p>
                    </div>
                  </div>

                  {/* Acciones */}
                  <div className="mt-8 pt-6 border-t border-light-green/10 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-primary/40 font-bold mb-1">Tipo</span>
                      <span className="text-xs font-bold text-forest bg-forest/5 px-3 py-1 rounded-full border border-forest/10">
                        Descargable
                      </span>
                    </div>
                    
                    <form action={`/api/descargar`} method="GET">
                      <input type="hidden" name="path" value={producto.archivo_url} />
                      <button 
                        type="submit"
                        className="flex items-center gap-3 bg-primary hover:bg-forest text-white px-6 py-3 rounded-2xl font-bold text-sm transition-all shadow-md active:scale-95"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        Descargar
                      </button>
                    </form>
                  </div>

                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
