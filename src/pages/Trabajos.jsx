import React from 'react'

export default function Trabajos() {
  return (
    <section className="p-4 text-center">
      <h2>Trabajos Realizados</h2>
      <div className="grid grid-cols-1 gap-4 mt-4">
        <div>
          <img src="plato1e.jpg" alt="Trabajo 1" className="w-full h-auto" />
        </div>
        <div>
          <img src="banera2b.jpg" alt="Trabajo 2" className="w-full h-auto" />
        </div>
        <div>
          <img src="banera1b.jpg" alt="Trabajo 3" className="w-full h-auto" />
        </div>
        <div>
          <img src="agu1c.jpg" alt="Trabajo 4" className="w-full h-auto" />
        </div>
      </div>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Ver Más Trabajos</button>
    </section>
  )
}