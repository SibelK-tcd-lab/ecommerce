import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../common/ProductCard.jsx';
import { allProducts } from '../../data/productData.js'; 

const BestsellerProducts = () => {
  // 12 ürünün tamamını alıyoruz
  const productsToShow = allProducts.slice(0, 12);

  return (
    <section className="py-20 px-4 md:px-20 container mx-auto bg-white rounded-3xl my-10 shadow-sm border border-gray-50">
      {/* Üst Başlık Grubu - Fontlar Büyütüldü */}
      <div className="text-center mb-16 space-y-4">
        <h4 className="text-[#737373] text-2xl font-medium tracking-wide">Featured Products</h4>
        <h3 className="text-3xl font-bold text-[#252B42] uppercase tracking-widest">
          Bestseller Products
        </h3>
        <p className="text-[#737373] text-lg max-w-md mx-auto">
          Explore our most trending pieces selected just for you.
        </p>
      </div>

      {/* Ürün Izgarası */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-20">
        {productsToShow.map((p) => (
          <Link 
            key={p.id} 
            to={`/product/${p.id}`} 
            className="flex justify-center transition-all duration-300 transform hover:-translate-y-2"
          >
            <ProductCard 
              img={p.img} 
              title={p.title}
              department={p.dept}
              oldPrice={p.oldPrice} 
              newPrice={p.newPrice}
              rating={p.rating}    // Puan verisini gönderiyoruz
              reviews={p.reviews}  // Yorum sayısını gönderiyoruz
              showRating={true}    // Yıldızları görünür kılıyoruz
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BestsellerProducts;