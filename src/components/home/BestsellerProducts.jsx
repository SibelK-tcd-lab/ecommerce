import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../common/ProductCard.jsx';
// MERKEZİ VERİYİ BURADAN ÇEKİYORUZ
import { allProducts } from '../../data/productData.js'; 

const BestsellerProducts = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-20 container mx-auto bg-white rounded-3xl my-10">
      <div className="text-center mb-16">
        <h4 className="text-[#737373] text-xl mb-2 font-medium">Featured Products</h4>
        <h3 className="text-2xl font-bold text-[#252B42] mb-2 uppercase tracking-wider">Bestseller Products</h3>
        <p className="text-[#737373] text-sm">Problems trying to resolve the conflict between</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
        {/* map fonksiyonu allProducts içindeki yeni title ve dept bilgilerini basacak */}
        {allProducts.map((p) => (
          <Link 
            key={p.id} 
            to={`/product/${p.id}`} 
            className="flex justify-center transition-all duration-300 transform hover:scale-105"
          >
            <ProductCard 
              img={p.img} 
              title={p.title}      // Artık "Sweater" vb. gelecek
              department={p.dept}  // Artık "Semi Casual" vb. gelecek
              oldPrice={p.oldPrice} 
              newPrice={p.newPrice} 
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BestsellerProducts;