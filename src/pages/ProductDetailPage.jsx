import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { allProducts } from '../data/productData';

const ProductDetailPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const product = allProducts.find((p) => p.id == id);

  // --- STATE YÖNETİMİ ---
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("#23A6F0");
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return <div className="py-40 text-center font-bold text-[#252B42]">Ürün bulunamadı.</div>;

  // --- SEÇENEK VERİLERİ ---
  const colors = [
    { name: "Sky Blue", code: "#23A6F0" },
    { name: "Forest Green", code: "#23856D" },
    { name: "Burnt Orange", code: "#E77C40" },
    { name: "Navy Blue", code: "#252B42" },
    { name: "Soft Pink", code: "#FFB6C1" },
    { name: "Classic White", code: "#FFFFFF" },
    { name: "Carbon Black", code: "#000000" }
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  // --- FONKSİYONLAR ---
  const handleAddToCart = () => {
    setCartCount(prev => prev + quantity);
    // Buraya sepete ekleme bildirimi (toast) eklenebilir
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* GÖRSEL ALANI */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden bg-[#F3F3F3] border border-gray-100 shadow-sm">
              <img src={product.img} alt={product.title} className="w-full h-[500px] md:h-[650px] object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex gap-4">
               <img src={product.img} className="w-20 h-20 object-cover rounded-lg border-2 border-[#23A6F0]" alt="thumbnail" />
            </div>
          </div>

          {/* DETAY ALANI */}
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-[#252B42] mb-4">{product.title}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-6 text-[#F3CD03]">
              {[...Array(5)].map((_, i) => (
                <i key={i} className={`fa-star ${i < 4 ? 'fa-solid' : 'fa-solid fa-star-half-stroke'}`}></i>
              ))}
              <span className="text-[#737373] font-bold text-sm ml-2">(24 Reviews)</span>
            </div>

            {/* Fiyat ve Stok */}
            <div className="mb-8">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-[#23856D]">{product.newPrice}</span>
                <span className="text-xl text-[#BDBDBD] line-through font-bold">{product.oldPrice}</span>
              </div>
              <p className="text-[#23A6F0] font-bold text-sm mt-2 uppercase tracking-wider">Availability : In Stock</p>
            </div>

            <p className="text-[#858585] leading-relaxed mb-8 text-sm md:text-base border-b pb-8 italic">
              {product.description || "Özel dokusu ve zamansız tasarımıyla her mevsim şıklığınızı tamamlayacak premium koleksiyon parçası."}
            </p>

            {/* RENK SEÇENEKLERİ */}
            <div className="mb-8">
              <h5 className="font-bold text-[#252B42] mb-4">Select Color:</h5>
              <div className="flex flex-wrap gap-3">
                {colors.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => setSelectedColor(c.code)}
                    title={c.name}
                    style={{ backgroundColor: c.code }}
                    className={`w-9 h-9 rounded-full border-2 transition-all transform hover:scale-110 shadow-sm
                      ${selectedColor === c.code ? 'ring-2 ring-offset-2 ring-[#23A6F0] border-white' : 'border-gray-100'}`}
                  />
                ))}
              </div>
            </div>

            {/* BEDEN SEÇENEKLERİ */}
            <div className="mb-10">
              <h5 className="font-bold text-[#252B42] mb-4">Select Size:</h5>
              <div className="flex flex-wrap gap-3">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`min-w-[50px] h-10 px-3 border-2 font-bold rounded-lg text-xs transition-all
                      ${selectedSize === s 
                        ? 'bg-[#252B42] text-white border-[#252B42]' 
                        : 'bg-white text-[#737373] border-gray-100 hover:border-[#23A6F0]'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* AKSİYON ALANI (ISTEDİĞİN FORMÜL) */}
            <div className="flex items-center gap-4">
              
              {/* 1. Miktar Seçici */}
              <div className="flex items-center border-2 border-gray-100 rounded-xl bg-gray-50 h-12">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-full hover:text-[#23A6F0] font-bold text-lg">-</button>
                <span className="w-10 text-center font-bold text-[#252B42]">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-full hover:text-[#23A6F0] font-bold text-lg">+</button>
              </div>

              {/* 2. Add To Cart (Yazı Butonu) */}
              <button 
                onClick={handleAddToCart}
                className="flex-grow md:flex-none md:px-12 bg-[#23A6F0] hover:bg-[#1a8cd1] text-white h-12 rounded-xl font-bold text-sm uppercase transition-all shadow-lg active:scale-95"
              >
                Add To Cart
              </button>

              {/* 3. Bağımsız Sepet İkonu & Dinamik Sayaç */}
              <div className="relative">
                <button className="w-12 h-12 flex items-center justify-center border-2 border-gray-100 rounded-xl text-[#252B42] hover:bg-gray-50 hover:border-[#23A6F0] transition-all group">
                  <i className="fa-solid fa-cart-shopping text-xl group-hover:scale-110 transition-transform"></i>
                </button>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[11px] w-6 h-6 flex items-center justify-center rounded-full border-2 border-white font-bold animate-bounce shadow-md">
                    {cartCount}
                  </span>
                )}
              </div>

              {/* 4. Like (Favori) Butonu - Tıklanınca Kırmızı */}
              <button 
                onClick={toggleFavorite}
                className={`w-12 h-12 flex items-center justify-center border-2 rounded-xl transition-all active:scale-90
                  ${isFavorite 
                    ? 'border-red-500 bg-red-50 text-red-500 shadow-inner' 
                    : 'border-gray-100 text-[#252B42] hover:bg-red-50 hover:text-red-500 hover:border-red-100'}`}
              >
                <i className={`${isFavorite ? 'fa-solid animate-pulse' : 'fa-regular'} fa-heart text-xl`}></i>
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;