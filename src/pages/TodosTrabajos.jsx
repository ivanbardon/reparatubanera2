import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { trabajosData } from '../trabajos';

export default function TodosTrabajos() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (id) {
      const el = document.getElementById(`trabajo-${id}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        el.classList.add('ring-4', 'ring-accent');
        setTimeout(() => el.classList.remove('ring-4', 'ring-accent'), 3000);
      }
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl">Nuestra Galería de Trabajos</h1>
        <p className="text-lg mt-4">Explora algunos de los proyectos que hemos realizado, transformando baños con resultados duraderos y de alta calidad.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {trabajosData.map((trabajo) => (
          <div id={`trabajo-${trabajo.id}`} key={trabajo.id} className="border rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">{trabajo.title}</h3>
              <p className="leading-relaxed">{trabajo.fullDescription}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 px-6 pb-6">
              {trabajo.images.map((img, index) => (
                <div key={index} className="overflow-hidden rounded-md">
                  <img 
                    src={img} 
                    alt={`${trabajo.title} - imagen ${index + 1}`} 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300 ease-in-out" 
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}