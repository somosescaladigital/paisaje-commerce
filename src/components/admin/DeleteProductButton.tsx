'use client'

import React, { useTransition } from 'react'
import { deleteProduct } from '@/app/commerce/admin/nuevo/actions'

interface DeleteProductButtonProps {
  productId: string
  productName: string
}

export default function DeleteProductButton({ productId, productName }: DeleteProductButtonProps) {
  const [isPending, startTransition] = useTransition()

  const handleDelete = () => {
    if (confirm(`¿Estás seguro de que deseas eliminar "${productName}"? Esta acción no se puede deshacer.`)) {
      startTransition(async () => {
        const result = await deleteProduct(productId)
        if (result?.error) {
          alert(result.error)
        }
      })
    }
  }

  return (
    <button 
      onClick={handleDelete}
      disabled={isPending}
      className={`p-2 transition-colors ${isPending ? 'text-primary/10' : 'text-primary/30 hover:text-red-500'}`}
      title="Eliminar producto"
    >
      {isPending ? (
        <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
      )}
    </button>
  )
}
