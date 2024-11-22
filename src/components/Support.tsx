import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export function Support() {
  const scrollToForm = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      description: "Disponible du lundi au vendredi",
      contact: "06 95 82 83 05"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "Réponse sous 24h",
      contact: "contact@amb-buffaz.com"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Contactez-nous",
      description: "Réponse rapide",
      contact: "Nous contacter",
      action: scrollToForm
    }
  ];

  return (
    <section id="support" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Support client
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center flex flex-col items-center justify-between h-full"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 mb-6">
                {method.icon}
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {method.description}
                </p>
              </div>
              {method.action ? (
                <button
                  onClick={method.action}
                  className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                >
                  {method.contact}
                </button>
              ) : (
                <p className="text-emerald-600 font-semibold">
                  {method.contact}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Questions fréquentes
          </h3>
          <div className="space-y-6">
            {[
              {
                q: "Comment ouvrir un compte ?",
                a: "Remplissez simplement le formulaire en ligne et suivez les instructions. L'ouverture de compte est gratuite et prend moins de 5 minutes."
              },
              {
                q: "Quels sont les délais de retrait ?",
                a: "Les retraits sont traités sous 24h ouvrées pour les comptes journaliers. Pour les plans à terme, le délai dépend de la durée choisie."
              },
              {
                q: "Mes investissements sont-ils garantis ?",
                a: "Oui, votre capital est garanti. Nous sommes régulés par les autorités financières et adhérons aux normes de sécurité les plus strictes."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.q}
                </h4>
                <p className="text-gray-600">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}