import React from 'react';
import TopHeader from "./components/layout/TopHeader.jsx";
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import EditorsPick from './components/home/EditorsPick';
import ProductCard from './components/common/ProductCard';
import GreenBanner from './components/home/GreenBanner';
import CoupleBanner from './components/home/CoupleBanner';
import Footer from './components/layout/Footer';

const App = () => {
  const products = [
    "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=500",
    "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=500",
    "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=500",
    "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=500",
    "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=500",
    "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=500",
    "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=500",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=500"
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <TopHeader />
      <Navbar />
      <Hero />
      <EditorsPick />
      <section className="py-24 container mx-auto px-10">
        <div className="text-center space-y-3 mb-16">
          <h4 className="text-xl text-[#737373] font-medium tracking-tight">Featured Products</h4>
          <h3 className="text-2xl font-bold uppercase text-[#252B42]">BESTSELLER PRODUCTS</h3>
          <p className="text-[#737373] text-sm">Problems trying to resolve the conflict between</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((img, i) => <ProductCard key={i} img={img} />)}
        </div>
      </section>
      <GreenBanner />
      <CoupleBanner />
      <Footer />
    </div>
  );
};

export default App;