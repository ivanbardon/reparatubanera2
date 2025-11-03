import React from 'react'

export default function Inicio() {
  return (
    <>
      <header>
        <div className="text-center mt-8 pb-8">
          <h1 className='text-4xl'>ReparaTuBañera con SPA</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Especialistas en la reparación y esmaltado de bañeras y platos de ducha.</p>
        </div>
      </header>
      <section className="px-0 md:px-4">
        <img src="banera1.jpeg" alt="Bañera renovada y brillante" className="w-full rounded-lg shadow-lg" />
      </section>
      <section>
        <h2 className="text-center">Nos eligen por nuestra</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 border border-border-light dark:border-border-dark rounded-lg text-center">
            <h3 className="text-primary dark:text-primary-dark">Rapidez</h3>
            <p>Reparamos tu bañera en menos de 24 horas.</p>
          </div>
          <div className="p-6 border border-border-light dark:border-border-dark rounded-lg text-center">
            <h3 className="text-primary dark:text-primary-dark">Calidad-Precio</h3>
            <p>Precios competitivos sin comprometer la calidad.</p>
          </div>
          <div className="p-6 border border-border-light dark:border-border-dark rounded-lg text-center">
            <h3 className="text-primary dark:text-primary-dark">Garantía</h3>
            <p>Ofrecemos garantía en todas nuestras reparaciones.</p>
          </div>
        </div>
      </section>
      <section className='text-center'>
        <h2>Nuestros Servicios</h2>
        <div className="mt-8 space-y-4 max-w-2xl mx-auto">
          <div className="p-4 border border-border-light dark:border-border-dark rounded-lg">
            <h3 className="text-primary dark:text-primary-dark">Reparación y esmaltado de Bañeras</h3>
            <p>Solucionamos grietas, arañazos y otros daños en tu bañera.</p>
          </div>
          <div className="p-4 border border-border-light dark:border-border-dark rounded-lg">
            <h3 className="text-primary dark:text-primary-dark">Reparación y esmaltado de Platos de Ducha</h3>
            <p>Reparamos daños en platos de ducha para que luzcan como nuevos.</p>
          </div>
          <div className="p-4 border border-border-light dark:border-border-dark rounded-lg">
            <h3 className="text-primary dark:text-primary-dark">Reparación y esmaltado de Sanitarios</h3>
            <p>Mejora la apariencia de tu sanitario con nuestro esmaltado profesional.</p>
          </div>
        </div>
      </section>
      <section className='text-center'>
        <h2>Contacta con nosotros</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
          <button className="bg-primary hover:bg-gray-800 text-white dark:bg-primary-dark dark:text-gray-900 dark:hover:bg-gray-400 py-2 px-6 rounded-lg transition-colors">Whatsapp</button>
          <button className="bg-primary hover:bg-gray-800 text-white dark:bg-primary-dark dark:text-gray-900 dark:hover:bg-gray-400 py-2 px-6 rounded-lg transition-colors">Email</button>
          <button className="bg-primary hover:bg-gray-800 text-white dark:bg-primary-dark dark:text-gray-900 dark:hover:bg-gray-400 py-2 px-6 rounded-lg transition-colors">Llamada</button>
        </div>
      </section>
      <section className="text-center">
        <h2>Trabajos Realizados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <a href="/reparatubanera2/trabajos.html" className="block group"><img src="plato1e.jpg" alt="Trabajo 1" className="w-full h-48 object-cover rounded-lg shadow-md group-hover:opacity-80 transition-opacity" /></a>
          <a href="/reparatubanera2/trabajos.html" className="block group"><img src="banera2b.jpg" alt="Trabajo 2" className="w-full h-48 object-cover rounded-lg shadow-md group-hover:opacity-80 transition-opacity" /></a>
          <a href="/reparatubanera2/trabajos.html" className="block group"><img src="banera1b.jpg" alt="Trabajo 3" className="w-full h-48 object-cover rounded-lg shadow-md group-hover:opacity-80 transition-opacity" /></a>
          <a href="/reparatubanera2/trabajos.html" className="block group"><img src="agu1c.jpg" alt="Trabajo 4" className="w-full h-48 object-cover rounded-lg shadow-md group-hover:opacity-80 transition-opacity" /></a>
        </div>
        <a href="/reparatubanera2/trabajos.html" className="inline-block mt-8 bg-primary hover:bg-gray-800 text-white dark:bg-primary-dark dark:text-gray-900 dark:hover:bg-gray-400 py-2 px-6 rounded-lg transition-colors">
          Ver Más Trabajos
        </a>
      </section>
      <footer className="text-center py-12 mt-8 border-t border-border-light dark:border-border-dark">
        <p className="font-semibold">Áreas de actuación:</p>
        <p className="text-gray-600 dark:text-gray-400">Cataluña: Barcelona, Tarragona, Lleida i Girona</p>
        <p className="text-gray-600 dark:text-gray-400">Comunidad Valenciana: Valencia, Castellón y Alicante</p>
        <p className="text-gray-600 dark:text-gray-400">Comunidad de Madrid: Madrid y alrededores</p>
        <p className='pt-8 text-sm text-gray-500'>&copy; 2025 ReparaTuBañera. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}
