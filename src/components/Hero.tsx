import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { motion } from 'framer-motion';
import { TypeForm } from './TypeForm';

export function Hero() {
  const stats = [
    { label: "Années d'expérience", value: "10+" },
    { label: "Clients satisfaits", value: "500+" },
    { label: "Projets réussis", value: "1000+" },
  ];

  const scrollToForm = (formId: string) => {
    const element = document.getElementById(formId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-emerald-50 to-white py-8 sm:py-12 lg:py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Conseil, Coaching et Accompagnement Professionnel
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8">
              Expertise en coaching, ressources humaines et communication pour sportifs et entreprises. Développez votre potentiel avec AMB.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToForm('contact-form')}
                className="bg-emerald-500 text-white px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors flex items-center justify-center text-sm sm:text-base"
              >
                Commencer maintenant
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button 
                onClick={() => scrollToForm('contact-form')}
                className="border-2 border-gray-900 text-gray-900 px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors text-sm sm:text-base"
              >
                En savoir plus
              </button>
            </div>
            <div className="mt-6 sm:mt-8 lg:mt-12 grid grid-cols-3 gap-3 sm:gap-6">
              {stats.map((stat, index) => (
                <AnimatedCounter key={index} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="absolute -top-4 -right-4 z-10 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 cursor-pointer"
              onClick={() => scrollToForm('contact-form')}
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full shadow-lg" />
                <div className="absolute inset-1 bg-white rounded-full" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xs font-medium text-emerald-600">Livret+</span>
                  <span className="text-base sm:text-lg lg:text-xl font-bold text-emerald-600">7,35%</span>
                </div>
                
                <motion.div
                  className="absolute inset-0 bg-emerald-400 rounded-full blur-xl opacity-30"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.2, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>

            <div className="relative bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-6">Contactez-nous</h2>
              <TypeForm formId="01JCDG7FNFDF61ZTYVR06FN0HJ" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}