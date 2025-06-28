'use client';

import { Check, Star, CreditCard } from 'lucide-react';

// Define the structure of a pricing plan
type Plan = {
  name: string;
  description: string;
  price: number | string;
  monthly: string;
  features: string[];
  popular?: boolean;
  color: string;
};

// Define the structure of the props for the Pricing component
type PricingProps = {
  t: {
    nav: {
      pricing: string;
    };
    pricing: {
      title: string;
      subtitle: string;
      choose: string;
      popular: string;
      plans: Plan[];
    };
  };
};


/**
 * Pricing component renders the pricing section of the landing page.
 * It displays different pricing plans with features and a call to action.
 *
 * @param {PricingProps} props - The properties for the Pricing component.
 * @returns {JSX.Element} The rendered Pricing component.
 */
export default function Pricing({ t }: PricingProps) {
    // Extract the plans from the translation object
    const plans = t.pricing.plans;

    return (
        // Main section for pricing
        <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-4">
            
            {/* Header for the pricing section */}
            <div className="text-center mb-14">
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 rounded-full px-6 py-2 mb-6 text-sm font-medium ring-1 ring-blue-200">
                    <CreditCard className="w-4 h-4" />
                    <span>{t.nav.pricing}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    {t.pricing.title}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.pricing.subtitle}</p>
            </div>

            {/* Plans grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {plans.map((plan, index) => {
                    const isPopular = plan.popular;

                    return (
                        <div
                            key={index}
                            className={`relative rounded-2xl bg-white shadow-lg hover:shadow-xl transform transition-all duration-500 hover:-translate-y-1
                                border-2 ${isPopular ? 'border-transparent bg-gradient-to-r from-blue-400 to-blue-700 p-[2px]' : 'border-blue-100'}
                                ${!isPopular ? 'scale-[0.985]' : ''}
                            `}
                        >
                            <div className="bg-white rounded-2xl h-full w-full px-7 py-7">
                                {isPopular && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                                        <div className="bg-gradient-to-r from-blue-400 to-blue-700 text-white px-4 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1 shadow">
                                            <Star size={14} className="fill-current" />
                                            <span>{t.pricing.popular}</span>
                                        </div>
                                    </div>
                                )}

                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{plan.name}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

                                    <div className="flex items-end justify-center mb-4">
                                        <span className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                            {plan.price}
                                        </span>
                                        <span className="text-gray-500 ml-1 mb-1 text-sm">
                                            {plan.monthly}
                                        </span>
                                    </div>

                                    <button
                                        className={`w-full py-3 px-4 rounded-xl font-medium text-base transition-all duration-300 ${
                                            isPopular
                                            ? 'bg-gradient-to-r from-[#a8c8ff] text-black hover:shadow-md'
                                            : 'border border-blue-300 text-blue-600 hover:bg-blue-50'
                                        }`}
                                    >
                                        <a href="#contact">
                                            {t.pricing.choose}
                                        </a>
                                    </button>
                                </div>

                                {/* Features list */}
                                <div className="space-y-3">
                                    {plan.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center space-x-3">
                                            <div className="w-5 h-5 rounded-full border-2 border-blue-500 flex items-center justify-center">
                                                <Check size={12} className="text-blue-500" />
                                            </div>
                                            <span className="text-gray-700 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );

                })}
            </div>

        </div>

    </section>
  );
}
