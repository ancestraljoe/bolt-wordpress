import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <ProductDetails />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;