import React from 'react';
import { Shield, Clock, Wallet, TrendingUp } from 'lucide-react';
import { AnimatedCard } from './AnimatedCard';
import { motion } from 'framer-motion';

export function Features() {
  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Accumulation quotidienne",
      description: "Vos intérêts sont calculés et crédités chaque jour sur votre compte."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sécurité garantie",
      description: "Vos investissements sont protégés par les plus hauts standards de sécurité."
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Retrait flexible",
      description: "Accédez à vos fonds quand vous le souhaitez, sans pénalités."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Taux attractifs",
      description: "Profitez de taux d'intérêt parmi les plus compétitifs du marché."
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Pourquoi choisir nos plans d'épargne ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions d'épargne adaptées à vos besoins avec des avantages uniques
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-500 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {feature.icon}
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}