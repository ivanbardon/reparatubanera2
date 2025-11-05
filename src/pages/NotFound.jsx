import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-center">404 - Página no encontrada</h1>
      <p className="text-lg">La página que buscas no existe.</p>
      <Link to="/" className="mt-4 text-primary">Volver al inicio</Link>
    </div>
  )
}