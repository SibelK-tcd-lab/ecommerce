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
    <div className="bg-white min-h-screen font-sans antialiased">
      {/* 1. Başlık ve Breadcrumb */}
      <div className="bg-[#FAFAFA] py-8">
        <div className="container mx-auto px-4 md:px-20 flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold text-[#252B42]">Shop</h2>
          <nav className="flex items-center gap-2 text-sm font-bold">
            <Link to="/" className="text-[#252B42] hover:text-[#23A6F0]">Home</Link>
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
              <div key={cat.id} className="relative group cursor-pointer overflow-hidden aspect-[4/5] shadow-sm">
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                  <h3 className="font-bold text-base tracking-widest uppercase">{cat.title}</h3>
                  <p className="text-sm font-medium opacity-90">{cat.items}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Filtre Barı */}
      <div className="bg-white py-6 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#737373] font-bold text-sm">Showing all 12 results</p>
          
          <div className="flex items-center gap-4">
            <span className="text-[#737373] font-bold text-sm">Views:</span>
            <div className="flex gap-2">
              <button className="p-3 border border-gray-200 rounded-md text-[#252B42] hover:bg-gray-50"><LayoutGrid size={18} /></button>
              <button className="p-3 border border-gray-200 rounded-md text-[#737373] hover:bg-gray-50"><List size={18} /></button>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none h-12 px-6 flex items-center justify-between bg-[#F9F9F9] border border-[#DDDDDD] rounded-md text-[#737373] text-sm font-bold min-w-[170px]">
              Popularity <ChevronDown size={16} />
            </button>
            <button className="bg-[#23A6F0] text-white h-12 px-10 rounded-md font-bold text-sm hover:bg-[#1a8cd1] shadow-md transition-all active:scale-95">
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* 4. Ürün Listesi (Renkler ve Küçültülmüş Puntolar) */}
      <div className="container mx-auto px-4 md:px-20 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
          {allProducts.slice(0, 12).map((product) => (
            <div key={product.id} className="group flex flex-col items-center text-center">
              {/* Ürün Görseli */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-lg mb-6 bg-gray-50 relative">
                <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              
              {/* Ürün Başlığı (Punto küçültüldü) */}
              <h3 className="font-bold text-[#252B42] text-base mb-2 group-hover:text-[#23A6F0] transition-colors cursor-pointer">
                {product.title}
              </h3>
              
              {/* Departman */}
              <p className="text-[#737373] text-sm font-bold mb-3">{product.dept}</p>
              
              {/* Fiyatlar */}
              <div className="flex gap-2.5 font-bold text-base mb-4">
                <span className="text-[#BDBDBD] line-through">{product.oldPrice}</span>
                <span className="text-[#23856D]">{product.newPrice}</span>
              </div>

              {/* Renk Seçenekleri (2. görseldeki gibi) */}
              <div className="flex gap-1.5 mt-auto">
                <div className="w-4 h-4 rounded-full bg-[#23A6F0] border border-gray-100 hover:scale-125 transition-transform cursor-pointer shadow-sm"></div>
                <div className="w-4 h-4 rounded-full bg-[#23856D] border border-gray-100 hover:scale-125 transition-transform cursor-pointer shadow-sm"></div>
                <div className="w-4 h-4 rounded-full bg-[#E77C40] border border-gray-100 hover:scale-125 transition-transform cursor-pointer shadow-sm"></div>
                <div className="w-4 h-4 rounded-full bg-[#252B42] border border-gray-100 hover:scale-125 transition-transform cursor-pointer shadow-sm"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Sayfalama (Pagination) */}
        <div className="flex justify-center mt-24">
          <div className="flex border border-[#BDBDBD] rounded-md overflow-hidden shadow-sm">
            <button className="px-6 py-5 bg-[#F3F3F3] text-[#BDBDBD] font-bold border-r border-[#BDBDBD]">First</button>
            <button className="px-5 py-5 border-r border-[#BDBDBD] bg-white text-[#23A6F0] font-bold">1</button>
            <button className="px-5 py-5 border-r border-[#BDBDBD] bg-[#23A6F0] text-white font-bold shadow-inner">2</button>
            <button className="px-5 py-5 border-r border-[#BDBDBD] bg-white text-[#23A6F0] font-bold">3</button>
            <button className="px-6 py-5 bg-white text-[#23A6F0] font-bold">Next</button>
          </div>
        </div>
      </div>

      {/* 5. Marka Logoları (Hooter) */}
      <section className="bg-[#FAFAFA] py-16">
        <div className="container mx-auto px-4 md:px-20 flex flex-wrap justify-between items-center gap-12 opacity-40 grayscale">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_Hooli.svg" className="h-10 object-contain" alt="hooli" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Lyft_logo.svg" className="h-10 object-contain" alt="lyft" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Stripe_logo%2C_2016.svg" className="h-10 object-contain" alt="stripe" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" className="h-10 object-contain" alt="amazon" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Reddit_logo.svg" className="h-10 object-contain" alt="reddit" />
        </div>
      </section>
    </div>
  );
};

export default ShopPage;