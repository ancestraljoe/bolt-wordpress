import React from 'react';
import { ArrowRight, Star, Thermometer, Shield, Heart } from 'lucide-react';

const Hero = () => {
  const scrollToProduct = () => {
    document.getElementById('produit')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-cyan-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
                <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                <span className="text-sm font-medium text-gray-700">4.9/5 - Plus de 500 avis clients</span>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Piscine pour chien 
              <span className="text-blue-500"> Paws Pool</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              La piscine ultra-résistante qui garde votre chien au frais tout l'été. 
              Matériaux premium, installation facile, bonheur garanti !
            </p>

            <div className="flex items-center justify-center lg:justify-start space-x-6 mb-8">
              <div className="flex items-center">
                <Thermometer className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-sm font-medium">Rafraîchissement optimal</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-sm font-medium">Ultra-résistant</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-sm font-medium">Sécurisé</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button 
                onClick={scrollToProduct}
                className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center group text-lg"
              >
                Commander maintenant
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500">89,99€</div>
                  <div className="text-lg text-gray-500 line-through">109,99€</div>
                  <div className="text-sm text-green-600 font-semibold">Économisez 20€</div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm">
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">✓ Livraison 24h</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">✓ Garantie 30 jours</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">✓ Paiement sécurisé</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Chien golden retriever se rafraîchissant dans sa piscine Paws Pool"
                className="rounded-3xl shadow-2xl w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-lg">
                -18%
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-cyan-300 rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;