import React from 'react';
import { Link } from 'react-router-dom';
import { allProducts } from '../data/productData'; 
import { ChevronRight } from 'lucide-react';

const ShopPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#FAFAFA] py-12 border-b">
        <div className="container mx-auto px-4 md:px-20 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[#252B42]">Mağaza</h2>
          <nav className="flex items-center gap-2 text-sm font-bold">
            <Link to="/" className="text-[#252B42]">Home</Link>
            <ChevronRight size={16} className="text-[#BDBDBD]" />
            <span className="text-[#BDBDBD]">Shop</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-20 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {allProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="group flex flex-col items-center">
              <div className="w-full aspect-[3/4] overflow-hidden rounded-lg mb-4 bg-gray-100 shadow-sm">
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-bold text-[#252B42] text-center">{product.title}</h3>
              <p className="text-[#737373] text-sm font-bold my-2">{product.dept}</p>
              <div className="flex gap-2 font-bold">
                <span className="text-[#BDBDBD] line-through">{product.oldPrice}</span>
                <span className="text-[#23856D]">{product.newPrice}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;