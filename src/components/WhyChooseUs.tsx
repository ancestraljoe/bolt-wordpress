import React from 'react';
import { Shield, Droplets, Clock, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Ultra-résistant",
      description: "PVC renforcé qui résiste aux griffes les plus acérées et aux morsures. Testé par plus de 1000 chiens."
    },
    {
      icon: Droplets,
      title: "Étanche parfait",
      description: "Soudures haute qualité garantissant une étanchéité parfaite. Aucune fuite même après des mois d'utilisation."
    },
    {
      icon: Clock,
      title: "Installation 2 min",
      description: "Déployez votre piscine en moins de 2 minutes. Aucun outil requis, parfait pour les vacances ou le jardin."
    },
    {
      icon: Award,
      title: "Approuvé vétérinaires",
      description: "Recommandé par des vétérinaires pour l'exercice aquatique et la rééducation des articulations."
    }
  ];

  return (
    <section id="avantages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi choisir la Paws Pool ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La piscine pour chien la plus vendue en France. Plus de 10 000 chiens heureux 
            se rafraîchissent déjà avec notre piscine premium.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center group hover:shadow-xl transition-shadow">
              <div className="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors">
                <feature.icon className="h-10 w-10 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Section comparaison */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Paws Pool vs Piscines classiques
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4">Caractéristique</th>
                  <th className="text-center py-4 px-4 text-blue-500 font-bold">Paws Pool</th>
                  <th className="text-center py-4 px-4 text-gray-500">Piscines classiques</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-4">Résistance aux griffes</td>
                  <td className="text-center py-4 px-4 text-green-500 font-bold">✓ Ultra-résistant</td>
                  <td className="text-center py-4 px-4 text-red-500">✗ Se perce facilement</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Installation</td>
                  <td className="text-center py-4 px-4 text-green-500 font-bold">✓ 2 minutes</td>
                  <td className="text-center py-4 px-4 text-red-500">✗ 30+ minutes</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Rangement</td>
                  <td className="text-center py-4 px-4 text-green-500 font-bold">✓ Pliable compact</td>
                  <td className="text-center py-4 px-4 text-red-500">✗ Encombrant</td>
                </tr>
                <tr>
                  <td className="py-4 px-4">Garantie</td>
                  <td className="text-center py-4 px-4 text-green-500 font-bold">✓ 30 jours</td>
                  <td className="text-center py-4 px-4 text-red-500">✗ Aucune</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;