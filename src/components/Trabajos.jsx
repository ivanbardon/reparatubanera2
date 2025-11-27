import React from 'react';
import { trabajosData } from '../trabajos';

function TrabajoCard({ trabajo }) {
  return (
    <a
      href={`trabajos.html?id=${trabajo.id}`}
      aria-label={`Ver ${trabajo.title}`}
      className="block rounded-lg shadow-md overflow-hidden text-left border hover:shadow-lg transition-shadow duration-150 cursor-pointer"
    >
      <div className="relative">
        <img src={trabajo.images?.[0]} alt={trabajo.title} className="w-full h-56 object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-semibold mb-2">{trabajo.title}</h3>
        <p className="text-muted-foreground text-md mb-4">
          {trabajo.shortDescription || trabajo.description}
        </p>
        <div className="text-sm text-muted-foreground space-y-1">
          {Object.entries({
            Tiempo: trabajo.tiempo,
            'Obra necesaria': trabajo.obraNecesaria,
            'Tiempo de secado': trabajo.tiempoSecado,
            Garantía: trabajo.garantia
          }).map(([label, value]) => (
            <div key={label} className="flex justify-between">
              <span className="font-bold">{label}:</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Trabajos() {
  return (
    <section className="px-4 py-16 text-center bg-background text-foreground">
      <h2 className="text-4xl mb-12">Algunos de Nuestros Trabajos</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {trabajosData.map((trabajo) => (
          <TrabajoCard key={trabajo.id} trabajo={trabajo} />
        ))}
      </div>
    </section>
  );
}
