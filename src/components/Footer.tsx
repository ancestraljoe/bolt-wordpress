import React from 'react';
import { Waves, Mail, Phone, MapPin, Shield, Truck, CreditCard } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToProduct = () => {
    document.getElementById('produit')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section principale */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Waves className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-2xl font-bold">Paws Pool</span>
            </div>
            <p className="text-gray-400 mb-4">
              La piscine pour chien la plus résistante du marché. 
              Plus de 10 000 chiens heureux en France.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                YouTube
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Produit</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={scrollToProduct}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Piscine Paws Pool
                </button>
              </li>
              <li><a href="#avantages" className="text-gray-400 hover:text-blue-400 transition-colors">Avantages</a></li>
              <li><a href="#temoignages" className="text-gray-400 hover:text-blue-400 transition-colors">Témoignages</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-blue-400 transition-colors">Questions fréquentes</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Service client</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Suivi de commande</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Retours & échanges</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Garantie 30 jours</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Guide d'utilisation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-400">contact@pawspool.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-400">01 23 45 67 89</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-400">Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        {/* Garanties */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center md:justify-start">
              <Truck className="h-6 w-6 text-blue-400 mr-3" />
              <div>
                <div className="font-semibold">Livraison 24h gratuite</div>
                <div className="text-sm text-gray-400">Partout en France</div>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Shield className="h-6 w-6 text-blue-400 mr-3" />
              <div>
                <div className="font-semibold">Garantie 30 jours</div>
                <div className="text-sm text-gray-400">Satisfait ou remboursé</div>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <CreditCard className="h-6 w-6 text-blue-400 mr-3" />
              <div>
                <div className="font-semibold">Paiement sécurisé</div>
                <div className="text-sm text-gray-400">SSL 256 bits</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 mb-4">
            © {currentYear} Paws Pool. Tous droits réservés. |{' '}
            <a href="#" className="hover:text-blue-400 transition-colors">
              Politique de confidentialité RGPD
            </a>
            {' '}|{' '}
            <a href="#" className="hover:text-blue-400 transition-colors">
              Conditions générales
            </a>
            {' '}|{' '}
            <a href="#" className="hover:text-blue-400 transition-colors">
              Mentions légales
            </a>
          </p>
          
          <button 
            onClick={scrollToTop}
            className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition-colors"
          >
            ↑ Retour en haut
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;