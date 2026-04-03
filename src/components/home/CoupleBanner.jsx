import React from 'react';

const CoupleBanner = () => (
  <section className="flex flex-col md:flex-row items-center px-10 py-24 gap-20 container mx-auto">
    <div className="md:w-1/2">
      <img src="https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Couple" className="rounded-lg"/>
    </div>
    <div className="md:w-1/2 space-y-8">
      <h5 className="text-[#BDBDBD] font-bold tracking-widest uppercase">SUMMER 2026</h5>
      <h2 className="text-5xl font-bold text-[#252B42] leading-tight uppercase">Part of the Neural Universe</h2>
      <p className="text-xl text-[#737373]">We know how large objects will act, but things on a small scale.</p>
      <div className="flex gap-4">
        <button className="bg-[#23A6F0] text-white px-10 py-4 rounded font-bold uppercase">Buy Now</button>
        <button className="border-2 border-[#23A6F0] text-[#23A6F0] px-10 py-4 rounded font-bold uppercase">Read More</button>
      </div>
    </div>
  </section>
);

export default CoupleBanner;