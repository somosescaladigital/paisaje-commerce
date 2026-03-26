'use client'

import React, { useState, useRef } from 'react'

interface FileUploadProps {
  name: string
  label: string
  accept?: string
  multiple?: boolean
  required?: boolean
  onFilesSelected?: (files: File[]) => void
  accentColor?: string
}

export default function FileUpload({ 
  name, 
  label, 
  accept, 
  multiple = false, 
  required = false,
  onFilesSelected,
  accentColor = 'primary'
}: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Sync state with hidden input for FormData
  React.useEffect(() => {
    if (fileInputRef.current) {
      const dataTransfer = new DataTransfer()
      selectedFiles.forEach(file => dataTransfer.items.add(file))
      fileInputRef.current.files = dataTransfer.files
    }
  }, [selectedFiles])

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      const newFiles = multiple ? [...selectedFiles, ...files] : [files[0]]
      setSelectedFiles(newFiles)
      
      // Sincronización síncrona inmediata para asegurar que el input tenga los archivos antes del submit
      if (fileInputRef.current) {
        const dt = new DataTransfer()
        newFiles.forEach(f => dt.items.add(f))
        fileInputRef.current.files = dt.files
      }
      
      onFilesSelected?.(newFiles)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : []
    if (files.length > 0) {
      const newFiles = multiple ? [...selectedFiles, ...files] : [files[0]]
      setSelectedFiles(newFiles)
      onFilesSelected?.(newFiles)
    }
  }

  const removeFile = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index)
    setSelectedFiles(newFiles)
    onFilesSelected?.(newFiles)
  }

  const accentClass = accentColor === 'accent' ? 'text-accent' : 'text-primary'
  const accentBgClass = accentColor === 'accent' ? 'bg-accent/5' : 'bg-primary/5'
  const accentBorderClass = accentColor === 'accent' ? 'border-accent/20' : 'border-primary/20'

  return (
    <div className="space-y-2">
      <label className="text-xs font-bold text-primary/40 uppercase tracking-widest ml-1">{label}</label>
      
      <div 
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`
          relative border-2 border-dashed rounded-[2rem] p-8 text-center transition-all cursor-pointer group
          ${isDragging ? `${accentBorderClass} ${accentBgClass} scale-[0.99]` : 'border-neutral-100 hover:border-neutral-200 bg-neutral-50'}
        `}
      >
        <input 
          type="file" 
          ref={fileInputRef}
          name={name}
          multiple={multiple}
          accept={accept}
          required={required && selectedFiles.length === 0}
          onChange={handleFileChange}
          className="hidden"
        />

        <div className={`w-16 h-16 ${accentBgClass} ${accentClass} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
        </div>

        <div className="space-y-1">
          <p className="font-bold text-primary italic">Arrastra archivos aquí o haz clic para subir</p>
          <p className="text-xs text-primary/40 font-sans tracking-tight">
            {multiple ? 'Puedes subir múltiples archivos.' : 'Selecciona un solo archivo.'}
          </p>
        </div>
      </div>

      {selectedFiles.length > 0 && (
        <div className="mt-4 grid grid-cols-1 gap-2">
          {selectedFiles.map((file, index) => (
            <div key={index} className="flex items-center justify-between bg-white border border-neutral-100 p-3 rounded-2xl animate-in slide-in-from-top-2 duration-300">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${accentBgClass} ${accentClass} rounded-xl flex items-center justify-center`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                </div>
                <div className="max-w-[200px]">
                  <p className="text-sm font-bold text-primary truncate italic">{file.name}</p>
                  <p className="text-[10px] text-primary/40 font-mono uppercase tracking-widest">{(file.size / 1024).toFixed(1)} KB</p>
                </div>
              </div>
              <button 
                type="button" 
                onClick={(e) => { e.stopPropagation(); removeFile(index); }}
                className="p-2 text-primary/20 hover:text-red-500 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
