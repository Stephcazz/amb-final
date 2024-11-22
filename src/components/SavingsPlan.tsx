import React from 'react';
import { Clock, CreditCard, Building2, ArrowRight } from 'lucide-react';

interface PlanCardProps {
  title: string;
  rates: string[];
  features: string[];
  buttonText: string;
  onButtonClick: () => void;
}

function PlanCard({ title, rates, features, buttonText, onButtonClick }: PlanCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>
      
      <div className="mb-6">
        <h4 className="font-semibold text-gray-700 mb-3">Rendements mensuels</h4>
        {rates.map((rate, index) => (
          <p key={index} className="text-gray-600 mb-2">{rate}</p>
        ))}
      </div>

      <div className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <p key={index} className="text-gray-600">{feature}</p>
        ))}
      </div>

      <button 
        onClick={onButtonClick}
        className="w-full bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 mt-auto"
      >
        <span>{buttonText}</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}

export function SavingsPlans() {
  const scrollToForm = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="savings-plans" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Choisissez votre propre stratégie d'épargne avec des rendements exceptionnels
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
          Vous souhaitez pouvoir disposer de votre argent à tout moment ou vous préférez l'épargne à long terme ? Nous vous proposons des comptes d'épargne adaptés à vos besoins.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <PlanCard
            title="Plan d'épargne journalier"
            rates={[
              "De 0,61% à 0,98% par mois",
              "De 7,35% à 11,80% par an"
            ]}
            features={[
              "Accumulation quotidienne d'intérêts",
              "Les rendements changent quotidiennement pour refléter les taux actuels du marché*",
              "Retrait à tout moment",
              "Sans plafond"
            ]}
            buttonText="En savoir plus sur le plan d'épargne journalier"
            onButtonClick={scrollToForm}
          />

          <PlanCard
            title="Plans d'épargne à long terme"
            rates={[
              "De 0,61% à 0,98% par mois",
              "De 7,35% à 11,80% par an"
            ]}
            features={[
              "Accumulation d'intérêts sur une période fixe avec des plans de 3, 6 ou 12 mois",
              "Les taux sont variables* mais fixés au moment de la mise en place du dépôt",
              "Retrait à l'expiration du terme déterminé",
              "Sans plafond",
              "Bonus de rendement pour les gros volumes"
            ]}
            buttonText="En savoir plus sur les plans d'épargne à long terme"
            onButtonClick={scrollToForm}
          />
        </div>
      </div>
    </section>
  );
}