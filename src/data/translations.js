const translations = {
  fr: {
    nav: {
      features: "Fonctionnalités",
      howItWorks: "Comment ça marche",
      testimonials: "Témoignages",
      pricing: "Tarifs",
      getStarted: "Commencer"
    },
    hero: {
      badge: "Plumia, l'apprentissage de la rédaction",
      titleHighlight: "Rédige mieux,",
      titleEnd: "progresse chaque jour",
      description: "L’application qui accompagne tous les élèves dans l’apprentissage et le perfectionnement de la rédaction, grâce à une intelligence artificielle adaptée.",
      downloadNow: "Télécharger Maintenant",
      watchDemo: "Documentation"
    },
    validated: {
      badge: "Validé par l'Éducation Nationale",
      title: "Un outil approuvé pour l’apprentissage",
      description:
        "Testé par des centaines d'établissements scolaires, notre outil respecte les programmes de l’Éducation nationale et s’intègre parfaitement à l’environnement numérique éducatif.",
      certTitle: "Certification officielle",
      certDesc: "Ministère de l’Éducation nationale",
      note: "Note d’évaluation",
      committee: "Commission pédagogique indépendante",
    },
    features: {
      title: "Fonctionnalités",
        titleHighlight: "Incroyables",  // <- à ajouter

      description: "Tout ce dont vous avez besoin pour guider, soutenir et faire grandir les jeunes.",
      items: [
        {
          title: "Surlignage Coloré Intelligent",
          description: "Chaque type d'erreur a sa couleur pour une identification rapide et intuitive."
        },
        {
          title: "Suggestions Automatiques",
          description: "Des corrections proposées instantanément avec explications pédagogiques."
        },
        {
          title: "Correction Multi-type",
          description: "Orthographe, grammaire, conjugaison, majuscule... tout est détecté et corrigé intelligemment."
        },
        {
          title: "Conformité RGPD",
          description: "Données sécurisées et conformes aux réglementations françaises et européennes pour l'éducation."
        },
        {
          title: "Pédagogie Intégrée",
          description: "Approche éducative qui aide les élèves à comprendre leurs erreurs plutôt que de simplement les corriger."
        },
        {
          title: "Suivi Collectif",
          description: "Tableau de bord pour les enseignants avec statistiques d'erreurs par classe et progression individuelle."
        },
        {
          title: "Intelligence Contextuelle",
          description: "Notre IA comprend le contexte de chaque phrase pour proposer des corrections plus pertinentes."
        },
        {
          title: "Apprentissage Adaptatif",
          description: "L'algorithme s'adapte au niveau de chaque élève pour personnaliser l'accompagnement."
        }
      ]
    },
    pricing: {
      title: 'Nos offres',
      subtitle: "Des tarifs transparents adaptés à tous les types d'établissements scolaires",
      popular: 'Recommandé',
      choose: 'Choisir cette offre',
      plans: [
        {
          name: 'Plan Pilote',
          description: 'Parfait pour tester la solution',
          price: '99€',
          monthly: '/mois',
          popular: false,
          color: 'from-green-400 to-green-600',
          features: [
            'Jusqu\'à 50 utilisateurs',
            'Correction orthographique et grammaticale',
            'Interface de base',
            'Support par e-mail',
            'Statistiques simples'
          ]
        },
        {
          name: 'Plan Établissement',
          description: 'Solution complète pour votre établissement',
          price: '299€',
          monthly: '/mois',
          popular: true,
          color: 'from-blue-500 to-purple-600',
          features: [
            'Jusqu\'à 500 utilisateurs',
            'Toutes les fonctionnalités IA',
            'Tableau de bord avancé',
            'Support prioritaire',
            'Formation incluse',
            'Intégration ENT',
            'Rapports détaillés'
          ]
        },
        {
          name: 'Plan Académique',
          description: 'Pour les grandes institutions',
          price: 'Sur devis',
              monthly: "",  // <-- ajouter cette clé même si vide

          popular: false,
          color: 'from-gray-600 to-gray-800',
          features: [
            'Utilisateurs illimités',
            'Fonctionnalités premium',
            'Support dédié 24/7',
            'Intégration personnalisée',
            'Formation sur site',
            'API complète',
            'Hébergement dédié'
          ]
        }
      ]
    },
    howItWorks: {
      title: "Étapes Simples vers le",
      titleHighlight: "Succès",
      description: "Commencez en quelques minutes avec notre processus d'intégration intuitif conçu pour les utilisateurs de tous niveaux.",
      steps: [
        {
          title: "S'inscrire",
          description: "Créez votre compte en quelques secondes avec notre processus d'inscription simplifié."
        },
        {
          title: "Personnaliser",
          description: "Adaptez l'expérience à vos besoins avec notre assistant de configuration intelligent."
        },
        {
          title: "Transformer",
          description: "Regardez votre productivité s'envoler alors que notre IA apprend et s'adapte à votre flux de travail."
        }
      ]
    },
    testimonials: {
      title: "Témoignages",
      description: "Découvrez les témoignages de professeurs, de toutes les personnes qui utilisent Plumia au quotidien à travers la France.",
      items: [
        {
          name: "Sarah Chen",
          role: "Chef de Produit",
          company: "TechCorp",
          content: "Plumia a complètement révolutionné la façon dont notre équipe collabore. Les fonctionnalités IA sont incroyablement intuitives."
        },
        {
          name: "Marcus Johnson",
          role: "Directeur Créatif",
          company: "DesignStudio",
          content: "La fonctionnalité multi-plateforme est parfaite. Je peux commencer le travail sur mon ordinateur portable et finir sur mon téléphone."
        },
        {
          name: "Emma Rodriguez",
          role: "Fondatrice de Startup",
          company: "InnovateNow",
          content: "Sécurité et performance combinées en un seul package. C'est exactement ce dont nous avions besoin pour notre équipe grandissante."
        },
        {
          name: "Sarah Chen",
          role: "Chef de Produit",
          company: "TechCorp",
          content: "Plumia a complètement révolutionné la façon dont notre équipe collabore. Les fonctionnalités IA sont incroyablement intuitives."
        },
        {
          name: "Marcus Johnson",
          role: "Directeur Créatif",
          company: "DesignStudio",
          content: "La fonctionnalité multi-plateforme est parfaite. Je peux commencer le travail sur mon ordinateur portable et finir sur mon téléphone."
        },
        {
          name: "Emma Rodriguez",
          role: "Fondatrice de Startup",
          company: "InnovateNow",
          content: "Sécurité et performance combinées en un seul package. C'est exactement ce dont nous avions besoin pour notre équipe grandissante."
        }
      ]
    },
    contact: {
      title: "Prêt à Transformer Votre Enseignement ?",
      description: "Contactez notre équipe pour découvrir comment Plumia peut révolutionner l'apprentissage du français dans votre établissement.",
      emailTitle: "Email Commercial",
      emailDesc: "Pour toute demande d'information ou démonstration",
      phoneTitle: "Téléphone",
      phoneDesc: "Du lundi au vendredi, 9h-18h",
      addressTitle: "Adresse",
      addressDesc: "Nous vous accueillons sur rendez-vous à notre siège",
      formTitle: "Demande d'information",
      formLabels: {
        prenom: "Prénom *",
        nom: "Nom *",
        email: "Email professionnel *",
        etablissement: "Établissement *",
        fonction: "Fonction *",
        plan: "Choix du plan *",
        message: "Message *"
      },
      planOptions: {
        pilot: "Plan Pilote (99€/mois)",
        etablissement: "Plan Établissement (299€/mois)",
        academique: "Plan Académique"
      },
      fonctionOptions: {
        enseignant: "Enseignant(e)",
        directeur: "Directeur/Directrice",
        respPedago: "Responsable pédagogique",
        respInfo: "Responsable informatique",
        autre: "Autre"
      },
      submitBtn: "Envoyer ma demande",
      emailSubjectPrefix: "Demande Plumia",
      emailBodyIntro: "Bonjour, je souhaite obtenir des informations sur le plan"
    },
    cta: {
      title: "Prêt à Transformer Votre Flux de Travail ?",
      description: "Rejoignez des milliers de professionnels qui ont déjà révolutionné leur productivité avec Plumia.",
      startTrial: "Commencer l'Essai Gratuit",
      scheduleDemo: "Planifier une Démo",
      disclaimer: "Aucune carte de crédit requise • Essai gratuit de 14 jours • Annulez à tout moment"
    },
    footer: {
      description: "Transformer les flux de travail avec l'automatisation intelligente et la collaboration transparente.",
      product: "Produit",
      company: "Entreprise",
      support: "Support",
      copyright: "© 2025 Plumia. Tous droits réservés.",
      privacy: "Confidentialité",
      terms: "Conditions",
      cookies: "Cookies"
    }
  },
  en: {
    nav: {
      features: "Features",
      howItWorks: "How it Works",
      testimonials: "Reviews",
      pricing: "Pricing",
      getStarted: "Get Started"
    },
    hero: {
      badge: "Plumia, learning to write",
      titleHighlight: "Write better,",
      titleEnd: "progress every day",
      description: "The application that accompanies all students in learning and perfecting writing, thanks to adapted artificial intelligence.",
      downloadNow: "Download Now",
      watchDemo: "Documentation"
    },
    validated: {
      badge: "Approved by the Ministry of Education",
      title: "A trusted learning tool",
      description:
        "Tested by hundreds of schools, our tool aligns with national education standards and integrates smoothly into the digital learning environment.",
      certTitle: "Official certification",
      certDesc: "Ministry of Education",
      note: "Evaluation grade",
      committee: "Independent pedagogical committee",
    },
    features: {
      title: "Features",
        titleHighlight: "Incroyables",  // <- à ajouter

      description: "Everything you need to guide, support, and help youth grow.",
      items: [
        {
          title: "Smart Color Highlighting",
          description: "Each type of mistake is color-coded for quick and intuitive identification."
        },
        {
          title: "Automatic Suggestions",
          description: "Corrections are instantly proposed with clear, educational explanations."
        },
        {
          title: "Multi-Type Correction",
          description: "Spelling, grammar, conjugation, capitalization... everything is detected and corrected intelligently."
        },
        {
          title: "GDPR Compliance",
          description: "Data is secure and fully compliant with French and European education regulations."
        },
        {
          title: "Integrated Pedagogy",
          description: "An educational approach that helps students understand their mistakes rather than just correcting them."
        },
        {
          title: "Collective Tracking",
          description: "Teacher dashboard with class-level error stats and individual student progress."
        },
        {
          title: "Contextual Intelligence",
          description: "Our AI understands sentence context to propose more relevant corrections."
        },
        {
          title: "Adaptive Learning",
          description: "The algorithm adjusts to each student’s level for personalized support."
        }
      ]
    },
    pricing: {
      title: 'Our Plans',
      subtitle: 'Transparent pricing tailored for all types of educational institutions',
      popular: 'Recommended',
      choose: 'Choose this plan',
      plans: [
        {
          name: 'Pilot Plan',
          description: 'Perfect for testing the platform',
          price: '99€',
          monthly: '/month',
          popular: false,
          color: 'from-green-400 to-green-600',
          features: [
            'Up to 50 users',
            'Spelling and grammar correction',
            'Basic interface',
            'Email support',
            'Simple analytics'
          ]
        },
        {
          name: 'School Plan',
          description: 'Full solution for your institution',
          price: '299€',
          monthly: '/month',
          popular: true,
          color: 'from-blue-500 to-purple-600',
          features: [
            'Up to 500 users',
            'All AI features',
            'Advanced dashboard',
            'Priority support',
            'Training included',
            'LMS integration',
            'Detailed reports'
          ]
        },
        {
          name: 'Academic Plan',
          description: 'For large institutions',
          price: 'Custom pricing',
              monthly: "",  // <-- ajouter cette clé même si vide

          popular: false,
          color: 'from-gray-600 to-gray-800',
          features: [
            'Unlimited users',
            'Premium features',
            'Dedicated 24/7 support',
            'Custom integration',
            'On-site training',
            'Full API access',
            'Dedicated hosting'
          ]
        }
      ]
    },
    howItWorks: {
      title: "Simple Steps to",
      titleHighlight: "Success",
      description: "Get started in minutes with our intuitive onboarding process designed for users of all levels.",
      steps: [
        {
          title: "Sign Up",
          description: "Create your account in seconds with our streamlined registration process."
        },
        {
          title: "Customize",
          description: "Tailor the experience to your needs with our intelligent setup wizard."
        },
        {
          title: "Transform",
          description: "Watch your productivity soar as our AI learns and adapts to your workflow."
        }
      ]
    },
    testimonials: {
      title: "Testimonials",
      description: "Discover the testimonials of teachers, of all the people who use Plumia on a daily basis throughout France.",
      items: [
        {
          name: "Sarah Chen",
          role: "Product Manager",
          company: "TechCorp",
          content: "Plumia has completely revolutionized how our team collaborates. The AI features are incredibly intuitive."
        },
        {
          name: "Marcus Johnson",
          role: "Creative Director",
          company: "DesignStudio",
          content: "The cross-platform functionality is seamless. I can start work on my laptop and finish on my phone."
        },
        {
          name: "Emma Rodriguez",
          role: "Startup Founder",
          company: "InnovateNow",
          content: "Security and performance combined in one package. This is exactly what we needed for our growing team."
        },        
        {
          name: "Sarah Chen",
          role: "Product Manager",
          company: "TechCorp",
          content: "Plumia has completely revolutionized how our team collaborates. The AI features are incredibly intuitive."
        },
        {
          name: "Marcus Johnson",
          role: "Creative Director",
          company: "DesignStudio",
          content: "The cross-platform functionality is seamless. I can start work on my laptop and finish on my phone."
        },
        {
          name: "Emma Rodriguez",
          role: "Startup Founder",
          company: "InnovateNow",
          content: "Security and performance combined in one package. This is exactly what we needed for our growing team."
        }
      ]
    },
    contact: {
      title: "Ready to Transform Your Teaching?",
      description: "Contact our team to discover how Plumia can revolutionize French learning in your institution.",
      emailTitle: "Commercial Email",
      emailDesc: "For any information or demo request",
      phoneTitle: "Phone",
      phoneDesc: "Monday to Friday, 9am-6pm",
      addressTitle: "Address",
      addressDesc: "We welcome you by appointment at our headquarters",
      formTitle: "Information Request",
      formLabels: {
        prenom: "First Name *",
        nom: "Last Name *",
        email: "Professional Email *",
        etablissement: "Institution *",
        fonction: "Role *",
        plan: "Select a Plan *",
        message: "Message *"
      },
      planOptions: {
        pilot: "Pilot Plan (99€/month)",
        etablissement: "Institution Plan (299€/month)",
        academique: "Academic Plan"
      },
      fonctionOptions: {
        enseignant: "Teacher",
        directeur: "Director",
        respPedago: "Educational Manager",
        respInfo: "IT Manager",
        autre: "Other"
      },
      submitBtn: "Send My Request",
      emailSubjectPrefix: "Plumia Request",
      emailBodyIntro: "Hello, I would like to get information about the plan"
    },
    cta: {
      title: "Ready to Transform Your Workflow?",
      description: "Join thousands of professionals who have already revolutionized their productivity with Plumia.",
      startTrial: "Start Free Trial",
      scheduleDemo: "Schedule Demo",
      disclaimer: "No credit card required • 14-day free trial • Cancel anytime"
    },
    footer: {
      description: "Transforming workflows with intelligent automation and seamless collaboration.",
      product: "Product",
      company: "Company",
      support: "Support",
      copyright: "© 2025 Plumia. All rights reserved.",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookies"
    }
  },
  es: {
    nav: {
      features: "Características",
      howItWorks: "Cómo Funciona",
      testimonials: "Reseñas",
      pricing: "Precios",
      getStarted: "Comenzar"
    },
    hero: {
      badge: "Plumia, aprender a escribir",
      titleHighlight: "Escribe mejor,",
      titleEnd: "progresa cada día",
      description: "La aplicación que ayuda a todos los estudiantes a aprender y perfeccionar sus habilidades de escritura, gracias a la inteligencia artificial adaptada.",
      downloadNow: "Descargar Ahora",
      watchDemo: "Documentación"
    },
    validated: {
      badge: "Aprobado por el Ministerio de Educación",
      title: "Una herramienta de aprendizaje confiable",
      description:
        "Probada por cientos de escuelas, nuestra herramienta respeta los estándares educativos y se integra perfectamente en el entorno digital educativo.",
      certTitle: "Certificación oficial",
      certDesc: "Ministerio de Educación",
      note: "Calificación de evaluación",
      committee: "Comité pedagógico independiente",
    },
    features: {
      title: "Características",
        titleHighlight: "Incroyables",  // <- à ajouter

      description: "Todo lo que necesitas para guiar, apoyar y hacer crecer a los jóvenes.",
      items: [
        {
          title: "Resaltado de Colores Inteligente",
          description: "Cada tipo de error tiene su color para una identificación rápida e intuitiva."
        },
        {
          title: "Sugerencias Automáticas",
          description: "Correcciones propuestas al instante con explicaciones educativas claras."
        },
        {
          title: "Corrección Multitipo",
          description: "Ortografía, gramática, conjugación, mayúsculas... todo se detecta y corrige inteligentemente."
        },
        {
          title: "Cumplimiento RGPD",
          description: "Datos seguros y conformes a las normativas educativas francesas y europeas."
        },
        {
          title: "Pedagogía Integrada",
          description: "Un enfoque educativo que ayuda a los estudiantes a entender sus errores en lugar de solo corregirlos."
        },
        {
          title: "Seguimiento Colectivo",
          description: "Panel para docentes con estadísticas de errores por clase y progresos individuales."
        },
        {
          title: "Inteligencia Contextual",
          description: "Nuestra IA entiende el contexto de cada frase para proponer correcciones más relevantes."
        },
        {
          title: "Aprendizaje Adaptativo",
          description: "El algoritmo se adapta al nivel de cada estudiante para ofrecer un acompañamiento personalizado."
        }
      ]
    },
    pricing: {
      title: 'Nuestras Ofertas',
      subtitle: 'Precios transparentes adaptados a todo tipo de instituciones educativas',
      popular: 'Recomendado',
      choose: 'Elegir esta oferta',
      plans: [
        {
          name: 'Plan Piloto',
          description: 'Perfecto para probar la solución',
          price: '99€',
          monthly: '/mes',
          popular: false,
          color: 'from-green-400 to-green-600',
          features: [
            'Hasta 50 usuarios',
            'Corrección ortográfica y gramatical',
            'Interfaz básica',
            'Soporte por correo electrónico',
            'Estadísticas simples'
          ]
        },
        {
          name: 'Plan Institucional',
          description: 'Solución completa para tu institución',
          price: '299€',
          monthly: '/mes',
          popular: true,
          color: 'from-blue-500 to-purple-600',
          features: [
            'Hasta 500 usuarios',
            'Todas las funciones de IA',
            'Panel de control avanzado',
            'Soporte prioritario',
            'Formación incluida',
            'Integración con ENT',
            'Informes detallados'
          ]
        },
        {
          name: 'Plan Académico',
          description: 'Para grandes instituciones',
          price: 'A medida',
              monthly: "",  // <-- ajouter cette clé même si vide

          popular: false,
          color: 'from-gray-600 to-gray-800',
          features: [
            'Usuarios ilimitados',
            'Funciones premium',
            'Soporte dedicado 24/7',
            'Integración personalizada',
            'Formación presencial',
            'Acceso completo a la API',
            'Alojamiento dedicado'
          ]
        }
      ]
    },
    howItWorks: {
      title: "Pasos Simples al",
      titleHighlight: "Éxito",
      description: "Comienza en minutos con nuestro proceso de incorporación intuitivo diseñado para usuarios de todos los niveles.",
      steps: [
        {
          title: "Registrarse",
          description: "Crea tu cuenta en segundos con nuestro proceso de registro simplificado."
        },
        {
          title: "Personalizar",
          description: "Adapta la experiencia a tus necesidades con nuestro asistente de configuración inteligente."
        },
        {
          title: "Transformar",
          description: "Observa cómo tu productividad se dispara mientras nuestra IA aprende y se adapta a tu flujo de trabajo."
        }
      ]
    },
    testimonials: {
      title: "Reseñas",
      description: "Descubra los testimonios de los profesores, de todas las personas que utilizan Plumia a diario en toda Francia.",
      items: [
        {
          name: "Sarah Chen",
          role: "Gerente de Producto",
          company: "TechCorp",
          content: "Plumia ha revolucionado completamente cómo colabora nuestro equipo. Las características de IA son increíblemente intuitivas."
        },
        {
          name: "Marcus Johnson",
          role: "Director Creativo",
          company: "DesignStudio",
          content: "La funcionalidad multiplataforma es perfecta. Puedo comenzar el trabajo en mi laptop y terminarlo en mi teléfono."
        },
        {
          name: "Emma Rodriguez",
          role: "Fundadora de Startup",
          company: "InnovateNow",
          content: "Seguridad y rendimiento combinados en un paquete. Esto es exactamente lo que necesitábamos para nuestro equipo en crecimiento."
        },
        {
          name: "Sarah Chen",
          role: "Gerente de Producto",
          company: "TechCorp",
          content: "Plumia ha revolucionado completamente cómo colabora nuestro equipo. Las características de IA son increíblemente intuitivas."
        },
        {
          name: "Marcus Johnson",
          role: "Director Creativo",
          company: "DesignStudio",
          content: "La funcionalidad multiplataforma es perfecta. Puedo comenzar el trabajo en mi laptop y terminarlo en mi teléfono."
        },
        {
          name: "Emma Rodriguez",
          role: "Fundadora de Startup",
          company: "InnovateNow",
          content: "Seguridad y rendimiento combinados en un paquete. Esto es exactamente lo que necesitábamos para nuestro equipo en crecimiento."
        }
      ]
    },
    contact: {
      title: "¿Listo para Transformar tu Enseñanza?",
      description: "Contacta con nuestro equipo para descubrir cómo Plumia puede revolucionar el aprendizaje del francés en tu institución.",
      emailTitle: "Email Comercial",
      emailDesc: "Para cualquier solicitud de información o demostración",
      phoneTitle: "Teléfono",
      phoneDesc: "De lunes a viernes, 9am-6pm",
      addressTitle: "Dirección",
      addressDesc: "Te atendemos con cita previa en nuestra sede",
      formTitle: "Solicitud de Información",
      formLabels: {
        prenom: "Nombre *",
        nom: "Apellido *",
        email: "Email profesional *",
        etablissement: "Institución *",
        fonction: "Función *",
        plan: "Selecciona un plan *",
        message: "Mensaje *"
      },
      planOptions: {
        pilot: "Plan Piloto (99€/mes)",
        etablissement: "Plan Institución (299€/mes)",
        academique: "Plan Académico"
      },
      fonctionOptions: {
        enseignant: "Profesor(a)",
        directeur: "Director(a)",
        respPedago: "Responsable pedagógico",
        respInfo: "Responsable informática",
        autre: "Otro"
      },
      submitBtn: "Enviar mi solicitud",
      emailSubjectPrefix: "Solicitud Plumia",
      emailBodyIntro: "Hola, quisiera obtener información sobre el plan"
    },
    cta: {
      title: "¿Listo para Transformar tu Flujo de Trabajo?",
      description: "Únete a miles de profesionales que ya han revolucionado su productividad con Plumia.",
      startTrial: "Comenzar Prueba Gratuita",
      scheduleDemo: "Programar Demo",
      disclaimer: "No se requiere tarjeta de crédito • Prueba gratuita de 14 días • Cancela en cualquier momento"
    },
    footer: {
      description: "Transformando flujos de trabajo con automatización inteligente y colaboración perfecta.",
      product: "Producto",
      company: "Empresa",
      support: "Soporte",
      copyright: "© 2025 Plumia. Todos los derechos reservados.",
      privacy: "Privacidad",
      terms: "Términos",
      cookies: "Cookies"
    }
  }
};

export default translations;