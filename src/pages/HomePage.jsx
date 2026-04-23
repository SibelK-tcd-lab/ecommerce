import React from 'react';
import Hero from '../components/home/Hero';
import EditorsPick from '../components/home/EditorsPick';
import BestsellerProducts from '../components/home/BestsellerProducts';
import GreenBanner from '../components/home/GreenBanner';
import CoupleBanner from '../components/home/CoupleBanner';
// IMPORT BURADA: Eğer dosyanın adı ProductCard.jsx ise bu çalışacaktır.
import ProductCard from '../components/ProductCard.jsx'; 

const HomePage = () => {
  const featuredProducts = [
    { 
      id: 6, 
      title: "Structured Blazer", 
      dept: "English Department", 
      img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg", 
      oldPrice: "$16.48", 
      newPrice: "$6.48", 
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away." 
    },
    { 
      id: 7, 
      title: "Vintage Blazer Jacket", 
      dept: "English Department", 
      img: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg", 
      oldPrice: "$16.48", 
      newPrice: "$6.48", 
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away." 
    }
  ];

  return (
    <main className="w-full">
      <Hero />
      <div className="px-6 md:px-0"><EditorsPick /></div>
      <div className="px-6 md:px-0"><BestsellerProducts /></div>
      <div className="px-6 md:px-0"><GreenBanner /></div>
      <div className="px-6 md:px-0"><CoupleBanner /></div>

      <section className="container mx-auto px-6 py-20 bg-white">
        <div className="text-center mb-16">
          <h6 className="text-[#23A6F0] font-bold text-sm tracking-widest uppercase mb-2">Practice Advice</h6>
          <h2 className="text-4xl font-bold text-[#252B42]">Featured Products</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;