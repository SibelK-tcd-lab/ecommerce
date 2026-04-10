import React from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom'; // Link eklendi
import ProductCard from '../components/common/ProductCard.jsx';

const ShopPage = () => {
  // Kategoriler için tıklanabilir hale getirmek için slug ekledik
  const categories = [
    { title: "CLOTHS", items: 5, img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { title: "CLOTHS", items: 5, img: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { title: "CLOTHS", items: 5, img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { title: "CLOTHS", items: 5, img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { title: "CLOTHS", items: 5, img: "https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&w=400" }
  ];

  const products = [
    { id: 1, img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 2, img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400" }, 
    { id: 3, img: "https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 4, img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 5, img: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 6, img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 7, img: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 8, img: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 9, img: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 10, img: "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 11, img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 12, img: "https://images.pexels.com/photos/1852382/pexels-photo-1852382.jpeg?auto=compress&cs=tinysrgb&w=400" }
  ];

  const brandLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Hooli_Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/a/a0/Lyft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/01/Pied_Piper_logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/58/Reddit_logo_new.svg"
  ];

  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* Breadcrumb - Aktif linkler */}
      <div className="bg-[#FAFAFA] py-6 px-4 md:px-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold text-[#252B42]">Shop</h2>
          <div className="flex items-center gap-3 font-bold text-sm">
            <Link to="/" className="text-[#252B42] hover:text-[#23A6F0]">Home</Link>
            <ChevronRight size={16} className="text-[#BDBDBD]" />
            <span className="text-[#BDBDBD]">Shop</span>
          </div>
        </div>
      </div>

      {/* Kategoriler - Tıklanabilir hale getirildi */}
      <div className="bg-[#FAFAFA] pb-12 px-4 md:px-10 border-b">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <Link key={i} to={`/shop/${cat.title.toLowerCase()}`} className="relative aspect-[3/4] cursor-pointer group overflow-hidden shadow-sm">
              <img src={cat.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="category" />
              <div className="absolute inset-0 bg-black/35 flex flex-col items-center justify-center text-white">
                <h5 className="font-bold uppercase tracking-widest">{cat.title}</h5>
                <p className="text-sm">5 Items</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Kontroller - Butonlar aktifleştirildi */}
      <div className="py-6 border-b px-4 md:px-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#737373] font-bold text-sm">Showing all 12 results</p>
          <div className="flex items-center gap-4 w-full md:w-auto justify-center">
            <select className="bg-[#F9F9F9] border px-4 py-3 rounded text-[#737373] outline-none cursor-pointer">
              <option>Popularity</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <button 
              onClick={() => alert("Filter açılıyor...")}
              className="bg-[#23A6F0] text-white px-10 py-3 rounded font-bold shadow-md hover:bg-[#1a8ecd] active:scale-95 transition-all"
            >
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Ürünler - Her bir kart artık tıklanabilir */}
      <div className="py-12 container mx-auto px-4 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
        {products.map((p) => (
          <Link key={p.id} to={`/product/${p.id}`} className="hover:shadow-lg transition-shadow rounded-lg overflow-hidden pb-4">
            <ProductCard 
              img={p.img} 
              title="Graphic Design" 
              department="English Department" 
              oldPrice="$16.48" 
              newPrice="$6.48" 
            />
          </Link>
        ))}
      </div>

      {/* Markalar */}
      <div className="bg-[#FAFAFA] py-16 px-4 md:px-10 border-t">
        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center gap-8 md:gap-12 grayscale opacity-60">
          {brandLogos.map((logo, i) => (
            <div key={i} className="flex justify-center items-center h-12 transition-all hover:grayscale-0 hover:opacity-100 cursor-pointer">
              <img src={logo} className="max-w-[80px] md:max-w-[100px] max-h-full object-contain" alt="brand" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;