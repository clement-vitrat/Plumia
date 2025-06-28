'use client';

import { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Zap, Users, Star, Shield, ArrowRight, Languages, CheckCircle, Download } from 'lucide-react';

// Define types for language and navigation props
// These types help ensure that the component receives the correct props and can be easily extended in the
type Language = { code: string; name: string; flag: string };
type NavProps = {
  currentLang: string;
  setCurrentLang: (lang: string) => void;
  t: { nav: Record<string, string> };
};


/**
 * NavBar component renders a responsive navigation bar with language selection and menu items.
 * It adapts to scroll position and provides a mobile-friendly menu.
 *
 * @param {NavProps} props - The properties for the NavBar component.
 * @returns {JSX.Element} The rendered NavBar component.
 */
export default function NavBar({ currentLang, setCurrentLang, t }: NavProps) {
  // State hooks to manage menu visibility and scroll position
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  // List of available languages with their codes, names, and flags
  const languages: Language[] = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  // ... rest of the code remains the same ...
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle menu click and close the menu
  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };


  return (
    // Navigation bar with dynamic styles based on scroll position
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrollY > 50
        ? 'bg-gradient-to-r from-[#a8c8ff] to-white'
        : 'bg-transparent'
    }`}>

      {/* Mobile menu toggle button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center py-4">
          {/* Logo and title */}
          <a href="#">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#a8c8ff] to-white rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">Plumia</span>
            </div>
          </a>
          
          {/* Desktop navigation links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-black hover:font-bold transition-colors">{t.nav.features}</a>
            <a href="#demo"className="text-black hover:font-bold transition-colors">{t.nav.howItWorks}</a>
            <a href="#testimonials"className="text-black hover:font-bold transition-colors">{t.nav.testimonials}</a>
            <a href="#pricing" className="text-black hover:font-bold transition-colors">{t.nav.pricing}</a>

            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 text-black hover:text-blue-600 transition-colors"
              >
                <Languages className="w-4 h-4" />
                <span className="text-sm">{languages.find(l => l.code === currentLang)?.flag}</span>
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLang(lang.code);
                      setIsLangMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-blue-100 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                      currentLang === lang.code ? 'bg-blue-100 text-blue-700' : 'text-black'
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
                </div>
              )}
            </div>

            {/* Call to Action Button */}
            <button className="bg-gradient-to-r from-[#a8c8ff] to-white text-black px-6 py-2 rounded-full hover:from-blue-400 hover:to-blue-200 hover:text-white transition-all transform hover:scale-105">
              <a href="#contact" className='text-black hover:text-white'>
                {t.nav.getStarted}
              </a>
            </button>
          </div>

          {/* Mobile menu toggle button */}
          <button
            className="md:hidden text-black z-60 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>


      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div
          className={`absolute inset-0 bg-black/10 backdrop-blur-sm transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        <div className={`absolute inset-0 overflow-hidden bg-gradient-to-br from-[#a8c8ff] to-white backdrop-blur-xl transition-all duration-700 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
    
          {/* Mobile menu content */}
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 bg-gradient-to-r from-[#a8c8ff] to-white rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">Plumia</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-black hover:text-blue-600 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>
          
          {/* Menu items */}
          <div className="flex flex-col justify-center flex-1 px-6 py-4 space-y-2 overflow-hidden">
            {[
              { href: '#features', label: t.nav.features, icon: Zap },
              { href: '#demo', label: t.nav.howItWorks, icon: Users },
              { href: '#testimonials', label: t.nav.testimonials, icon: Star },
              { href: '#pricing', label: t.nav.pricing, icon: Shield }
            ].map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleMenuClick}
                className={`group flex items-center space-x-4 p-3 rounded-lg text-black hover:bg-[#a8c8ff]/60 transition-all duration-200 transform hover:scale-105`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-[#a8c8ff] to-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5 text-black" />
                </div>
                <div className="flex-1">
                  <span className="text-lg font-semibold">{item.label}</span>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-black group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>

          {/* Language selection */}
          <div className="px-6 py-4">
            <h3 className="text-black font-semibold mb-3 flex items-center space-x-2 text-base">
              <Languages className="w-5 h-5" />
              <span>Langue / Language / Idioma</span>
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setCurrentLang(lang.code);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center space-x-4 p-2.5 rounded-lg transition-all text-base shadow-sm ${
                    currentLang === lang.code
                      ? 'bg-gradient-to-r from-[#a8c8ff] to-white text-black shadow-md'
                      : 'bg-gray-100 text-black hover:bg-gray-200 hover:shadow-md'
                  }`}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <span className="font-medium">{lang.name}</span>
                  {currentLang === lang.code && (
                    <CheckCircle className="w-5 h-5 ml-auto" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="p-6">
            <button
              onClick={handleMenuClick}
              className="w-full bg-gradient-to-r from-[#a8c8ff] to-white text-black px-5 py-3 rounded-lg text-lg font-semibold hover:from-[#7faaff] hover:to-[#e6f0ff] transition-all transform hover:scale-105 flex items-center justify-center space-x-3 shadow-md"
            >
              <Download className="w-5 h-5" />
              <span>{t.nav.getStarted}</span>
            </button>

            {/* Copyright */}
            <p className="mt-3 text-center text-sm text-gray-500 select-none">
              © 2025 Plumia. Tous droits réservés.
            </p>
          </div>

        </div>

      </div>

    </nav>
  );
}
