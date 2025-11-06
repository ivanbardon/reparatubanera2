import React from 'react';
import TrabajoCard from './TrabajoCard';

// Datos de los trabajos
const trabajosData = [
  {
    id: 1,
    title: "Reparación Plato de Ducha",
    images: ["plato1e.jpg", "plato1a.jpg", "plato1b.jpg", "plato1c.jpg"],
    description: "Proceso de reparación de grietas y esmaltado completo para devolverle su aspecto original y durabilidad.",
    tiempo: "3-4h",
    obraNecesaria: "No",
    tiempoSecado: "24h",
    garantia: "2 años"
  },
  {
    id: 2,
    title: "Reparación Bañera",
    images: ["banera2b.jpg", "banera1a.jpg", "banera1b.jpg", "banera2a.jpg"],
    description: "Esmaltado profesional para bañeras con desgaste, recuperando el brillo y la suavidad de la superficie.",
    tiempo: "2-3h",
    obraNecesaria: "No",
    tiempoSecado: "24h",
    garantia: "2 años"
  },
  {
    id: 3,
    title: "Esmaltado Bañera",
    images: ["banera1b.jpg", "baneraazul.jpeg", "banera1.jpeg", "banera1a.jpg"],
    description: "Aplicación de esmalte de alta resistencia para un acabado como nuevo, eliminando manchas y óxido.",
    tiempo: "3h",
    obraNecesaria: "No",
    tiempoSecado: "24h",
    garantia: "2 años"
  },
  {
    id: 4,
    title: "Reparación Sanitario",
    images: ["agu1c.jpg", "agu1a.jpg", "agu1b.jpg"],
    description: "Solución a fisuras en sanitarios con un acabado impecable y duradero, evitando fugas y mejorando la estética.",
    tiempo: "1-2h",
    obraNecesaria: "No",
    tiempoSecado: "12h",
    garantia: "1 año"
  }
];

export default function Trabajos() {
  return (
    <section className="px-4 py-16 text-center">
      <h2 className="text-4xl mb-12">Algunos de Nuestros Trabajos</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {trabajosData.map((trabajo) => (
          <TrabajoCard key={trabajo.id} trabajo={trabajo} />
        ))}
      </div>
    </section>
  );
}
