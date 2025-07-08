import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Piscine pour chien Paws Pool",
      price: "89,99",
      originalPrice: "109,99",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 156,
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Balle interactive ultra-résistante",
      price: "24,99",
      originalPrice: "34,99",
      image: "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 203,
      badge: "Nouveau"
    },
    {
      id: 3,
      name: "Corde à mâcher premium",
      price: "19,99",
      originalPrice: "29,99",
      image: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      reviews: 89,
      badge: "Promo"
    }
  ];

  const addToCart = (productId: number) => {
    // Simulation d'ajout au panier
    alert(`Produit ${productId} ajouté au panier !`);
  };

  return (
    <section id="collection" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Notre collection premium
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez nos jouets les plus populaires, approuvés par des milliers de chiens
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.badge}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-900">
                      {product.rating}
                    </span>
                  </div>
                  <span className="ml-2 text-sm text-gray-500">
                    ({product.reviews} avis)
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-orange-500">
                      {product.price}€
                    </span>
                    <span className="ml-2 text-lg text-gray-500 line-through">
                      {product.originalPrice}€
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={() => addToCart(product.id)}
                  className="w-full bg-orange-500 text-white py-3 px-4 rounded-xl font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center group"
                >
                  <ShoppingCart className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Ajouter au panier
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Preuves de crédibilité
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">SSL</div>
                <div className="text-sm text-gray-600">Paiement 100% sécurisé</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">30j</div>
                <div className="text-sm text-gray-600">Garantie satisfait ou remboursé</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">10k+</div>
                <div className="text-sm text-gray-600">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">RGPD</div>
                <div className="text-sm text-gray-600">Données protégées</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;