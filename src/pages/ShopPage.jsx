import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from "../components/common/ProductCard.jsx";
import { allProducts } from '../data/productData.js'; 

const ShopPage = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-20">
      <h2 className="text-2xl font-bold mb-10 text-[#252B42]">Shop All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {allProducts.map((p) => {
          // Detay sayfasıyla aynı algoritma:
          const dynamicRating = [4, 4.5, 5][p.id % 3]; 
          const dynamicReviews = 10 + (p.id % 11);

          return (
            <Link key={p.id} to={`/product/${p.id}`} className="transition-all hover:scale-[1.02]">
              <ProductCard 
                img={p.img} 
                title={p.title} 
                department={p.dept} 
                oldPrice={p.oldPrice} 
                newPrice={p.newPrice} 
                rating={dynamicRating}
                reviews={dynamicReviews}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ShopPage;