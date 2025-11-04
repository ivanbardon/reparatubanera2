import React from 'react';

export default function ContactUsSection() {
  return (
    <section className='text-center'>
      <h2>Contacta con nosotros</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
        <button className="bg-primary hover:bg-gray-800 text-white dark:bg-primary-dark dark:text-gray-900 dark:hover:bg-gray-400 py-2 px-6 rounded-lg transition-colors">Whatsapp</button>
        <button className="bg-primary hover:bg-gray-800 text-white dark:bg-primary-dark dark:text-gray-900 dark:hover:bg-gray-400 py-2 px-6 rounded-lg transition-colors">Email</button>
        <button className="bg-primary hover:bg-gray-800 text-white dark:bg-primary-dark dark:text-gray-900 dark:hover:bg-gray-400 py-2 px-6 rounded-lg transition-colors">Llamada</button>
      </div>
    </section>
  );
}