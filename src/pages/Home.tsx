import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { SavingsPlans } from '../components/SavingsPlan';
import { LongTermPlans } from '../components/LongTermPlans';
import { Investments } from '../components/Investments';
import { Support } from '../components/Support';
import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';
import { CookieBanner } from '../components/CookieBanner';

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <SavingsPlans />
      <LongTermPlans />
      <Investments />
      <Support />
      <ContactForm />
      <Footer />
      <CookieBanner />
    </div>
  );
}