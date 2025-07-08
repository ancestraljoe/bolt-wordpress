import React, { useState } from 'react';
import { ShoppingCart, Star, Truck, Shield, CreditCard, CheckCircle, Ruler, Droplets } from 'lucide-react';

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  const sizes = [
    { size: 'S', dimensions: '80cm x 20cm', price: '69,99€', originalPrice: '89,99€', suitable: 'Petits chiens (jusqu\'à 15kg)' },
    { size: 'M', dimensions: '120cm x 30cm', price: '89,99€', originalPrice: '109,99€', suitable: 'Chiens moyens (15-30kg)' },
    { size: 'L', dimensions: '160cm x 40cm', price: '119,99€', originalPrice: '149,99€', suitable: 'Grands chiens (30kg+)' }
  ];

  const currentSize = sizes.find(s => s.size === selectedSize);

  const addToCart = () => {
    alert(`Piscine Paws Pool taille ${selectedSize} ajoutée au panier ! Quantité: ${quantity}`);
  };

  return (
    <section id="produit" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Images du produit */}
          <div className="space-y-4">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Piscine pour chien Paws Pool - Vue principale"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                En stock
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <img 
                src="https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=200" 
                alt="Détail matériau résistant"
                className="w-full h-24 object-cover rounded-lg"
              />
              <img 
                src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=200" 
                alt="Chien dans la piscine"
                className="w-full h-24 object-cover rounded-lg"
              />
              <img 
                src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=200" 
                alt="Installation facile"
                className="w-full h-24 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Détails du produit */}
          <div>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-lg font-semibold text-gray-900">4.9/5</span>
              <span className="ml-2 text-gray-600">(547 avis)</span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Piscine pour chien Paws Pool
            </h1>

            <p className="text-lg text-gray-600 mb-6">
              La piscine parfaite pour rafraîchir votre compagnon ! Fabriquée en PVC ultra-résistant, 
              elle résiste aux griffes et aux morsures. Installation en 2 minutes, pliable pour un rangement facile.
            </p>

            {/* Sélection de taille */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Choisissez votre taille :</h3>
              <div className="grid grid-cols-1 gap-3">
                {sizes.map((size) => (
                  <div 
                    key={size.size}
                    onClick={() => setSelectedSize(size.size)}
                    className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                      selectedSize === size.size 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="flex items-center">
                          <span className="font-semibold text-lg">Taille {size.size}</span>
                          <span className="ml-2 text-gray-600">({size.dimensions})</span>
                        </div>
                        <div className="text-sm text-gray-600">{size.suitable}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-blue-500">{size.price}</div>
                        <div className="text-sm text-gray-500 line-through">{size.originalPrice}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prix et quantité */}
            <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-xl">
              <div>
                <div className="text-3xl font-bold text-blue-500">{currentSize?.price}</div>
                <div className="text-lg text-gray-500 line-through">{currentSize?.originalPrice}</div>
                <div className="text-sm text-green-600 font-semibold">Économisez 20€</div>
              </div>
              <div className="flex items-center space-x-3">
                <label className="text-sm font-medium text-gray-700">Quantité:</label>
                <select 
                  value={quantity} 
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border border-gray-300 rounded-lg px-3 py-2"
                >
                  {[1,2,3,4,5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Bouton d'achat */}
            <button
              onClick={addToCart}
              className="w-full bg-blue-500 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-blue-600 transition-colors flex items-center justify-center group mb-6"
            >
              <ShoppingCart className="h-6 w-6 mr-2 group-hover:scale-110 transition-transform" />
              Ajouter au panier - {currentSize?.price}
            </button>

            {/* Garanties */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <Truck className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm">Livraison 24h gratuite</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm">Garantie 30 jours</span>
              </div>
              <div className="flex items-center">
                <CreditCard className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm">Paiement sécurisé SSL</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-sm">Satisfait ou remboursé</span>
              </div>
            </div>

            {/* Caractéristiques */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Caractéristiques principales :</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Droplets className="h-5 w-5 text-blue-500 mr-3" />
                  <span>Matériau PVC ultra-résistant aux griffes</span>
                </div>
                <div className="flex items-center">
                  <Ruler className="h-5 w-5 text-blue-500 mr-3" />
                  <span>Dimensions: {currentSize?.dimensions}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                  <span>Installation en 2 minutes sans outils</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                  <span>Pliable et facile à ranger</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                  <span>Fond antidérapant pour la sécurité</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;