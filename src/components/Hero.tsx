'use client';

import { useState } from "react";
import { Sparkles, ChevronDown, Download, ArrowRight, Play, Zap, Star } from 'lucide-react';

// Composant pour mettre en évidence un mot avec un tooltip
function HighlightedWord({ children, tooltip, colorClass }: { children: React.ReactNode; tooltip: string; colorClass: string }) {
  // État pour gérer l'affichage du tooltip
  // Utilisation de useState pour gérer l'état d'affichage du tooltip
  const [show, setShow] = useState(false);

  return (
    // Élément span qui affiche le mot avec un tooltip
    // Utilisation de classes utilitaires pour le style et la transition
    <span
      className={`${colorClass} px-2 py-1 rounded-full text-sm relative cursor-pointer select-none transition hover:brightness-105`}
      onClick={() => setShow(!show)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setShow(!show);
        }
      }}
      tabIndex={0}
      role="button"
      aria-expanded={show}
      aria-label={`Explication : ${tooltip}`}
    >
      {/* Contenu du mot avec le tooltip */}
      {/* Utilisation de children pour afficher le mot à mettre en évidence */}
      {children}
      <span
        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg z-20 w-64 shadow-lg transition-opacity pointer-events-none
          ${show ? "opacity-100 pointer-events-auto" : "opacity-0"}
        `}
      >
        {/* Contenu du tooltip */}
        {tooltip}
      </span>
    </span>
  );
}


/**
 * Hero component renders the main hero section of the landing page.
 * It includes a title, description, action buttons, and a modern app preview.
 *
 * @param {Object} props - The properties for the Hero component.
 * @param {Object} props.t - Translation object containing text for the hero section.
 * @returns {JSX.Element} The rendered Hero component.
 */
export default function Hero({ t }: { t: any }) {
  return (
    // Section principale du composant Hero
      <section className="relative pt-24 pb-32 overflow-hidden">
      
      {/* Contenu central */}
      <div className="mx-auto max-w-3xl py-20 px-6 sm:py-28 lg:py-60 text-center">
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium ring-1 ring-blue-200">
            <Sparkles className="w-4 h-4 mr-2" />
            {t.hero.badge}
          </div>
        </div>

        {/* Titre principal avec highlight */}
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-blue-600">
            {' '}
            {t.hero.titleHighlight}{' '}
          </div>
          <div>{t.hero.titleEnd}</div>
        </h1>

        {/* Description */}
        <p className="mt-8 text-lg text-gray-600 sm:text-xl">{t.hero.description}</p>

        {/* Boutons d'action */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#a8c8ff] to-white px-6 py-3 text-black font-semibold hover:from-[#91b8fb] hover:to-[#e6eefe] shadow transition-all text-sm">
            <Download className="w-5 h-5 mr-2" />
            <a href="#contact">
              <p className="text-black group-hover:text-black mb-0">
                {t.hero.downloadNow}
              </p>
            </a>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="inline-flex items-center justify-center rounded-full border border-[#a8c8ff] px-6 py-3 text-[#2a2a2a] hover:bg-[#f5faff] hover:text-black transition-all text-sm font-semibold">
            <Play className="w-5 h-5 mr-2" />
            {t.hero.watchDemo}
          </button>
        </div>
        
      </div>


      {/* Aperçu moderne de l'application 
      <div className="relative max-w-4xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-3xl border border-gray-100 overflow-hidden transition-all duration-300 hover:rotate-[0.4deg] hover:scale-[1.005] transform-gpu">
*/}
          {/* En-tête avec indicateurs et export        
          <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#eef4ff] to-white border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />
              <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full" />
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
              <span className="ml-4 text-sm text-gray-700 font-medium tracking-wide">Plumia • Analyse active</span>
            </div>
            <button className="text-xs text-blue-600 hover:underline font-medium">📄 Exporter .PDF</button>
          </div>
*/}
          {/* Contenu principal avec rédaction et résumé 
          <div className="px-6 py-8 space-y-6">
            <div className="text-sm text-gray-500 font-semibold tracking-wide uppercase">Rédaction</div>
*/}
            {/* Texte avec erreurs mises en évidence 
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 text-[15px] text-gray-800 leading-7 space-y-4 font-sans">
              <p>
                Les élèves de la classe de cinquième{' '}
                <HighlightedWord colorClass="bg-red-100 text-red-700" tooltip='❌ Conjugaison : écrire "participent"'>
                  participe
                </HighlightedWord>{' '}
                au concours de{' '}
                <HighlightedWord colorClass="bg-yellow-100 text-yellow-800" tooltip='⚠️ Orthographe : le mot correct est "mathématiques"'>
                  matématique
                </HighlightedWord>{' '}
                organisé par leur{' '}
                <HighlightedWord colorClass="bg-blue-100 text-blue-800" tooltip='💡 Typographie : majuscule → "Académie"'>
                  académie
                </HighlightedWord>
                . Leur chance de{' '}
                <HighlightedWord colorClass="bg-red-100 text-red-700" tooltip='❌ Orthographe : "réussite" avec un "é"'>
                  reussite
                </HighlightedWord>{' '}
                dépendra de leur{' '}
                <HighlightedWord colorClass="bg-yellow-100 text-yellow-800" tooltip='❌ Orthographe : "préparations" avec un "é"'>
                  preparations
                </HighlightedWord>.
              </p>
            </div>
*/}
            {/* Résumé avec erreurs détectées 
            <div className="bg-blue-100/50 border border-blue-200 rounded-xl p-4 flex items-center gap-2 text-sm text-blue-900 font-semibold shadow-sm">
              <Zap className="w-4 h-4 text-blue-600" />
              5 erreurs détectées
            </div>
          </div>
*/}
          {/* Pied de page avec informations et note 
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
            <span>Plumia v1.3 • Dernière analyse : il y a 3s</span>
            <Star className="w-4 h-4 text-yellow-400" />
          </div>
        </div>

      </div> */}
    </section>
  );
}