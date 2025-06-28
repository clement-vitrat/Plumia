'use client';

import Image from 'next/image';
import { GraduationCap } from 'lucide-react';
import LogoMinistereEducationNationale from '../public/logo_ministere_education_nationale.jpg';

type ValidatedProps = {
  t: {
    validated: {
      badge: string;
      title: string;
      description: string;
      certTitle: string;
      certDesc: string;
      note: string;
      committee: string;
    };
  };
};

export default function Validated({ t }: ValidatedProps) {
  return (
    <section className="relative py-20 from-white w-full">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-10 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-none w-full px-6 lg:px-20 mx-auto">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 rounded-full px-5 py-2 text-sm font-medium ring-1 ring-indigo-300 shadow-sm">
            <GraduationCap className="w-4 h-4" />
            <span>{t.validated.badge}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-10 mx-auto shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300 max-w-7xl">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t.validated.title}
            </h3>
            <p className="text-gray-700 text-md leading-relaxed mb-6">
              {t.validated.description}
            </p>
            <div className="flex items-center space-x-4">
              <Image
                src={LogoMinistereEducationNationale}
                alt="Logo"
                width={48}
                height={48}
                className="rounded-md object-contain"
              />
              <div>
                <div className="font-semibold text-gray-900">{t.validated.certTitle}</div>
                <div className="text-sm text-gray-600">{t.validated.certDesc}</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 text-center border border-gray-100 shadow">
            <div className="text-5xl font-bold text-blue-600 mb-2">A+</div>
            <div className="text-gray-900 font-semibold mb-1">{t.validated.note}</div>
            <div className="text-sm text-gray-600">{t.validated.committee}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
