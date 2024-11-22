import React from 'react';
import { motion } from 'framer-motion';
import { TypeForm } from './TypeForm';

export function ContactForm() {
  return (
    <section id="contact-form" className="py-20 bg-emerald-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Prenez rendez-vous avec nos experts
          </h2>
          
          <TypeForm formId="01JCDG7FNFDF61ZTYVR06FN0HJ" />
        </motion.div>
      </div>
    </section>
  );
}