import React from 'react';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function LegalNotice() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour à l'accueil
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Mentions légales</h1>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Informations légales</h2>
            <p className="text-gray-600">
              AMB AGENCE MICKAEL BUFFAZ (AMB) est une société par actions simplifiée au capital de 1 000 euros,
              immatriculée au Registre du Commerce et des Sociétés de Lyon sous le numéro 799 022 702.
            </p>
            <p className="text-gray-600 mt-4">
              Siège social : 14 RUE LUDOVIC BONIN, 69200 VENISSIEUX
              <br />
              Numéro de TVA intracommunautaire : FR44799022702
              <br />
              SIRET : 799 022 702 00010
              <br />
              Code NAF : 70.22Z - Conseil pour les affaires et autres conseils de gestion
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Direction de la publication</h2>
            <p className="text-gray-600">
              Directeur de la publication : M. Buffaz Mickael, en sa qualité de dirigeant
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Activité</h2>
            <p className="text-gray-600">
              Le conseil et l'assistance en matière de coaching et de ressources humaines ainsi que la formation du personnel desdites entreprises, notamment l'accompagnement des sportifs en matière de communication.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Hébergement</h2>
            <p className="text-gray-600">
              Le site est hébergé par Amazon Web Services (AWS)
              <br />
              Amazon Web Services LLC
              <br />
              P.O. Box 81226
              <br />
              Seattle, WA 98108-1226, USA
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Propriété intellectuelle</h2>
            <p className="text-gray-600">
              L'ensemble du contenu de ce site (structure, textes, logos, images, vidéos, etc.) est la propriété exclusive de AMB AGENCE MICKAEL BUFFAZ ou de ses partenaires. Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit est interdite sans l'autorisation écrite préalable de AMB AGENCE MICKAEL BUFFAZ.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Convention collective</h2>
            <p className="text-gray-600">
              Convention collective applicable : Bureaux d'études techniques, des cabinets d'ingénieurs-conseils et des sociétés de conseils (BET, SYNTEC) - IDCC 1486
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Protection des données</h2>
            <p className="text-gray-600">
              Les informations concernant la collecte et le traitement des données personnelles sont détaillées dans notre{' '}
              <Link to="/politique-confidentialite" className="text-emerald-600 hover:text-emerald-700">
                Politique de confidentialité
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Mise à jour</h2>
            <p className="text-gray-600">
              Dernière mise à jour RCS : 20/11/2024
              <br />
              Dernière mise à jour RNE : 20/11/2024
              <br />
              Dernière mise à jour INSEE : 20/11/2024
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}