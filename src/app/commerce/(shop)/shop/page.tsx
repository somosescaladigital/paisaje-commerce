import { createClient } from '@/lib/supabase/server'
import ProductGrid from '@/components/features/ProductGrid'

// Asegura que la página sea dinámica o revalidada para mostrar nuevos productos en la BD
export const revalidate = 60 // revalida cada 60 segundos por defecto
// o export const dynamic = 'force-dynamic' si queremos 100% fresco siempre

export default async function ShopPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  // Obtenemos todos los productos (ordenados por fecha de creación desc)
  const { data: productos, error } = await supabase
    .from('productos')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching products:', error)
  }

  return (
    <div className="min-h-screen bg-background w-full pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-4xl sm:text-6xl font-serif text-primary mb-6 leading-tight">
            Nuestros <span className="text-accent italic">Recursos</span>
          </h1>
          <p className="text-primary/60 max-w-2xl mx-auto text-lg sm:text-xl font-sans italic leading-relaxed">
            Herramientas diseñadas para paisajistas que buscan fusionar técnica, creatividad y propósito en cada proyecto.
          </p>
          <div className="mt-8 w-24 h-1 bg-accent/30 mx-auto rounded-full"></div>
        </header>

        {/* Server Component que pasa datos directamente de Supabase al Client Component */}
        <ProductGrid products={productos || []} user={user} />
      </div>
    </div>
  )
}
