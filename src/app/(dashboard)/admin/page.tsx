import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { formatCurrency } from '@/lib/utils'

export default async function AdminProductsPage() {
  const supabase = await createClient()
  
  // Fetch productos para llenar la tabla del admin
  const { data: productos, error } = await supabase
    .from('productos')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error cargando productos:', error)
  }

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-8 py-4">
      <div className="flex items-center justify-between pb-6 border-b border-light-green/20">
        <div>
          <h2 className="text-3xl font-serif text-primary leading-tight">Gestión de Productos</h2>
          <p className="text-primary/60 text-sm mt-1 italic">Sube y edita tus infoproductos y PDFs aquí.</p>
        </div>
        <Link 
          href="/admin/nuevo" 
          className="bg-primary hover:bg-forest text-white px-6 py-3 rounded-2xl font-bold transition-all shadow-md inline-flex items-center gap-2 active:scale-95"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Nuevo Recurso
        </Link>
      </div>

      <div className="bg-white rounded-[2rem] shadow-sm border border-light-green/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="uppercase tracking-widest border-b border-light-green/10 bg-background/50">
              <tr>
                <th scope="col" className="px-8 py-5 text-primary/40 font-bold text-[10px]">Producto</th>
                <th scope="col" className="px-8 py-5 text-primary/40 font-bold text-[10px] border-x border-light-green/5">Precio</th>
                <th scope="col" className="px-8 py-5 text-primary/40 font-bold text-[10px] border-x border-light-green/5">Portada</th>
                <th scope="col" className="px-8 py-5 text-primary/40 font-bold text-[10px]">Archivo PDF</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {!productos || productos.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-10 text-center text-neutral-500">
                    No hay productos cargados todavía. Haz clic en "Nuevo Producto".
                  </td>
                </tr>
              ) : (
                productos.map((prod) => (
                  <tr key={prod.id} className="hover:bg-background transition-colors border-b border-light-green/5 last:border-0">
                    <td className="px-8 py-6">
                      <p className="font-serif text-lg text-primary">{prod.nombre}</p>
                      <p className="text-xs text-primary/40 max-w-[200px] truncate italic">{prod.descripcion || 'Sin descripción'}</p>
                    </td>
                    <td className="px-8 py-6 border-x border-light-green/5 font-serif text-lg text-accent">
                      {formatCurrency(prod.precio)}
                    </td>
                    <td className="px-6 py-4 border-x border-neutral-100">
                      {prod.imagen_url ? (
                        <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-md text-xs font-medium bg-green-100 text-green-800">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          Cargada
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-md text-xs font-medium bg-neutral-100 text-neutral-600">
                          -
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                       {prod.archivo_url ? (
                        <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          Subido
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-md text-xs font-medium bg-red-100 text-red-800">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                          Falta
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
