import React from 'react';

const Hero = () => (
  <section className="relative h-[716px] w-full flex items-center overflow-hidden bg-[#23A6F0]">
    <img 
      src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260" 
      className="absolute inset-0 w-full h-full object-cover"
      alt="Hero"
    />
    <div className="container mx-auto px-10 relative z-10 text-white space-y-8">
      <h5 className="font-bold tracking-widest uppercase text-base">SUMMER 2026</h5>
      <h1 className="text-6xl md:text-7xl font-bold max-w-xl leading-tight">NEW COLLECTION</h1>
      <p className="text-xl max-w-md font-medium">We know how large objects will act, but things on a small scale.</p>
      <button className="bg-[#2DC071] px-12 py-4 rounded-md font-bold text-2xl uppercase">Shop Now</button>
    </div>
  </section>
);

export default Hero;