'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

export default function DynamicLayoutWrapper({ 
  navbar, 
  children 
}: { 
  navbar: React.ReactNode, 
  children: React.ReactNode 
}) {
  const pathname = usePathname()
  
  // Condición para ocultar Navbar y padding (Landing, Home y Admin)
  const isLanding = pathname.startsWith('/landing')
  const isRoot = pathname === '/'
  const isAdmin = pathname.startsWith('/commerce/admin')
  const hideLayoutElements = isLanding || isRoot || isAdmin

  return (
    <>
      {!hideLayoutElements && navbar}
      <main className={`flex-1 relative flex flex-col ${hideLayoutElements ? "" : "pt-24 md:pt-28"}`}>
        {children}
      </main>
    </>
  )
}
