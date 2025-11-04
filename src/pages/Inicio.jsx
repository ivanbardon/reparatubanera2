import React from 'react';
import HeroSection from '../components/HeroSection';
import WhyChooseUs from '../components/WhyChooseUs';
import RecentWorks from '../components/RecentWorks';
import ContactUsSection from '../components/ContactUsSection';
import OurServicesSection from '../components/OurServicesSection';

export default function Inicio() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <RecentWorks />
      <ContactUsSection />
      <OurServicesSection />
    </>
  );
}