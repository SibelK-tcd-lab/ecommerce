import React from 'react';

const ProductCard = ({ img }) => (
  <div className="bg-white">
    <div className="h-[420px] mb-6 overflow-hidden">
      <img src={img} className="w-full h-full object-cover" alt="Product"/>
    </div>
    <div className="text-center px-4 pb-8 space-y-2">
      <h5 className="font-bold text-[#252B42]">Graphic Design</h5>
      <p className="text-[#737373] text-sm font-bold">English Department</p>
      <div className="flex justify-center gap-2 font-bold">
        <span className="text-[#BDBDBD]">$16.48</span>
        <span className="text-[#23856D]">$6.48</span>
      </div>
      <div className="flex justify-center gap-1.5 pt-2">
        <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
        <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
        <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
        <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
      </div>
    </div>
  </div>
);

export default ProductCard;