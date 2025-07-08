import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Quelle taille de piscine choisir pour mon chien ?",
      answer: "Taille S (80cm) : chiens jusqu'à 15kg (Jack Russell, Beagle). Taille M (120cm) : chiens de 15-30kg (Labrador, Golden). Taille L (160cm) : chiens de 30kg+ (Berger Allemand, Rottweiler). En cas de doute, prenez la taille supérieure."
    },
    {
      question: "La piscine résiste-t-elle vraiment aux griffes ?",
      answer: "Oui ! Notre PVC renforcé de 0.6mm d'épaisseur résiste aux griffes les plus acérées. Nous avons testé avec plus de 1000 chiens de toutes races. Si votre chien perce la piscine dans les 30 premiers jours, nous la remplaçons gratuitement."
    },
    {
      question: "Combien de temps faut-il pour l'installer ?",
      answer: "L'installation prend moins de 2 minutes ! Il suffit de déplier la piscine et de la remplir d'eau. Aucun outil nécessaire. Parfait pour les vacances, le camping ou une utilisation quotidienne dans le jardin."
    },
    {
      question: "Comment nettoyer et entretenir la piscine ?",
      answer: "Très simple : videz l'eau, rincez à l'eau claire et laissez sécher avant de ranger. Pour un nettoyage approfondi, utilisez un savon doux. La piscine se plie facilement pour un rangement compact."
    },
    {
      question: "La livraison est-elle vraiment gratuite et en 24h ?",
      answer: "Oui ! Livraison gratuite en 24h partout en France métropolitaine. Nous expédions le jour même si vous commandez avant 14h. Suivi de colis inclus pour suivre votre livraison en temps réel."
    },
    {
      question: "Que faire si mon chien n'aime pas sa piscine ?",
      answer: "Nous offrons une garantie satisfait ou remboursé de 30 jours. Si votre chien ne s'adapte pas à sa piscine, retournez-la nous et nous vous remboursons intégralement, sans poser de questions."
    },
    {
      question: "La piscine peut-elle rester dehors en permanence ?",
      answer: "La piscine résiste aux UV et aux intempéries, mais nous recommandons de la vider et la ranger en cas d'absence prolongée ou de gel. Cela prolonge sa durée de vie et évite la stagnation de l'eau."
    },
    {
      question: "Y a-t-il des frais cachés ou des abonnements ?",
      answer: "Aucun frais caché ! Le prix affiché inclut la piscine, la livraison gratuite et la garantie 30 jours. Paiement unique, aucun abonnement. Paiement 100% sécurisé par SSL."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-xl text-gray-600">
            Tout ce que vous devez savoir sur la Piscine Paws Pool
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="mt-16 text-center">
          <div className="bg-blue-500 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Une question ? Contactez-nous !
            </h3>
            <p className="text-blue-100 mb-6">
              Notre équipe répond en moins de 2h du lundi au vendredi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0123456789" 
                className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                📞 01 23 45 67 89
              </a>
              <a 
                href="mailto:contact@pawspool.com" 
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                ✉️ contact@pawspool.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;