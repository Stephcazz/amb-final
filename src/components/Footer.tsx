import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} AMB AGENCE MICKAEL BUFFAZ. Tous droits réservés.
          </p>
          <nav>
            <ul className="flex flex-wrap justify-center gap-4 text-sm">
              <li>
                <Link 
                  to="/mentions-legales" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link 
                  to="/politique-confidentialite" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link 
                  to="/conditions-generales" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  CGU
                </Link>
              </li>
              <li>
                <Link 
                  to="/politique-cookies" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}