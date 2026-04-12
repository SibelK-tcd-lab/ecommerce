import React from 'react';
import { Link } from 'react-router-dom';
import { allProducts } from '../data/productData'; 
import { ChevronRight, LayoutGrid, List, ChevronDown } from 'lucide-react';

const ShopPage = () => {
  const categories = [
    { id: 1, title: 'CLOTHS', items: '5 Items', img: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 2, title: 'CLOTHS', items: '5 Items', img: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 3, title: 'CLOTHS', items: '5 Items', img: 'https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 4, title: 'CLOTHS', items: '5 Items', img: 'https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 5, title: 'CLOTHS', items: '5 Items', img: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Başlık ve Breadcrumb */}
      <div className="bg-[#FAFAFA] py-10">
        <div className="container mx-auto px-4 md:px-20 flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold text-[#252B42]">Shop</h2>
          <nav className="flex items-center gap-2 text-sm font-bold">
            <Link to="/" className="text-[#252B42]">Home</Link>
            <ChevronRight size={16} className="text-[#BDBDBD]" />
            <span className="text-[#BDBDBD]">Shop</span>
          </nav>
        </div>
      </div>

      {/* 2. Kategori Kartları */}
      <div className="bg-[#FAFAFA] pb-12">
        <div className="container mx-auto px-4 md:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <div key={cat.id} className="relative group cursor-pointer overflow-hidden h-[250px] shadow-sm">
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h3 className="font-bold text-base tracking-wider">{cat.title}</h3>
                  <p className="text-sm font-medium">{cat.items}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Filtre Barı */}
      <div className="bg-white py-6">
        <div className="container mx-auto px-4 md:px-20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#737373] font-bold text-sm">Showing all {allProducts.length} results</p>
          
          <div className="flex items-center gap-4">
            <span className="text-[#737373] font-bold text-sm">Views:</span>
            <div className="flex gap-2">
              <button className="p-3 border border-gray-200 rounded-md active:bg-gray-100"><LayoutGrid size={18} /></button>
              <button className="p-3 border border-gray-200 rounded-md text-gray-400 active:bg-gray-100"><List size={18} /></button>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none h-12 px-6 flex items-center justify-between bg-[#F9F9F9] border border-[#DDDDDD] rounded-md text-[#737373] text-sm font-bold min-w-[150px]">
              Popularity <ChevronDown size={16} />
            </button>
            <button className="bg-[#23A6F0] text-white h-12 px-8 rounded-md font-bold text-sm hover:bg-[#1a8cd1] transition-all">
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* 4. Ürün Listesi (Renkler Dahil) */}
      <div className="container mx-auto px-4 md:px-20 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {allProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="group flex flex-col items-center">
              <div className="w-full aspect-[3/4] overflow-hidden rounded-lg mb-4 bg-gray-100">
                <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-bold text-[#252B42] text-center">{product.title}</h3>
              <p className="text-[#737373] text-sm font-bold my-2">{product.dept}</p>
              <div className="flex gap-2 font-bold text-sm mb-3">
                <span className="text-[#BDBDBD] line-through">{product.oldPrice}</span>
                <span className="text-[#23856D]">{product.newPrice}</span>
              </div>

              {/* Her ürünün altına gelecek renk paleti */}
              <div className="flex gap-1.5 mt-1">
                <div className="w-4 h-4 rounded-full bg-[#23A6F0] transition-transform hover:scale-110 cursor-pointer"></div>
                <div className="w-4 h-4 rounded-full bg-[#23856D] transition-transform hover:scale-110 cursor-pointer"></div>
                <div className="w-4 h-4 rounded-full bg-[#E77C40] transition-transform hover:scale-110 cursor-pointer"></div>
                <div className="w-4 h-4 rounded-full bg-[#252B42] transition-transform hover:scale-110 cursor-pointer"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;