import React from 'react';
import HeroSection from '../components/HeroSection';
import WhyChooseUs from '../components/WhyChooseUs';
import OurServicesSection from '../components/OurServicesSection';
import Trabajos from '../components/Trabajos';


export default function Inicio() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <Trabajos />
      <OurServicesSection />
    </>
  );
}