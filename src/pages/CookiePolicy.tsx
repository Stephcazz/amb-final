import React from 'react';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour à l'accueil
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de Cookies</h1>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Qu'est-ce qu'un cookie ?</h2>
            <p className="text-gray-600">
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette ou mobile) lors de la visite d'un site web. Il permet au site de mémoriser des informations sur votre visite, comme votre langue préférée et d'autres paramètres.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Types de cookies utilisés</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Cookies essentiels</h3>
                <p className="text-gray-600">
                  Nécessaires au fonctionnement du site, ils ne peuvent pas être désactivés.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Cookies analytiques</h3>
                <p className="text-gray-600">
                  Nous permettent de comprendre comment les visiteurs interagissent avec le site.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Cookies de personnalisation</h3>
                <p className="text-gray-600">
                  Permettent de mémoriser vos préférences pour personnaliser votre expérience.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Cookies publicitaires</h3>
                <p className="text-gray-600">
                  Utilisés pour vous proposer des publicités pertinentes.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Durée de conservation</h2>
            <p className="text-gray-600">
              Les cookies peuvent être conservés pour différentes durées :
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Cookies de session : supprimés à la fermeture du navigateur</li>
              <li>Cookies persistants : jusqu'à 13 mois maximum</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Gestion des cookies</h2>
            <p className="text-gray-600">
              Vous pouvez à tout moment modifier vos préférences en matière de cookies :
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Via le bandeau cookies présent sur notre site</li>
              <li>En paramétrant votre navigateur</li>
              <li>En utilisant les liens de désactivation spécifiques des cookies tiers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Impact du refus des cookies</h2>
            <p className="text-gray-600">
              Le refus d'certains cookies peut impacter votre expérience sur le site :
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Impossibilité de personnaliser l'interface</li>
              <li>Certaines fonctionnalités peuvent être limitées</li>
              <li>Les publicités seront moins pertinentes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Mise à jour</h2>
            <p className="text-gray-600">
              Cette politique de cookies peut être mise à jour à tout moment. La date de dernière mise à jour est indiquée en bas de page.
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