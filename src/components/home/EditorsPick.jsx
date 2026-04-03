import React from 'react';

const EditorsPick = () => (
  <section className="py-20 bg-[#FAFAFA]">
    <div className="text-center mb-12">
      <h2 className="text-2xl font-bold mb-2 uppercase text-[#252B42]">EDITOR'S PICK</h2>
      <p className="text-[#737373]">Problems trying to resolve the conflict between</p>
    </div>
    <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-8 h-[500px]">
      <div className="md:col-span-2 relative">
        <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover" alt="Men"/>
        <button className="absolute bottom-6 left-6 bg-white px-12 py-3 font-bold uppercase text-[#252B42]">Men</button>
      </div>
      <div className="relative">
        <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover" alt="Women"/>
        <button className="absolute bottom-6 left-6 bg-white px-10 py-3 font-bold uppercase text-[#252B42]">Women</button>
      </div>
      <div className="flex flex-col gap-4 text-[#252B42]">
        <div className="h-1/2 relative">
          <img src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=400" className="w-full h-full object-cover" alt="Accessories"/>
          <button className="absolute bottom-6 left-6 bg-white px-4 py-2 font-bold uppercase text-xs">Accessories</button>
        </div>
        <div className="h-1/2 relative">
          <img src="https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=400" className="w-full h-full object-cover" alt="Kids"/>
          <button className="absolute bottom-6 left-6 bg-white px-8 py-2 font-bold uppercase text-xs">Kids</button>
        </div>
      </div>
    </div>
  </section>
);

export default EditorsPick;