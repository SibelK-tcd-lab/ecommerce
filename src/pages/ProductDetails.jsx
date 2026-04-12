import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { allProducts } from '../data/productData';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = allProducts.find((p) => p.id === Number(productId));
  const [size, setSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("");

  if (!product) return <div className="py-20 text-center font-bold text-2xl">Product not found!</div>;

  return (
    <div className="container mx-auto py-12 px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="overflow-hidden rounded-lg group shadow-sm border">
          <img src={product.img} className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110" alt={product.title} />
        </div>
        
        <div className="flex flex-col space-y-6">
          <h1 className="text-3xl font-bold text-[#252B42]">{product.title}</h1>
          
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400 text-sm">
               {[...Array(5)].map((_, i) => (<i key={i} className="fa-solid fa-star"></i>))}
            </div>
            <span className="text-[#737373] font-bold">({product.reviews} Reviews)</span>
          </div>

          <div className="flex gap-4 text-2xl font-bold">
            <span className="text-[#BDBDBD] line-through">{product.oldPrice}</span>
            <span className="text-[#23856D]">{product.newPrice}</span>
          </div>

          <p className="text-[#858585] leading-relaxed text-lg">{product.description}</p>
          <hr />

          <div className="space-y-4">
            <h5 className="font-bold text-[#252B42]">Select Color:</h5>
            <div className="flex gap-3">
              {["#23A6F0", "#23856D", "#E77C40", "#252B42", "#808000", "#FFD700"].map((c, i) => (
                <button 
                  key={i} 
                  onClick={() => setSelectedColor(c)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor === c ? 'ring-2 ring-offset-2 ring-blue-400' : ''}`} 
                  style={{backgroundColor: c}} 
                />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h5 className="font-bold text-[#252B42]">Select Size:</h5>
            <div className="flex gap-2">
              {["S", "M", "L", "XL"].map((s) => (
                <button key={s} onClick={() => setSize(s)} className={`w-12 h-10 border font-bold transition-all ${size === s ? 'bg-[#23A6F0] text-white border-[#23A6F0]' : 'hover:bg-gray-50'}`}>{s}</button>
              ))}
            </div>
          </div>

          <button className="bg-[#23A6F0] text-white py-4 px-10 rounded-md font-bold hover:shadow-xl transition-all active:scale-95 w-full md:w-fit uppercase mt-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;