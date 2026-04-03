import React from 'react';

const GreenBanner = () => (
  <section className="bg-[#23856D] text-white pt-20 md:pt-0">
    <div className="container mx-auto px-10 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 space-y-8 py-20">
        <h5 className="font-bold tracking-widest uppercase">SUMMER 2026</h5>
        <h2 className="text-5xl font-bold leading-tight">Vita Classic Product</h2>
        <p className="text-sm font-light max-w-xs">We know how large objects will act, We know how are objects will act, We know</p>
        <div className="flex items-center gap-8">
          <span className="text-2xl font-bold">$16.48</span>
          <button className="bg-[#2DC071] px-10 py-4 rounded font-bold uppercase">Add to Cart</button>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-end">
        <img src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800" className="h-[600px] object-contain pt-10" alt="Person"/>
      </div>
    </div>
  </section>
);

export default GreenBanner;