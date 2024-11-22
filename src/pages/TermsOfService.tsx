import React from 'react';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour à l'accueil
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Conditions Générales d'Utilisation</h1>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Objet</h2>
            <p className="text-gray-600">
              Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités et conditions dans lesquelles Freedom24 met à la disposition des utilisateurs ses services d'épargne et d'investissement, ainsi que les droits et obligations des parties dans ce cadre.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Acceptation des CGU</h2>
            <p className="text-gray-600">
              L'utilisation des services de Freedom24 implique l'acceptation pleine et entière des présentes CGU. Ces conditions peuvent être modifiées à tout moment par Freedom24. Les utilisateurs seront informés de toute modification par email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Services proposés</h2>
            <p className="text-gray-600">
              Freedom24 propose des services d'épargne et d'investissement, incluant :
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Plans d'épargne journaliers</li>
              <li>Plans d'épargne à long terme</li>
              <li>Investissements en actions et obligations</li>
              <li>Services de conseil en investissement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Conditions d'accès</h2>
            <p className="text-gray-600">
              Pour accéder aux services, l'utilisateur doit :
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Être majeur et juridiquement capable</li>
              <li>Résider dans un pays éligible</li>
              <li>Fournir des informations exactes et complètes</li>
              <li>Respecter les conditions de montant minimum d'investissement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Responsabilités</h2>
            <p className="text-gray-600">
              Freedom24 s'engage à fournir ses services avec diligence et selon les règles de l'art, étant précisé qu'il pèse sur elle une obligation de moyens, à l'exclusion de toute obligation de résultat.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Protection des données</h2>
            <p className="text-gray-600">
              Le traitement des données personnelles est détaillé dans notre{' '}
              <Link to="/politique-confidentialite" className="text-emerald-600 hover:text-emerald-700">
                Politique de confidentialité
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Résiliation</h2>
            <p className="text-gray-600">
              Freedom24 se réserve le droit de résilier l'accès aux services en cas de :
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Non-respect des présentes CGU</li>
              <li>Fourniture d'informations erronées</li>
              <li>Utilisation frauduleuse des services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Loi applicable et juridiction</h2>
            <p className="text-gray-600">
              Les présentes CGU sont régies par le droit français. Tout litige relatif à leur interprétation ou leur exécution relève de la compétence exclusive des tribunaux français.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}