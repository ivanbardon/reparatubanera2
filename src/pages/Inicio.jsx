import React from 'react'

export default function Inicio() {
  return (
    <>
      <header>
        <div className="flex flex-col items-center justify-center mt-10 ">
          <h1 className="text-3xl font-bold">ReparatuPutaBañera</h1>
          <p className="text-sm text-gray-600">En ReparatuBañera.com somos especialistas en la reparación y esmaltado de bañeras y platos de ducha</p>
        </div>
      </header>
      <section>
        <img src="banera1.jpeg" alt="Bañera portada" />
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
      <section className='flex flex-col items-center justify-center mt-10 mb-10'>
        <h2>Contacto</h2>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Whatsapp</button>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Email</button>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Llamada</button>
      </section>
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
      <footer className="p-4 text-center">
        <p>Areas de actuación</p>
        <p><strong>Cataluña</strong>: Barcelona, Tarragona, Lleida i Girona</p>
        <p><strong>Valencia</strong>: Valencia, Castellón y Alicante</p>
        <p><strong>Madrid</strong>: Madrid y alrededores</p>
        <p>&copy; 2023 ReparaTuBañera. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}
