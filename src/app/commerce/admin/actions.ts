'use server'

import { redirect } from 'next/navigation'
import { setAdminSession, clearAdminSession } from '@/lib/admin-auth'

export async function adminLogin(formData: FormData) {
  const username = formData.get('username') as string
  const password = formData.get('password') as string

  if (username === 'superadmin' && password === 'MARIANA2026') {
    await setAdminSession()
    redirect('/commerce/admin')
  }

  redirect('/commerce/admin/login?error=Credenciales incorrectas')
}

export async function adminLogout() {
  await clearAdminSession()
  redirect('/commerce/admin/login')
}
