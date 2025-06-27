'use client';

// Import necessary libraries and components
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';


/**
 * ContactSection component renders the contact section of the landing page.
 * It includes a form for users to request more information about the service.
 *
 * @returns {JSX.Element} The rendered ContactSection component.
 */
export default function ContactSection() {
    // State to manage form data
    const [formData, setFormData] = useState({
        prenom: '',
        nom: '',
        email: '',
        etablissement: '',
        fonction: '',
        message: '',
        plan: '',
    });

    // Function to handle form input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Function to get the plan tarif based on the selected plan
    const getPlanTarif = (plan: string) => {
        switch (plan) {
            case 'Plan Pilote': return '99€/mois';
            case 'Plan Établissement': return '299€/mois';
            case 'Plan Académique': return 'Sur devis';
            default: return '';
        }
    };

    // Function to handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const body = `Bonjour,%0D%0A%0D%0AJe souhaite obtenir plus d'informations sur l'offre ${formData.plan} (${getPlanTarif(formData.plan)}).` +
        `%0D%0A%0D%0A${formData.message}%0D%0A%0D%0A---%0D%0A${formData.prenom} ${formData.nom}%0D%0A${formData.fonction} - ${formData.etablissement}`;

        const mailto = `mailto:eclerini@gmail.com?subject=Demande d'information - ${formData.plan}&body=${encodeURIComponent(body)}`;

        window.location.href = mailto;
    };

    return (
        // Main contact section
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section title */}
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-4xl md:text-5x1 font-bold mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text ">
                            Prêt à Transformer Votre Enseignement ?
                        </h2>
                        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                            Contactez notre équipe pour découvrir comment Plumia peut révolutionner 
                            l'apprentissage du français dans votre établissement.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-2">Email Commercial</h3>
                                    <p className="text-gray-600 mb-2">Pour toute demande d'information ou démonstration</p>
                                    <a href="mailto:commercial@Plumia.fr" className="text-blue-600 font-semibold hover:text-blue-900 transition-colors">
                                        commercial@Plumia.fr
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-2">Téléphone</h3>
                                    <p className="text-gray-600 mb-2">Du lundi au vendredi, 9h-18h</p>
                                    <a href="tel:+33123456789" className="text-blue-600 font-semibold hover:text-blue-900 transition-colors">
                                        01 23 45 67 89
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-2">Adresse</h3>
                                    <p className="text-gray-600 mb-2">Nous vous accueillons sur rendez-vous à notre siège</p>
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

                    {/* Contact form */}    
                    <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Demande d'information</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm text-gray-700 mb-1">Prénom *</label>
                                    <input 
                                        type="text" 
                                        name="prenom" 
                                        required 
                                        value={formData.prenom} 
                                        onChange={handleChange} 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500" 
                                        placeholder="Votre prénom" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-700 mb-1">Nom *</label>
                                    <input 
                                        type="text" 
                                        name="nom" 
                                        required 
                                        value={formData.nom} 
                                        onChange={handleChange} 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500" 
                                        placeholder="Votre nom" 
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm text-gray-700 mb-1">Email professionnel *</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    required 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500" 
                                    placeholder="votre.email@etablissement.fr" 
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-700 mb-1">Établissement *</label>
                                <input 
                                    type="text" 
                                    name="etablissement" 
                                    required 
                                    value={formData.etablissement} 
                                    onChange={handleChange} 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500" 
                                    placeholder="Nom de votre établissement" 
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-700 mb-1">Fonction *</label>
                                <select 
                                    name="fonction" 
                                    required 
                                    value={formData.fonction} 
                                    onChange={handleChange} 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="">Sélectionnez votre fonction</option>
                                    <option>Enseignant(e)</option>
                                    <option>Directeur/Directrice</option>
                                    <option>Responsable pédagogique</option>
                                    <option>Responsable informatique</option>
                                    <option>Autre</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm text-gray-700 mb-1">Choix du plan *</label>
                                <select 
                                    name="plan" 
                                    required 
                                    value={formData.plan} 
                                    onChange={handleChange} 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="">Sélectionnez un plan</option>
                                    <option>Plan Pilote</option>
                                    <option>Plan Établissement</option>
                                    <option>Plan Académique</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm text-gray-700 mb-1">Message *</label>
                                <textarea 
                                    name="message" 
                                    required 
                                    rows={4} 
                                    value={formData.message} 
                                    onChange={handleChange} 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500" 
                                    placeholder="Décrivez vos besoins ou questions...">
                                </textarea>
                            </div>

                            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                                Envoyer ma demande
                            </button>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
}
