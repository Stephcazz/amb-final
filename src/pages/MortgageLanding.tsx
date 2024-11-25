import React from 'react';
import { motion } from 'framer-motion';
import { Home, Calculator, PiggyBank, ArrowRight, Clock, Shield, BadgeCheck, CheckCircle, Building2, Landmark } from 'lucide-react';
import { Footer } from '../components/Footer';
import { CookieBanner } from '../components/CookieBanner';
import { TypeForm } from '../components/TypeForm';

export function MortgageLanding() {
  const features = [
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Simulation gratuite",
      description: "Obtenez une simulation personnalisée de votre crédit immobilier en quelques minutes"
    },
    {
      icon: <PiggyBank className="w-6 h-6" />,
      title: "Meilleurs taux",
      description: "Nous négocions pour vous les meilleurs taux auprès de nos partenaires bancaires"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Réponse rapide",
      description: "Recevez une réponse de principe sous 24h ouvrées"
    }
  ];

  const advantages = [
    {
      title: "Accompagnement personnalisé",
      description: "Un expert dédié vous accompagne tout au long de votre projet",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80"
    },
    {
      title: "0€ de frais de dossier",
      description: "Aucun frais de dossier à payer, notre service est gratuit",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
    },
    {
      title: "Partenaires de confiance",
      description: "Un réseau de banques et assurances partenaires de premier plan",
      image: "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?auto=format&fit=crop&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Marie L.",
      role: "Primo-accédante",
      content: "Un accompagnement exceptionnel du début à la fin. J'ai pu obtenir un taux très avantageux pour mon premier achat.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
      name: "Thomas B.",
      role: "Investisseur",
      content: "Déjà mon troisième investissement avec eux. Une équipe professionnelle qui comprend vraiment nos besoins.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Taux à partir de 3,85% sur 20 ans
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Réalisez votre projet immobilier aux meilleures conditions
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Profitez d'un accompagnement sur-mesure et des taux négociés pour concrétiser votre achat immobilier en toute sérénité.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#simulation" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
                    Simuler mon crédit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                  <a href="#avantages" className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors">
                    Nos avantages
                  </a>
                </div>
              </motion.div>

              <div className="mt-12 grid grid-cols-3 gap-6">
                {[
                  { value: "15+", label: "Banques partenaires", icon: <Landmark className="w-4 h-4" /> },
                  { value: "2000+", label: "Projets financés", icon: <Building2 className="w-4 h-4" /> },
                  { value: "98%", label: "Clients satisfaits", icon: <CheckCircle className="w-4 h-4" /> }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center"
                  >
                    <div className="flex justify-center text-blue-600 mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-xl p-6 lg:p-8"
                id="simulation"
              >
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                  Réponse en 24h
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Simulez votre crédit</h2>
                <TypeForm formId="01JDHHE44PPC5H74YXQQFNY6W4" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">Nos services</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi choisir notre service ?
            </h2>
            <p className="text-xl text-gray-600">
              Un accompagnement expert pour votre crédit immobilier
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="avantages" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">Nos avantages</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ce qui nous différencie
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={advantage.image} 
                    alt={advantage.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <BadgeCheck className="w-6 h-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {advantage.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {advantage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">Témoignages</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ils nous font confiance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  );
}
