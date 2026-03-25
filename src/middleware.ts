import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-url', request.url)
  
  const response = await updateSession(request)
  
  // Si es un redirect, lo devolvemos tal cual
  if (response.status >= 300 && response.status < 400) {
    return response
  }

  // Para que los server components vean el header, hay que usar NextResponse.next con request.headers
  const finalResponse = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  // Es MUY IMPORTANTE copiar las cookies del response de Supabase al nuevo
  response.cookies.getAll().forEach((cookie) => {
    finalResponse.cookies.set(cookie.name, cookie.value, cookie)
  })

  return finalResponse
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
