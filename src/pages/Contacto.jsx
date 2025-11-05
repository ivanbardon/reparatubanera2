import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const socialLinks = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: 'Email',
    href: 'mailto:tu-email@example.com', // Reemplaza con tu email
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: 'Llamar',
    href: 'tel:+34000000000', // Reemplaza con tu teléfono
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    label: 'WhatsApp',
    href: 'https://wa.me/34000000000', // Reemplaza con tu número de WhatsApp
  }
];

export default function Contacto() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen py-12 px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8 text-center">
        
        {/* Profile Image */}
        <img 
          src="jhonny.jpeg" 
          alt="Jonatan Garcia, técnico especialista" 
          className="w-60 h-60 rounded-full mx-auto -mt-24 border-4 border-white shadow-lg"
        />

        {/* Name & Title */}
        <div className="mt-4">
          <h1 className="text-3xl font-bold text-gray-800">Jonatan Garcia</h1>
          <p className="text-gray-500">Técnico Especialista</p>
        </div>

        {/* Bio */}
        <div className="mt-6 text-gray-700 text-sm leading-relaxed">
          <p>
            ¡Hola! Soy Jonatan. Con más de 15 años de experiencia, me dedico a devolverle la vida a tu baño. Mi compromiso es ofrecer un trabajo de máxima calidad, rápido, limpio y con garantía. Tu satisfacción es mi prioridad.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col space-y-4">
          {socialLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-300 border-2 border-zinc-500 text-zinc-500 hover:bg-zinc-500 hover:text-white"
            >
              {link.icon}
              <span className="ml-3">{link.label}</span>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}