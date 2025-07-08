import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sophie M.",
      location: "Marseille",
      dogBreed: "Golden Retriever - Max",
      rating: 5,
      text: "Max adore sa nouvelle piscine ! Elle est vraiment solide, même avec ses griffes il n'arrive pas à la percer. Installation super facile, je recommande à 100%.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      verified: true
    },
    {
      name: "Thomas R.",
      location: "Lyon",
      dogBreed: "Berger Allemand - Rex",
      rating: 5,
      text: "Rex fait 35kg et la piscine taille L est parfaite ! Très résistante, facile à nettoyer. Excellent rapport qualité-prix, livraison ultra rapide.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
      verified: true
    },
    {
      name: "Marie L.",
      location: "Paris",
      dogBreed: "Labrador - Luna",
      rating: 5,
      text: "Luna se rafraîchit enfin pendant les canicules ! La piscine se range facilement dans le garage. Achat que je ne regrette absolument pas.",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
      verified: true
    },
    {
      name: "Pierre D.",
      location: "Toulouse",
      dogBreed: "Husky - Storm",
      rating: 5,
      text: "Storm est un husky qui supporte mal la chaleur. Cette piscine a changé nos étés ! Très solide, je la recommande vivement.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      verified: true
    },
    {
      name: "Julie B.",
      location: "Nice",
      dogBreed: "Border Collie - Bella",
      rating: 5,
      text: "Bella joue dans sa piscine tous les jours ! Très facile à monter et démonter. La qualité est au rendez-vous, rien à redire.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      verified: true
    },
    {
      name: "Antoine K.",
      location: "Bordeaux",
      dogBreed: "Rottweiler - Titan",
      rating: 5,
      text: "Titan fait 45kg et la piscine résiste parfaitement ! Excellent investissement pour l'été. Service client très réactif en plus.",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150",
      verified: true
    }
  ];

  return (
    <section id="temoignages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Plus de 500 propriétaires conquis
          </h2>
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="ml-2 text-lg font-semibold text-gray-900">4.9/5</span>
            <span className="ml-2 text-gray-600">(547 avis vérifiés)</span>
          </div>
          <p className="text-xl text-gray-600">
            Découvrez pourquoi tant de chiens adorent leur Paws Pool
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="flex items-center">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    {testimonial.verified && (
                      <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Vérifié
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  <p className="text-blue-600 text-sm font-medium">{testimonial.dogBreed}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="h-6 w-6 text-blue-200 mb-3" />
              <p className="text-gray-700 italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Section statistiques */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-500 mb-2">10,000+</div>
              <div className="text-gray-700">Chiens heureux</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-500 mb-2">4.9/5</div>
              <div className="text-gray-700">Note moyenne</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-500 mb-2">98%</div>
              <div className="text-gray-700">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-500 mb-2">24h</div>
              <div className="text-gray-700">Livraison moyenne</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;