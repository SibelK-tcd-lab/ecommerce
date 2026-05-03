import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, LayoutGrid, List, ChevronDown } from 'lucide-react';
import { allProducts } from '../data/productData';

const ShopPage = () => {
  // Görseldeki 5 kategori verisi
  const categories = [
    { id: 1, title: 'CLOTHS', items: '5 Items', img: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 2, title: 'CLOTHS', items: '5 Items', img: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 3, title: 'CLOTHS', items: '5 Items', img: 'https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 4, title: 'CLOTHS', items: '5 Items', img: 'https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 5, title: 'CLOTHS', items: '5 Items', img: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

  return (
    <div className="bg-white min-h-screen font-sans antialiased">
      
      {/* 1. Başlık ve Breadcrumb (Home > Shop) */}
      <div className="bg-[#FAFAFA] py-8">
        <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold text-[#252B42]">Shop</h2>
          <div className="flex items-center gap-2 text-sm font-bold">
            <Link to="/" className="text-[#252B42] hover:text-[#23A6F0] transition-colors">Home</Link>
            <ChevronRight size={16} className="text-[#BDBDBD]" />
            <span className="text-[#BDBDBD]">Shop</span>
          </div>
        </div>
      </div>

      {/* 2. Kategori Kartları (5'li Yan Yana) */}
      <div className="bg-[#FAFAFA] pb-12">
        <div className="container mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <div key={cat.id} className="relative aspect-[3/4] rounded-lg overflow-hidden group cursor-pointer shadow-sm">
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                {/* Karartma Overlay */}
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors" />
                {/* Yazılar */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                  <h3 className="font-bold text-base tracking-widest uppercase">{cat.title}</h3>
                  <p className="text-sm font-medium opacity-90">{cat.items}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Filtre Barı (Showing, Views, Dropdown, Button) */}
      <div className="bg-white py-6 border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[#737373] font-bold text-sm">Showing all 12 results</p>
          
          <div className="flex items-center gap-4">
            <span className="text-[#737373] font-bold text-sm">Views:</span>
            <div className="flex items-center gap-2">
              <div className="p-3 border rounded border-gray-200 text-[#252B42] hover:bg-gray-50 cursor-pointer shadow-sm">
                <LayoutGrid size={16} />
              </div>
              <div className="p-3 border rounded border-gray-200 text-[#737373] hover:bg-gray-50 cursor-pointer shadow-sm">
                <List size={16} />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Sıralama Dropdown */}
            <div className="flex items-center gap-3 px-5 py-3 border border-[#BDBDBD] rounded bg-[#F9F9F9] text-sm text-[#737373] cursor-pointer hover:border-[#23A6F0] transition-colors">
              <span>Popularity</span>
              <ChevronDown size={16} />
            </div>
            {/* Filtre Butonu */}
            <button className="px-5 py-3 bg-[#23A6F0] text-white font-bold text-sm rounded shadow-sm hover:bg-[#1a8cd1] transition-all active:scale-95">
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* 4. Ürün Listesi Grid Yapısı */}
      <div className="container mx-auto px-6 md:px-20 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
          {allProducts.map((product) => (
            <Link 
              to={`/product/${product.id}`} 
              key={product.id} 
              className="group flex flex-col items-center text-center"
              onClick={() => window.scrollTo(0, 0)}
            >
              {/* Ürün Görseli - Linkli */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-lg mb-6 bg-gray-50 relative">
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              {/* Ürün Başlığı - Linkli */}
              <h3 className="font-bold text-[#252B42] text-base mb-2 group-hover:text-[#23A6F0] transition-colors">
                {product.title}
              </h3>
              
              {/* Kategori / Bölüm */}
              <p className="text-[#737373] text-sm font-bold mb-3">{product.dept}</p>
              
              {/* Fiyatlar */}
              <div className="flex gap-2.5 font-bold text-base mb-4">
                <span className="text-[#BDBDBD] line-through">{product.oldPrice}</span>
                <span className="text-[#23856D]">{product.newPrice}</span>
              </div>

              {/* Renk Noktaları */}
              <div className="flex gap-1.5 mt-auto">
                <div className="w-4 h-4 rounded-full bg-[#23A6F0] border border-gray-100 hover:scale-125 transition-transform cursor-pointer shadow-sm"></div>
                <div className="w-4 h-4 rounded-full bg-[#23856D] border border-gray-100 hover:scale-125 transition-transform cursor-pointer shadow-sm"></div>
                <div className="w-4 h-4 rounded-full bg-[#E77C40] border border-gray-100 hover:scale-125 transition-transform cursor-pointer shadow-sm"></div>
                <div className="w-4 h-4 rounded-full bg-[#252B42] border border-gray-100 hover:scale-125 transition-transform cursor-pointer shadow-sm"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Sayfalama (Pagination) */}
        <div className="flex justify-center mt-24">
          <div className="flex border border-[#BDBDBD] rounded-md overflow-hidden shadow-sm text-sm">
            <button className="px-6 py-4 bg-[#F3F3F3] text-[#BDBDBD] font-bold border-r border-[#BDBDBD]">First</button>
            <button className="px-6 py-4 text-[#23A6F0] font-bold border-r border-[#BDBDBD] hover:bg-[#23A6F0] hover:text-white transition-colors">1</button>
            <button className="px-6 py-4 text-[#737373] font-bold border-r border-[#BDBDBD] hover:bg-[#23A6F0] hover:text-white transition-colors">2</button>
            <button className="px-6 py-4 text-[#737373] font-bold border-r border-[#BDBDBD] hover:bg-[#23A6F0] hover:text-white transition-colors">3</button>
            <button className="px-6 py-4 text-[#23A6F0] font-bold hover:bg-[#23A6F0] hover:text-white transition-colors">Next</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ShopPage;