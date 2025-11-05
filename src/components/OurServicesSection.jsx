import React from 'react';
import { Wrench, PaintBucket, Palette, ScanSearch, User, Building2 } from 'lucide-react';

const services = [
  {
    icon: <Wrench className="h-10 w-10 text-blue-500" />,
    title: 'Reparación General',
    description: 'Solucionamos grietas, agujeros, y óxido en bañeras y platos de ducha.',
  },
  {
    icon: <PaintBucket className="h-10 w-10 text-blue-500" />,
    title: 'Esmaltado Completo',
    description: 'Renovamos completamente la superficie, devolviendo el brillo y la durabilidad original.',
  },
  {
    icon: <Palette className="h-10 w-10 text-blue-500" />,
    title: 'Cambio de Color',
    description: 'Moderniza tu baño cambiando el color de tus sanitarios con un acabado profesional.',
  },
  {
    icon: <ScanSearch className="h-10 w-10 text-blue-500" />,
    title: 'Reparación Parcial',
    description: 'Arreglamos desperfectos localizados de forma rápida y eficiente, sin obras mayores.',
  },
];

const clients = [
  {
    icon: <User className="h-10 w-10 text-gray-700" />,
    name: 'Particulares',
  },
  {
    icon: <Building2 className="h-10 w-10 text-gray-700" />,
    name: 'Hoteles',
  }
];

export default function OurServicesSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Nuestros Servicios</h2>
        <p className="mt-4 text-lg text-gray-600">
          Ofrecemos soluciones expertas para la renovación de bañeras y sanitarios.
        </p>
      </div>

      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div key={service.title} className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            {service.icon}
            <h3 className="mt-4 text-xl font-semibold text-gray-800">{service.title}</h3>
            <p className="mt-2 text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="container mx-auto mt-16 text-center">
        <h3 className="text-2xl font-bold text-gray-900">Trabajamos con Particulares y Hoteles</h3>
        <div className="mt-8 flex justify-center items-center space-x-12">
          {clients.map((client) => (
            <div key={client.name} className="flex flex-col items-center">
              {client.icon}
              <span className="mt-2 text-lg font-medium text-gray-700">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
