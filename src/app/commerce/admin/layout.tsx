import { isAdminAuthenticated } from '@/lib/admin-auth'
import { redirect } from 'next/navigation'
import AdminNavbar from '@/components/admin/AdminNavbar'
import { headers } from 'next/headers'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const authenticated = await isAdminAuthenticated()
  const headersList = await headers()
  const url = headersList.get('x-url') || ''
  const isLoginPage = url.includes('/admin/login')

  if (!authenticated && !isLoginPage) {
    redirect('/commerce/admin/login')
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      {authenticated && <AdminNavbar />}
      <main className={`flex-1 flex flex-col ${authenticated ? 'pt-28 pb-20' : ''}`}>
        {children}
      </main>
    </div>
  )
}
