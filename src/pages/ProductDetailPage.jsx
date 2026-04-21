import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { allProducts } from '../data/productData';
import { Star, Heart, ShoppingCart, Truck, ShieldCheck, ChevronLeft } from 'lucide-react';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => String(p.id) === String(id));

  // --- TEK STATE: Hem sayaç hem sepet buna bağlı ---
  const [count, setCount] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [selectedColor, setSelectedColor] = useState('blue');
  const [selectedSize, setSelectedSize] = useState('M');

  // Arttırma ve Azaltma Fonksiyonları
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => count > 1 && setCount(prev => prev - 1);

  const colors = [
    { name: 'blue', class: 'bg-[#23A6F0]' },
    { name: 'green', class: 'bg-[#23856D]' },
    { name: 'orange', class: 'bg-[#E77C40]' },
    { name: 'dark', class: 'bg-[#252B42]' },
    { name: 'red', class: 'bg-[#E74C3C]' },
    { name: 'purple', class: 'bg-[#8E44AD]' },
    { name: 'yellow', class: 'bg-[#F1C40F]' }
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return null;

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Breadcrumb */}
      <div className="bg-[#FAFAFA] py-6 border-b">
        <div className="container mx-auto px-4 md:px-20">
          <Link to="/shop" className="flex items-center gap-2 text-[#737373] hover:text-[#23A6F0] font-bold text-sm transition-colors">
            <ChevronLeft size={18} /> BACK TO SHOP
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-20 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Sol: Ürün Görseli */}
          <div className="rounded-2xl overflow-hidden bg-gray-50 shadow-lg h-fit sticky top-10">
            <img src={product.img} alt={product.title} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
          </div>

          {/* Sağ: Ürün Bilgileri */}
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-[#252B42] mb-2">{product.title}</h1>
            <p className="text-[#737373] font-bold text-sm uppercase mb-4 tracking-widest">{product.dept}</p>
            
            <div className="flex items-center gap-2 mb-6 text-[#F3CD03]">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill={i < 4 ? "#F3CD03" : "none"} />)}
              </div>
              <span className="text-[#737373] text-sm font-bold ml-2">(120 Reviews)</span>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-[#23856D]">{product.newPrice}</span>
                <span className="text-2xl text-[#BDBDBD] line-through font-bold">{product.oldPrice}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-[#737373] text-lg leading-relaxed mb-8 border-l-4 border-[#23A6F0] pl-5 py-2 bg-blue-50/30 rounded-r-lg">
              {product.description || "No description provided for this product."}
            </p>

            <hr className="mb-8 border-gray-100" />

            {/* Renk Seçimi */}
            <div className="mb-8">
              <h3 className="text-[#252B42] font-bold mb-4 uppercase text-xs tracking-wider">Select Color</h3>
              <div className="flex flex-wrap gap-4">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-9 h-9 rounded-full ${color.class} transition-all transform hover:scale-110 shadow-md ${
                      selectedColor === color.name 
                      ? 'ring-4 ring-offset-2 ring-blue-200 border-2 border-white' 
                      : 'border-2 border-transparent'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Beden Seçimi */}
            <div className="mb-10">
              <h3 className="text-[#252B42] font-bold uppercase text-xs tracking-wider mb-4">Select Size</h3>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[55px] h-12 flex items-center justify-center rounded-lg border-2 font-bold transition-all ${
                      selectedSize === size 
                      ? 'border-[#23A6F0] text-[#23A6F0] bg-[#f0f9ff]' 
                      : 'border-gray-100 text-[#737373] hover:border-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* SENKRONİZE AKSİYONLAR */}
            <div className="flex flex-col gap-6 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-4 flex-wrap">
                
                {/* SAYAÇ: Direkt 'count' state'ini kullanıyor */}
                <div className="flex items-center border-2 border-gray-100 rounded-xl bg-gray-50 h-14">
                  <button onClick={decrement} className="px-6 font-bold text-xl hover:bg-gray-200 transition-colors">-</button>
                  <span className="w-10 text-center font-bold text-lg">{count}</span>
                  <button onClick={increment} className="px-6 font-bold text-xl hover:bg-gray-200 transition-colors">+</button>
                </div>

                <div className="flex gap-3">
                  {/* SEPET İKONU: Sayaçla beraber anında değişir */}
                  <div className="relative">
                    <button className="w-14 h-14 flex items-center justify-center border-2 border-gray-100 rounded-xl hover:border-[#23A6F0] text-[#252B42] hover:text-[#23A6F0] transition-all">
                      <ShoppingCart size={24} />
                    </button>
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-6 h-6 flex items-center justify-center rounded-full font-bold animate-pulse">
                      {count}
                    </span>
                  </div>
                  
                  <button 
                    onClick={() => setIsLiked(!isLiked)}
                    className={`w-14 h-14 flex items-center justify-center border-2 rounded-xl transition-all duration-300 ${
                      isLiked ? "border-red-500 bg-red-50 text-red-500" : "border-gray-100 text-gray-400"
                    }`}
                  >
                    <Heart size={24} fill={isLiked ? "currentColor" : "none"} />
                  </button>
                </div>
              </div>

              {/* Satın Alma Butonları */}
              <div className="flex gap-4 sm:flex-row flex-col">
                <button className="flex-1 bg-white border-2 border-[#23A6F0] text-[#23A6F0] h-14 rounded-xl font-bold uppercase hover:bg-[#23A6F0] hover:text-white transition-all transform active:scale-95">
                  Add To Cart
                </button>
                <button className="flex-1 bg-[#23A6F0] text-white h-14 rounded-xl font-bold uppercase hover:bg-[#1a8cd1] shadow-lg shadow-blue-200 transition-all transform active:scale-95">
                  Buy Now ({count})
                </button>
              </div>
            </div>

            {/* Güven Rozetleri */}
            <div className="grid grid-cols-2 gap-4 mt-12 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-3 text-[#737373]">
                <Truck className="text-[#23856D]" size={20} />
                <span className="text-[10px] font-bold uppercase tracking-tighter">Fast & Free Delivery</span>
              </div>
              <div className="flex items-center gap-3 text-[#737373]">
                <ShieldCheck className="text-[#23856D]" size={20} />
                <span className="text-[10px] font-bold uppercase tracking-tighter">2 Year Official Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage; 