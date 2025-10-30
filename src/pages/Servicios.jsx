import React from 'react'

export default function Servicios() {
  return (
    <section className='flex flex-col items-center justify-center mt-10'>
      <h2>Servicios</h2>
      <div className="">
        <div className="p-4 border rounded">
          <h3 className="font-semibold">Reparación y esmaltado de Bañeras</h3>
          <p>Solucionamos grietas, arañazos y otros daños en tu bañera.</p>
        </div>
        <div className="p-4 border rounded">
          <h3 className="font-semibold">Reparación y esmaltado de Platos de Ducha</h3>
          <p>Reparamos daños en platos de ducha para que luzcan como nuevos.</p>
        </div>
        <div className="p-4 border rounded">
          <h3 className="font-semibold">Reparación y esmaltado de Sanitarios</h3>
          <p>Mejora la apariencia de tu sanitario con nuestro esmaltado profesional.</p>
        </div>
      </div>
    </section>
  )
}
