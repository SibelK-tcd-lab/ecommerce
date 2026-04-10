import React from 'react';
import ProductCard from '../common/ProductCard.jsx';

const BestsellerProducts = () => {
  const products = [
    { id: 1, img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400", title: "Graphic Design", dept: "English Department", oldPrice: "$16.48", newPrice: "$6.48" },
    { id: 2, img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400", title: "Graphic Design", dept: "English Department", oldPrice: "$16.48", newPrice: "$6.48" },
    { id: 3, img: "https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&w=400", title: "Graphic Design", dept: "English Department", oldPrice: "$16.48", newPrice: "$6.48" },
    { id: 4, img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=400", title: "Graphic Design", dept: "English Department", oldPrice: "$16.48", newPrice: "$6.48" },
    { id: 5, img: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=400", title: "Graphic Design", dept: "English Department", oldPrice: "$16.48", newPrice: "$6.48" },
    { id: 6, img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400", title: "Graphic Design", dept: "English Department", oldPrice: "$16.48", newPrice: "$6.48" },
    { id: 7, img: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=400", title: "Graphic Design", dept: "English Department", oldPrice: "$16.48", newPrice: "$6.48" },
    { id: 8, img: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400", title: "Graphic Design", dept: "English Department", oldPrice: "$16.48", newPrice: "$6.48" },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-20 container mx-auto">
      <div className="text-center mb-16">
        <h4 className="text-[#737373] text-xl mb-2 font-medium">Featured Products</h4>
        <h3 className="text-2xl font-bold text-[#252B42] mb-2 uppercase">Bestseller Products</h3>
        <p className="text-[#737373] text-sm">Problems trying to resolve the conflict between</p>
      </div>

      {/* Mobil uyumlu grid: Mobilde 1, tablette 2, masaüstünde 4 sütun */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {products.map((p) => (
          <div key={p.id} className="flex justify-center">
            <ProductCard 
              img={p.img} 
              title={p.title} 
              department={p.dept} 
              oldPrice={p.oldPrice} 
              newPrice={p.newPrice} 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

// İstediğin export satırı:
export default BestsellerProducts;