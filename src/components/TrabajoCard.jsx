import React, { useState } from 'react';

export default function TrabajoCard({ trabajo }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % trabajo.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + trabajo.images.length) % trabajo.images.length);
  };

  return (
    <div className="rounded-lg shadow-md overflow-hidden text-left transition-colors duration-300">
      <div className="relative group">
        <img src={trabajo.images[currentImageIndex]} alt={trabajo.title} className="w-full h-56 object-cover" />
        {trabajo.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 focus:outline-none transition-opacity opacity-0 group-hover:opacity-100"
              aria-label="Imagen anterior"
            >
              &#10094;
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 focus:outline-none transition-opacity opacity-0 group-hover:opacity-100"
              aria-label="Siguiente imagen"
            >
              &#10095;
            </button>
          </>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-text-light dark:text-text-dark">{trabajo.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {trabajo.description}
        </p>
        <div className="text-sm text-gray-500 dark:text-gray-300 space-y-1">
          {Object.entries({
            "Tiempo": trabajo.tiempo,
            "Obra necesaria": trabajo.obraNecesaria,
            "Tiempo de secado": trabajo.tiempoSecado,
            "Garantía": trabajo.garantia
          }).map(([label, value]) => (
            <div key={label} className="flex justify-between">
              <span><strong>{label}:</strong></span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}