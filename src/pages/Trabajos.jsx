import React, { useState } from 'react'

export default function Trabajos() {
  // Datos de los trabajos para hacer el componente más dinámico
  const trabajosData = [
    {
      id: 1,
      title: "Reparación Plato de Ducha",
      images: ["plato1e.jpg", "plato-ducha-2.jpg", "plato-ducha-3.jpg", "plato-ducha-4.jpg"],
      description: "Proceso de reparación de grietas y esmaltado completo para devolverle su aspecto original y durabilidad.",
      tiempo: "3-4h",
      obraNecesaria: "No",
      tiempoSecado: "24h",
      garantia: "2 años"
    },
    {
      id: 2,
      title: "Reparación Bañera",
      images: ["banera2b.jpg", "banera-2.jpg", "banera-3.jpg", "banera-4.jpg"],
      description: "Esmaltado profesional para bañeras con desgaste, recuperando el brillo y la suavidad de la superficie.",
      tiempo: "2-3h",
      obraNecesaria: "No",
      tiempoSecado: "24h",
      garantia: "2 años"
    },
    {
      id: 3,
      title: "Esmaltado Bañera",
      images: ["banera1b.jpg", "esmaltado-2.jpg", "esmaltado-3.jpg", "esmaltado-4.jpg"],
      description: "Aplicación de esmalte de alta resistencia para un acabado como nuevo, eliminando manchas y óxido.",
      tiempo: "3h",
      obraNecesaria: "No",
      tiempoSecado: "24h",
      garantia: "2 años"
    },
    {
      id: 4,
      title: "Reparación Sanitario",
      images: ["agu1c.jpg", "sanitario-2.jpg", "sanitario-3.jpg", "sanitario-4.jpg"],
      description: "Solución a fisuras en sanitarios con un acabado impecable y duradero, evitando fugas y mejorando la estética.",
      tiempo: "1-2h",
      obraNecesaria: "No",
      tiempoSecado: "12h",
      garantia: "1 año"
    }
  ];

  // Estado para manejar el índice de la imagen actual de cada carrusel
  const [currentImages, setCurrentImages] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  });

  const nextImage = (id) => {
    const trabajo = trabajosData.find(t => t.id === id);
    setCurrentImages(prev => ({
      ...prev,
      [id]: (prev[id] + 1) % trabajo.images.length
    }));
  };

  const prevImage = (id) => {
    const trabajo = trabajosData.find(t => t.id === id);
    setCurrentImages(prev => ({
      ...prev,
      [id]: (prev[id] - 1 + trabajo.images.length) % trabajo.images.length
    }));
  };

  return (
    <section className="p-4 text-center mt-16">
      <h2 className="text-2xl font-bold mb-6">Trabajos Realizados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {trabajosData.map((trabajo) => (
          <div key={trabajo.id} className="bg-white rounded-lg shadow-md overflow-hidden text-left">
            <div className="relative">
              <img src={trabajo.images[currentImages[trabajo.id]]} alt={trabajo.title} className="w-full h-48 object-cover" />
              <button onClick={() => prevImage(trabajo.id)} className="absolute left-2 top-1/2 -translate-y-1/2 text-white p-1 rounded-full">
                &#10094;
              </button>
              <button onClick={() => nextImage(trabajo.id)} className="absolute right-2 top-1/2 -translate-y-1/2 text-white p-1 rounded-full">
                &#10095;
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{trabajo.title}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {trabajo.description}
              </p>
              <div className="text-sm text-gray-500 space-y-1">
                <div className="flex justify-between">
                  <span><strong>Tiempo:</strong></span>
                  <span>{trabajo.tiempo}</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Obra necesaria:</strong></span>
                  <span>{trabajo.obraNecesaria}</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Tiempo de secado:</strong></span>
                  <span>{trabajo.tiempoSecado}</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Garantía:</strong></span>
                  <span>{trabajo.garantia}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}