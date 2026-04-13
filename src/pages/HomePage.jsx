import React from 'react';
import Hero from '../components/home/Hero';
import EditorsPick from '../components/home/EditorsPick';
import BestsellerProducts from '../components/home/BestsellerProducts';
import GreenBanner from '../components/home/GreenBanner';
import CoupleBanner from '../components/home/CoupleBanner';

const HomePage = () => {
  return (
    <main className="w-full">
      {/* Hero genellikle tam genişlikte olur, o yüzden ona dokunmuyoruz */}
      <Hero />

      {/* Aşağıdaki bölümlerin hepsine mobilde px-6, masaüstünde px-0 (veya kendi içindeki px-20) 
        boşluğunu HomePage üzerinden birer div ile verebiliriz.
      */}
      
      <div className="px-6 md:px-0">
        <EditorsPick />
      </div>

      <div className="px-6 md:px-0">
        <BestsellerProducts />
      </div>

      {/* Bannerlar genellikle renkli arka planlı olduğu için içlerindeki 
          container'lara müdahale etmek daha doğrudur, ama hızlı çözüm için: */}
      <div className="px-6 md:px-0">
        <GreenBanner />
      </div>

      <div className="px-6 md:px-0">
        <CoupleBanner />
      </div>
    </main>
  );
};

export default HomePage;