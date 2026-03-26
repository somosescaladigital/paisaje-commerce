'use server'

import React from 'react'
import { sendEmail } from '@/lib/mail'
import { WelcomeTemplate } from '@/components/emails/WelcomeTemplate'
import { PurchaseTemplate } from '@/components/emails/PurchaseTemplate'
import { AdminSaleTemplate } from '@/components/emails/AdminSaleTemplate'

export async function sendWelcomeAction(email: string, nombre: string) {
  return await sendEmail({
    to: email,
    subject: '¡Bienvenido/a a la Escuela de Paisajismo! 🌿',
    react: React.createElement(WelcomeTemplate, { nombre })
  })
}

export async function sendPurchaseNotificationAction(
  clienteEmail: string, 
  clienteNombre: string, 
  items: any[], 
  total: number
) {
  // 1. Enviar al alumno
  await sendEmail({
    to: clienteEmail,
    subject: 'Confirmación de tu compra - Escala Digital 🛒',
    react: React.createElement(PurchaseTemplate, { nombre: clienteNombre, items, total })
  })

  // 2. Enviar a Mariana (Admin)
  // Nota: En producción, MARIANA_EMAIL debería estar en .env
  const adminEmail = process.env.MARIANA_EMAIL || 'escuelaisajismo@gmail.com' 
  
  await sendEmail({
    to: adminEmail,
    subject: '¡Nueva venta realizada! 🌿💰',
    react: React.createElement(AdminSaleTemplate, { 
      clienteNombre, 
      clienteEmail, 
      items, 
      total 
    })
  })
}
