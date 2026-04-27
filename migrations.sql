-- 1. Agregar columna 'type' a tabla productos (si no existe)
ALTER TABLE productos 
ADD COLUMN IF NOT EXISTS type TEXT DEFAULT 'digital' CHECK (type IN ('digital', 'membresia', 'curso'));

-- 2. Crear tabla para multimedia de cursos (imágenes y videos)
CREATE TABLE IF NOT EXISTS curso_multimedia (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  producto_id UUID NOT NULL REFERENCES productos(id) ON DELETE CASCADE,
  nombre TEXT NOT NULL,
  url TEXT NOT NULL,
  tipo TEXT NOT NULL CHECK (tipo IN ('imagen', 'video')),
  orden INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Crear índice para búsquedas rápidas
CREATE INDEX IF NOT EXISTS idx_curso_multimedia_producto_id ON curso_multimedia(producto_id);
CREATE INDEX IF NOT EXISTS idx_curso_multimedia_tipo ON curso_multimedia(tipo);

-- 4. Actualizar tabla productos para marcar cursos existentes (si los hay)
-- UPDATE productos SET type = 'curso' WHERE es_membresia = false AND ... (ajusta según tu lógica)
