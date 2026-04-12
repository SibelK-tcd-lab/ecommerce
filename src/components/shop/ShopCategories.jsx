import React from 'react';

const ShopCategories = () => {
  const categories = [
    { id: 1, title: 'CLOTHS', items: '5 Items', img: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 2, title: 'CLOTHS', items: '5 Items', img: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 3, title: 'CLOTHS', items: '5 Items', img: 'https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 4, title: 'CLOTHS', items: '5 Items', img: 'https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 5, title: 'CLOTHS', items: '5 Items', img: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

  return (
    <div className="bg-[#FAFAFA] py-12">
      <div className="container mx-auto px-4 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <div key={cat.id} className="relative group cursor-pointer overflow-hidden h-[250px]">
              {/* Resim */}
              <img 
                src={cat.img} 
                alt={cat.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              {/* Overlay (Karartma) */}
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors" />
              
              {/* Yazılar */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="font-bold text-base tracking-wider">{cat.title}</h3>
                <p className="text-sm font-medium">{cat.items}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCategories;