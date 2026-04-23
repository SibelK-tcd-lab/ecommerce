// src/components/ProductCard.jsx
import React from 'react';
import { Heart, ShoppingCart, Eye, Star, Clock, BookOpen, BarChart2, ChevronRight } from 'lucide-react';

const ProductCard = ({ product }) => {
  if (!product) return null;
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-sm border border-[#EBEBEB] overflow-hidden hover:shadow-md transition-all">
      <div className="relative w-full md:w-[45%] h-[300px] md:h-auto">
        <img src={product.img} alt={product.title} className="w-full h-full object-cover" />
        <span className="absolute top-4 left-4 bg-[#E74040] text-white text-xs font-bold px-3 py-1 rounded-sm shadow-sm">Sale</span>
      </div>
      <div className="w-full md:w-[55%] p-6 flex flex-col justify-between">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[#23A6F0] text-sm font-bold">{product.dept}</span>
          <div className="flex items-center gap-1 bg-[#252B42] text-white px-2 py-1 rounded-full text-xs">
            <Star size={12} className="text-[#FFCE31] fill-[#FFCE31]" />
            <span>4.9</span>
          </div>
        </div>
        <h3 className="text-[#252B42] text-lg font-bold mb-2">{product.title}</h3>
        <p className="text-[#737373] text-sm mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[#BDBDBD] font-bold line-through">{product.oldPrice}</span>
          <span className="text-[#23856D] font-bold text-lg">{product.newPrice}</span>
        </div>
        <button className="flex items-center gap-2 border border-[#23A6F0] text-[#23A6F0] font-bold py-2 px-5 rounded-full hover:bg-[#23A6F0] hover:text-white transition-all w-fit">
          Learn More <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;