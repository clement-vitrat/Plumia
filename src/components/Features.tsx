'use client';

import { Zap, Shield, Smartphone, Users, Globe, Lock, Lightbulb, BarChart2, Brain } from 'lucide-react';

type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
};

type FeaturesS = {
  t: {
    features: {
      title: string;
      titleHighlight: string;
      description: string;
      items: {
        title: string;
        description: string;
      }[];
    };
  };
};

const icons: React.ElementType[] = [
  Zap, Shield, Smartphone, Users, Globe, Lock, Lightbulb, BarChart2
];

export default function Features({ t }: FeaturesS) {
  const features: Feature[] = t.features.items.map((item, index) => ({
    icon: icons[index % icons.length],
    ...item
  }));

  return (
    <section id="features" className="py-10 to-gray-50 relative overflow-hidden mb-5">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 rounded-full px-6 py-2 mb-6 text-sm font-medium ring-1 ring-blue-200">
            <Brain className="w-4 h-4" />
            <span className="text-sm font-medium">IA</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.features.title}
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.features.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-300/20 transition-all duration-300 transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fade-in-up 0.6s ease-out both'
              }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3 transition-all duration-300 group-hover:text-blue-600 group-hover:text-xl group-hover:font-bold">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                {feature.description}
              </p>

              {/* Hover underline */}
              <div className="mt-2 h-1 w-full scale-x-0 group-hover:scale-x-100 origin-left bg-gradient-to-r from-[#a8c8ff] to-white transition-transform duration-300 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
