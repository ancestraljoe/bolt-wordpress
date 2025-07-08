import React from 'react';
import { Waves, ShoppingCart, Phone } from 'lucide-react';

const Header = () => {
  const scrollToProduct = () => {
    document.getElementById('produit')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Waves className="h-8 w-8 text-blue-500 mr-2" />
            <span className="text-2xl font-bold text-gray-900">Paws Pool</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={scrollToProduct}
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              Le produit
            </button>
            <a href="#avantages" className="text-gray-700 hover:text-blue-500 transition-colors">
              Avantages
            </a>
            <a href="#temoignages" className="text-gray-700 hover:text-blue-500 transition-colors">
              Témoignages
            </a>
            <a href="#faq" className="text-gray-700 hover:text-blue-500 transition-colors">
              FAQ
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center text-sm text-gray-600">
              <Phone className="h-4 w-4 mr-1" />
              <span>01 23 45 67 89</span>
            </div>
            <button 
              onClick={scrollToProduct}
              className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition-colors flex items-center"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Commander
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;