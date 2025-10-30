import React from 'react'

export default function Inicio() {
  return (
    <>
      <header>
        <div className="flex flex-col items-center justify-center mt-10 ">
          <h1 className="text-3xl font-bold">ReparaTuBañera</h1>
          <p className="text-sm text-gray-600">En ReparaTuBañera.com somos especialistas en la reparación y esmaltado de bañeras y platos de ducha</p>
        </div>
      </header>
      <section>
        <img src="/banera1.jpeg" alt="Bañera portada" />
      </section>
      <section>
        <h2>Nos elijen porque somos</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="p-4 border rounded">
            <h3 className="font-semibold">Rápidos</h3>
            <p>Reparamos tu bañera en menos de 24 horas.</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="font-semibold">Económicos</h3>
            <p>Precios competitivos sin comprometer la calidad.</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="font-semibold">Garantizados</h3>
            <p>Ofrecemos garantía en todas nuestras reparaciones.</p>
          </div>
        </div>
      </section>
    </>
  )
}
