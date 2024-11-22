import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, TrendingUp, Lock, ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export function LongTermPlans() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plans = [
    {
      duration: "3 mois",
      monthlyRate: "0,61%",
      annualRate: "7,35%",
    },
    {
      duration: "6 mois",
      monthlyRate: "0,82%",
      annualRate: "9,85%",
      featured: true,
    },
    {
      duration: "12 mois",
      monthlyRate: "0,98%",
      annualRate: "11,80%",
    },
  ];

  const scrollToForm = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Plans d'épargne à long terme
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Maximisez vos revenus avec nos plans d'épargne à long terme. Plus la durée est longue, plus les rendements sont avantageux.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white rounded-2xl shadow-lg p-8 relative ${
                plan.featured ? 'ring-2 ring-emerald-500' : ''
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Le plus populaire
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Plan {plan.duration}
              </h3>
              
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Rendement mensuel</p>
                  <p className="text-3xl font-bold text-emerald-600">{plan.monthlyRate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Rendement annuel</p>
                  <p className="text-3xl font-bold text-emerald-600">{plan.annualRate}</p>
                </div>
              </div>

              <button
                onClick={scrollToForm}
                className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors ${
                  plan.featured
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                <span>Ouvrir un compte</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="bg-emerald-100 rounded-lg p-3">
              <Calendar className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Durée flexible
              </h4>
              <p className="text-gray-600">
                Choisissez la durée qui vous convient : 3, 6 ou 12 mois
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-emerald-100 rounded-lg p-3">
              <TrendingUp className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Rendements garantis
              </h4>
              <p className="text-gray-600">
                Taux fixés à l'ouverture et garantis pendant toute la durée
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-emerald-100 rounded-lg p-3">
              <Lock className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Capital garanti
              </h4>
              <p className="text-gray-600">
                Votre capital est garanti et sécurisé pendant toute la durée
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}