'use client'

import React, { useTransition } from 'react'
import { deleteResourceFile } from '@/app/commerce/admin/nuevo/actions'

interface DeleteResourceButtonProps {
  fileId: string
  fileName: string
}

export default function DeleteResourceButton({ fileId, fileName }: DeleteResourceButtonProps) {
  const [isPending, startTransition] = useTransition()

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (confirm(`¿Estás seguro de que deseas eliminar el archivo "${fileName}"?`)) {
      startTransition(async () => {
        const result = await deleteResourceFile(fileId)
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
      className={`p-2 transition-colors rounded-lg ${isPending ? 'bg-neutral-50 text-neutral-300' : 'bg-red-50 text-red-500 hover:bg-red-100'}`}
      title="Eliminar archivo"
    >
      {isPending ? (
        <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      )}
    </button>
  )
}
