'use client'; // Indique que ce composant est un composant client dans Next.js (obligatoire si hooks utilisés)

import { useState, useEffect } from 'react';
import { Play, Pause, Download, Clock } from 'lucide-react'; // Icônes utilisées dans l'interface

export default function Demo() {
  // État pour savoir si la lecture automatique est active
  const [isPlaying, setIsPlaying] = useState(false);
  // État de l'étape actuelle de la démonstration
  const [currentStep, setCurrentStep] = useState(0);
  // État du temps restant avant une date cible (compte à rebours)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Hook pour gérer le compte à rebours
  useEffect(() => {
    const targetDate = new Date('2025-09-01T00:00:00').getTime(); // Date cible (rentrée ou lancement)
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      // Si la date n'est pas encore atteinte, on met à jour le temps restant
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000); // mise à jour toutes les secondes

    return () => clearInterval(interval); // nettoyage à la destruction
  }, []);

  // Hook pour gérer la lecture automatique des étapes
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      // Toutes les 3 secondes, on passe à l'étape suivante (en boucle)
      interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % demoSteps.length);
      }, 3000);
    }
    return () => clearInterval(interval); // nettoyage
  }, [isPlaying]);

  // Données de démonstration avec 3 étapes
  const demoSteps = [
    {
      title: "Saisie du texte",
      description: "L'élève écrit son texte naturellement",
      content: "Je vais au cinéma avec mes amie pour voir un film d'horreure. C'est vraiment bien ce film.",
      corrections: []
    },
    {
      title: "Détection des erreurs",
      description: "L'IA identifie les erreurs d'orthographe et de grammaire",
      content: `Je vais au cinéma avec mes <span class='bg-red-200 text-red-800 px-1 rounded cursor-pointer' title='Accord en nombre'>amie</span> pour voir un film <span class='bg-yellow-200 text-yellow-800 px-1 rounded cursor-pointer' title='Orthographe'>d'horreure</span>. <span class='bg-blue-200 text-blue-800 px-1 rounded cursor-pointer' title='Majuscule manquante'>c'est</span> vraiment bien ce film.`,
      corrections: [
        { type: "Accord", error: "amie", correction: "amies", explanation: "Accord en nombre avec 'mes'" },
        { type: "Orthographe", error: "d'horreure", correction: "d'horreur", explanation: "Orthographe correcte du mot" },
        { type: "Majuscule", error: "c'est", correction: "C'est", explanation: "Majuscule en début de phrase" }
      ]
    },
    {
      title: "Suggestions contextuelles",
      description: "Des corrections intelligentes sont proposées avec explications",
      content: `Je vais au cinéma avec mes <span class='bg-green-200 text-green-800 px-1 rounded'>amies</span> pour voir un film <span class='bg-green-200 text-green-800 px-1 rounded'>d'horreur</span>. <span class='bg-green-200 text-green-800 px-1 rounded'>C'est</span> vraiment bien ce film.`,
      corrections: []
    }
  ];

  // Fonction pour générer un document texte avec les corrections
  const generateSampleDocument = () => {
    const content = `DOCUMENT D'EXEMPLE - PLUMIA
========================================

Texte original de l'élève :
"Je vais au cinéma avec mes amie pour voir un film d'horreure. c'est vraiment bien ce film."

Corrections proposées :
1. "amie" → "amies" (Accord en nombre avec "mes")
2. "d'horreure" → "d'horreur" (Orthographe correcte)
3. "c'est" → "C'est" (Majuscule en début de phrase)

Texte corrigé :
"Je vais au cinéma avec mes amies pour voir un film d'horreur. C'est vraiment bien ce film."

Analyse pédagogique :
- Erreurs d'accord : 1
- Erreurs d'orthographe : 1  
- Erreurs de ponctuation : 1
- Niveau estimé : CE2-CM1

Recommandations :
- Réviser les accords en nombre
- Attention aux majuscules en début de phrase
- Relecture recommandée

Généré par Plumia
Date : ${new Date().toLocaleDateString('fr-FR')}`;

    // Création et téléchargement du fichier .txt
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'exemple-correction-correcteurIA.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="demo" className="relative py-16 overflow-hidden bg-gray-50">
      {/* Arrière-plan flou décoratif */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* En-tête principal */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 rounded-full px-4 py-1.5 mb-4 text-sm font-medium ring-1 ring-blue-100">
            <Clock className="w-4 h-4" />
            <span>Compte à rebours | Démonstration</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Plumia version Beta
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez comment Plumia transforme l’apprentissage de l’écriture avec une correction intelligente, des explications pédagogiques et un retour pour progresser.
          </p>
        </div>

        {/* Bloc compte à rebours */}
        <div className="flex justify-center mb-10">
          <div className="flex gap-6 text-center text-gray-800 text-sm md:text-base font-medium">
            {/* Affichage dynamique des unités de temps */}
            {['Jours', 'Heures', 'Minutes', 'Secondes'].map((label, idx) => {
              const time = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds][idx];
              return (
                <div key={label} className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-blue-600">{time}</span>
                  <span className="opacity-70">{label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Grille principale : étapes à gauche, contenu à droite */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Colonne gauche : étapes interactives */}
          <div className="flex flex-col justify-center space-y-3">
            {demoSteps.map((step, index) => (
              <div
                key={index}
                className={`p-3 rounded-xl border transition-all cursor-pointer ${
                  currentStep === index
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
                onClick={() => setCurrentStep(index)}
              >
                <div className="flex items-center space-x-3">
                  {/* Numéro de l'étape */}
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold ${
                    currentStep === index ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {index + 1}
                  </div>
                  {/* Titre + description de l'étape */}
                  <div>
                    <h4 className="font-medium mb-0 text-gray-900 text-lg">{step.title}</h4>
                    <p className="text-ml mb-0 text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Boutons : lecture/pause + téléchargement */}
            <div className="flex gap-4 pt-1">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-sm"
              >
                {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                {isPlaying ? 'Pause' : 'Lire'}
              </button>
              <button
                onClick={generateSampleDocument}
                className="flex items-center border border-blue-600 text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-lg text-sm"
              >
                <Download className="w-4 h-4 mr-2" />
                Télécharger
              </button>
            </div>
          </div>

          {/* Colonne droite : aperçu de la correction */}
          <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-200 min-h-[370px] max-h-[410px] overflow-auto">
            <div className="text-sm text-gray-500 mb-1">Aperçu de la correction</div>
            {/* Contenu HTML de la correction */}
            <div
              className="text-gray-900 leading-relaxed text-base"
              dangerouslySetInnerHTML={{ __html: demoSteps[currentStep].content }}
            />
            {/* Détail des corrections si disponibles */}
            {demoSteps[currentStep].corrections.length > 0 && (
              <div className="mt-2 space-y-2">
                {demoSteps[currentStep].corrections.map((correction, idx) => (
                  <div key={idx} className="bg-blue-50 border border-blue-200 rounded-lg p-2">
                    <div className="text-blue-800 font-medium text-sm">{correction.type}</div>
                    <div className="text-blue-600 text-ml">
                      "{correction.error}" → "{correction.correction}"
                    </div>
                    <div className="text-blue-500 text-sm mt-0.5">{correction.explanation}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
