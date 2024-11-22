import React from 'react';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour à l'accueil
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Collecte des données</h2>
            <p className="text-gray-600">
              Nous collectons les données suivantes :
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Données d'identification (nom, prénom, date de naissance)</li>
              <li>Coordonnées (adresse, email, téléphone)</li>
              <li>Données bancaires</li>
              <li>Données de connexion et de navigation</li>
              <li>Préférences d'investissement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Utilisation des données</h2>
            <p className="text-gray-600">
              Vos données sont utilisées pour :
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Gérer votre compte et vos investissements</li>
              <li>Personnaliser nos services</li>
              <li>Respecter nos obligations légales</li>
              <li>Améliorer nos services</li>
              <li>Vous informer sur nos produits</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Base légale du traitement</h2>
            <p className="text-gray-600">
              Nous traitons vos données sur les bases légales suivantes :
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Exécution du contrat</li>
              <li>Obligations légales</li>
              <li>Votre consentement</li>
              <li>Notre intérêt légitime</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Destinataires des données</h2>
            <p className="text-gray-600">
              Vos données peuvent être transmises à :
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Nos services internes</li>
              <li>Nos prestataires techniques</li>
              <li>Les autorités compétentes</li>
              <li>Nos partenaires (avec votre accord)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Durée de conservation</h2>
            <p className="text-gray-600">
              Nous conservons vos données pendant la durée nécessaire aux finalités poursuivies :
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Données de compte : durée de la relation commerciale + 5 ans</li>
              <li>Données de transaction : 10 ans</li>
              <li>Données de prospection : 3 ans</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Vos droits</h2>
            <p className="text-gray-600">
              Vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Droit d'accès</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition</li>
              <li>Droit à la limitation du traitement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Sécurité</h2>
            <p className="text-gray-600">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour assurer la sécurité de vos données :
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Chiffrement des données</li>
              <li>Contrôle des accès</li>
              <li>Surveillance continue</li>
              <li>Sauvegardes régulières</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact</h2>
            <p className="text-gray-600">
              Pour toute question concernant vos données personnelles :
              <br />
              Email : dpo@freedom24.fr
              <br />
              Adresse : 1 Avenue des Champs-Élysées, 75008 Paris
            </p>
          </section>
        </div>

        <p className="text-sm text-gray-500 mt-8 text-center">
          Dernière mise à jour : Mars 2024
        </p>
      </div>
      <Footer />
    </div>
  );
}