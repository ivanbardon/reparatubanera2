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
    <div className="container max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl">Nuestra Galería de Trabajos</h1>
        <p className="text-lg mt-4">Explora algunos de los proyectos que hemos realizado, transformando baños con resultados duraderos y de alta calidad.</p>
      </div>
      <div className="grid grid-cols-1 gap-12">
        {trabajosData.map((trabajo) => (
          <div id={`trabajo-${trabajo.id}`} key={trabajo.id} className="border rounded-lg shadow-lg overflow-hidden lg:flex">
            <div className="p-8 lg:w-1/2">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">{trabajo.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{trabajo.fullDescription}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 px-6 pb-6 lg:w-1/2">
              {trabajo.images.map((img, index) => (
                <div key={index} className="overflow-hidden rounded-md">
                  <img 
                    src={img} 
                    alt={`${trabajo.title} - imagen ${index + 1}`} 
                    className="w-full h-40 sm:h-48 lg:h-56 object-cover transform hover:scale-110 transition-transform duration-300 ease-in-out" 
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