'use client';

import { Sparkles } from 'lucide-react';

type FooterProps = {
  t: {
    nav: {
      features: string;
      howItWorks: string;
      testimonials: string;
      pricing: string;
    };
    footer: {
      description: string;
      product: string;
      company: string;
      support: string;
      privacy: string;
      terms: string;
      cookies: string;
      copyright: string;
    };
  };
};

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-gradient-to-t from-white to-[#a8c8ff] text-black px-4 sm:px-6 lg:px-8 pt-10 pb-6 text-sm">
      <div className="max-w-7xl mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-7 h-7 bg-gradient-to-r from-[#a8c8ff] to-white rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
                Plumia
              </span>
            </div>
            <p className="text-gray-700 leading-relaxed">{t.footer.description}</p>
          </div>

          {/* Product */}
          <div>
            <h5 className="text-gray-700 font-medium mb-2">{t.footer.product}</h5>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#features" className="text-gray-700 hover:text-blue-600 transition">{t.nav.features}</a></li>
              <li><a href="#demo" className="text-gray-700 hover:text-blue-600 transition">{t.nav.howItWorks}</a></li>
              <li><a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition">{t.nav.testimonials}</a></li>
              <li><a href="#pricing" className="text-gray-700 hover:text-blue-600 transition">{t.nav.pricing}</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-gray-700 font-medium mb-2">{t.footer.company}</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-blue-600 transition">About</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="text-gray-700 font-medium mb-2">{t.footer.support}</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-blue-600 transition">Help Center</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600 transition">Documentation</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600 transition">API</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600 transition">Status</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-blue-200 pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-center md:text-left mb-0">
            {t.footer.copyright}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-500">
            <a href="#" className="text-gray-500 hover:text-blue-600 transition">{t.footer.privacy}</a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition">{t.footer.terms}</a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition">{t.footer.cookies}</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
