'use client';

import { BookOpen } from 'lucide-react';

export default function Footer({ onDownloadDoc }: { onDownloadDoc?: () => void }) {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & présentation */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-xl flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Plumia</h3>
                <p className="text-gray-400 text-sm font-medium">Intelligence Artificielle Française</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
              Plumia révolutionne l’apprentissage du français avec une correction intelligente, 
              développée en collaboration avec l'Éducation Nationale pour soutenir élèves et enseignants.
            </p>
            <div className="text-sm text-gray-500">
              © 2024 Plumia SAS. Tous droits réservés.
            </div>
          </div>

          {/* Liens Produit */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Produit</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#fonctionnalites" className="hover:text-white transition-colors">Fonctionnalités</a></li>
              <li><a href="#tarifs" className="hover:text-white transition-colors">Tarifs</a></li>
              <li>
                <button onClick={onDownloadDoc} className="hover:text-white transition-colors cursor-pointer">
                  Documentation
                </button>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Intégrations</a></li>
            </ul>
          </div>

          {/* Liens Support */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Support</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="mailto:support@plumia.fr" className="hover:text-white transition-colors">Support technique</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Formation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Communauté</a></li>
            </ul>
          </div>
        </div>

        {/* Bas de page */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm text-center md:text-left">
            Conforme RGPD • Certifié Éducation Nationale • Hébergé en France • Made in Paris
          </div>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Conditions d'utilisation
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
