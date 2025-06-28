'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection({ t }: { t: any }) {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    etablissement: '',
    fonction: '',
    message: '',
    plan: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getPlanTarif = (plan: string) => {
  if (!t.contact || !t.contact.planPrices) return '';
  switch (plan) {
    case t.contact.planOptions.pilot: return t.contact.planPrices.pilot;
    case t.contact.planOptions.etablissement: return t.contact.planPrices.etablissement;
    case t.contact.planOptions.academique: return t.contact.planPrices.academique;
    default: return '';
  }
};


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const planLabel = formData.plan; // par ex. "Plan Pilote"
        const tarif = getPlanTarif(planLabel); // ex. "500€/an"

        // Construire le corps du mail en utilisant les traductions
        const body = `${t.contact.emailBodyIntro} ${planLabel}.\n\n${formData.message}\n\n----------------------\n${formData.prenom} ${formData.nom}\n${formData.fonction} - ${formData.etablissement}`;

        const subject = `${t.contact.emailSubjectPrefix} - ${planLabel}`;

        const mailto = `mailto:eclerini@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Afficher le message à l’utilisateur dans sa langue
        alert(body);

        window.location.href = mailto;
    };


  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text">
              {t.contact.title}
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              {t.contact.description}
            </p>

            <div className="space-y-8">

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{t.contact.emailTitle}</h3>
                  <p className="text-gray-600 mb-2">{t.contact.emailDesc}</p>
                  <a href="mailto:commercial@Plumia.fr" className="text-blue-600 font-semibold hover:text-blue-900 transition-colors">
                    commercial@Plumia.fr
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{t.contact.phoneTitle}</h3>
                  <p className="text-gray-600 mb-2">{t.contact.phoneDesc}</p>
                  <a href="tel:+33123456789" className="text-blue-600 font-semibold hover:text-blue-900 transition-colors">
                    01 23 45 67 89
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{t.contact.addressTitle}</h3>
                  <p className="text-gray-600 mb-2">{t.contact.addressDesc}</p>
                  <a
                    href="https://www.google.com/maps?q=15+Avenue+de+la+République,+75011+Paris,+France"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold hover:text-blue-900 transition-colors block"
                  >
                    <div>15 Avenue de la République</div>
                    <div>75011 Paris, France</div>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.contact.formTitle}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">

                <div>
                  <label className="block text-sm text-gray-700 mb-1">{t.contact.formLabels.prenom}</label>
                  <input
                    type="text"
                    name="prenom"
                    required
                    value={formData.prenom}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder={t.contact.formLabels.prenom.replace(' *', '')}
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1">{t.contact.formLabels.nom}</label>
                  <input
                    type="text"
                    name="nom"
                    required
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder={t.contact.formLabels.nom.replace(' *', '')}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">{t.contact.formLabels.email}</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder={t.contact.formLabels.email.replace(' *', '')}
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">{t.contact.formLabels.etablissement}</label>
                <input
                  type="text"
                  name="etablissement"
                  required
                  value={formData.etablissement}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder={t.contact.formLabels.etablissement.replace(' *', '')}
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">{t.contact.formLabels.fonction}</label>
                <select
                  name="fonction"
                  required
                  value={formData.fonction}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">{t.contact.formLabels.fonction}</option>
                  <option>{t.contact.fonctionOptions.enseignant}</option>
                  <option>{t.contact.fonctionOptions.directeur}</option>
                  <option>{t.contact.fonctionOptions.respPedago}</option>
                  <option>{t.contact.fonctionOptions.respInfo}</option>
                  <option>{t.contact.fonctionOptions.autre}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">{t.contact.formLabels.plan}</label>
                <select
                  name="plan"
                  required
                  value={formData.plan}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">{t.contact.formLabels.plan}</option>
                  <option>{t.contact.planOptions.pilot}</option>
                  <option>{t.contact.planOptions.etablissement}</option>
                  <option>{t.contact.planOptions.academique}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">{t.contact.formLabels.message}</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder={t.contact.formLabels.message.replace(' *', '')}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                {t.contact.submitBtn}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
