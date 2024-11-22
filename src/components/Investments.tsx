import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, BarChart, DollarSign, Briefcase } from 'lucide-react';

export function Investments() {
  const investmentTypes = [
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Actions",
      description: "Investissez dans les plus grandes entreprises mondiales",
      yield: "8-12% en moyenne"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Obligations",
      description: "Placements sûrs avec revenus réguliers",
      yield: "4-6% par an"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Forex",
      description: "Marché des changes international",
      yield: "Variable"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "ETFs",
      description: "Fonds négociés en bourse diversifiés",
      yield: "6-10% en moyenne"
    }
  ];

  return (
    <section id="investments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Solutions d'investissement
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diversifiez votre portefeuille avec nos différentes options d'investissement
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {investmentTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-500 mb-4">
                {type.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {type.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {type.description}
              </p>
              <div className="bg-emerald-50 rounded-lg p-3">
                <p className="text-sm text-emerald-700 font-medium">
                  Rendement potentiel: {type.yield}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}