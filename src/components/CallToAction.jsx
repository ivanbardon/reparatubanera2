import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const CallToAction = () => {
  const email = 'info@reparatubanera.com';
  const phoneNumber = '+34666777888';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '')}`;

  const buttonStyle = "flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200";

  return (
    <div className="flex justify-center my-6">
      <div className="flex flex-row gap-2">
        <a href={`mailto:${email}`} className={buttonStyle} aria-label='Enviar correo'>
          <Mail size={18} />
          <span className="hidden sm:inline">Email</span>
        </a>
        <a href={`tel:${phoneNumber}`} className={buttonStyle} aria-label='Llamar por teléfono'>
          <Phone size={18} />
          <span className="hidden sm:inline">Llamar</span>
        </a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={buttonStyle} aria-label='Contactar por WhatsApp'>
          <MessageSquare size={18} />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default CallToAction;

