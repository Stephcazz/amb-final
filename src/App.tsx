import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { LegalNotice } from './pages/LegalNotice';
import { TermsOfService } from './pages/TermsOfService';
import { CookiePolicy } from './pages/CookiePolicy';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { ThankYou } from './pages/ThankYou';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentions-legales" element={<LegalNotice />} />
        <Route path="/conditions-generales" element={<TermsOfService />} />
        <Route path="/politique-cookies" element={<CookiePolicy />} />
        <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
        <Route path="/merci" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;