import React from 'react';

export default function TrabajoDetail({ trabajo, onBackClick }) {
  if (!trabajo) {
    return null; // No renderizar nada si no hay trabajo seleccionado
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <button 
        onClick={onBackClick}
        className="mb-8 bg-primary text-primary-foreground font-bold py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors duration-300"
      >
        &larr; Volver a Trabajos
      </button>

      <h1 className="text-4xl font-bold mb-6">{trabajo.title}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={trabajo.images[0]} alt={trabajo.title} className="w-full rounded-lg shadow-lg mb-4" />
          <div className="grid grid-cols-3 gap-2">
            {trabajo.images.slice(1).map((img, index) => (
              <img key={index} src={img} alt={`${trabajo.title} ${index + 1}`} className="w-full rounded-md shadow-md" />
            ))}
          </div>
        </div>
        
        <div className=" p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 mb-6">{trabajo.description}</p>
          <div className="space-y-3 text-gray-600">
            <div className="flex justify-between border-b pb-2">
              <span className="font-bold">Tiempo estimado:</span>
              <span>{trabajo.tiempo}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-bold">Obra necesaria:</span>
              <span>{trabajo.obraNecesaria}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-bold">Tiempo de secado:</span>
              <span>{trabajo.tiempoSecado}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Garantía:</span>
              <span>{trabajo.garantia}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}