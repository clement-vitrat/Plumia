'use client';

import { useState } from 'react';

// Import components
import NavBar from '@/components/Navbar';  
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Demo from '@/components/Demo'; 
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer'; 


// Import translations data
import translations from '../data/translations';


// Main Home component
export default function Home() {
  // State to manage the current language
  // Default language is set to French ('fr')
  const [currentLang, setCurrentLang] = useState('fr');

  // Get the translations for the current language
  const t = translations[currentLang as keyof typeof translations] || translations.fr;

  // Render the main layout of the landing page
  return (
    <div className="min-h-screen bg-white bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-sky-100 via-transparent to-transparent">
      {/* Navigation Bar */}
      {/* Pass current language and translation function to NavBar */}
      <NavBar currentLang={currentLang} setCurrentLang={setCurrentLang} t={t} />
      {/* Hero Section */}
      {/* Pass translation object to Hero component */}
      <Hero t={t} />
      {/* Features Section */}
      {/* Pass translation object to Features component */}
      <Features t={t} />
      {/* Demo Section */}
      {/* Pass translation object to Demo component */}
      <Demo t={t} />
      {/* Pricing Section */}
      {/* Pass translation object to Pricing component */}
      <Pricing t={t} />
      {/* Contact Section */}
      {/* Pass translation object to Contact component */}
      <Contact t={t} />
      {/* Footer Section */}
      {/* Footer is not included in this example, but can be added here */}
      {/*<Footer />*/}
    </div>
  );
}
