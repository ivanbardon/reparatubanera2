import React from 'react';

export default function OurServicesSection() {
  return (
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
  );
}