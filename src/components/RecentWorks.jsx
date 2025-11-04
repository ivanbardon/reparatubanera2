import React from 'react';

export default function RecentWorks() {
  return (
    <section className="text-center mt-8">
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
  );
}