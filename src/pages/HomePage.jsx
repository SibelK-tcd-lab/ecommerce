import React from 'react';
import Hero from '../components/home/Hero';
import EditorsPick from '../components/home/EditorsPick';
import BestsellerProducts from '../components/home/BestsellerProducts';
import GreenBanner from '../components/home/GreenBanner';
import CoupleBanner from '../components/home/CoupleBanner';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <EditorsPick />
      <BestsellerProducts />
      <GreenBanner />
      <CoupleBanner />
    </main>
  );
};

export default HomePage;