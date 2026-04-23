import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/actions/productActions';

const ProductDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const [selectedColor, setSelectedColor] = useState("#23A6F0");
  const [selectedSize, setSelectedSize] = useState("M");

  const { productList, fetchState } = useSelector((state) => state.product);
  const { cart } = useSelector((state) => state.shoppingCart); // Yeni reducer adıyla çekiyoruz
  
  const product = productList.find((p) => String(p.id) === String(id));

  // Sepette bu varyasyondan (ID + Renk + Boyut) var mı kontrolü
  const cartItem = cart.find(
    (item) => 
      String(item.product.id) === String(id) && 
      item.color === selectedColor && 
      item.size === selectedSize
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    if (productList.length === 0 && fetchState !== 'FETCHING') {
      dispatch(fetchProducts());
    }
  }, [id, dispatch, productList.length, fetchState]);

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        product: product,
        count: 1,
        color: selectedColor,
        size: selectedSize
      }
    });
  };

  // Adet Güncelleme (Artır/Azalt)
  const updateCount = (delta) => {
    dispatch({
      type: 'UPDATE_COUNT',
      payload: {
        id: product.id,
        color: selectedColor,
        size: selectedSize,
        delta: delta // Reducer'da delta mantığını kurmuştuk
      }
    });
  };

  const handleBuyNow = () => {
    if (!cartItem) {
      handleAddToCart();
    }
    history.push('/checkout'); // Direkt ödeme sayfasına
  };

  if (fetchState === 'FETCHING' || !product) {
    return (
      <div className="py-20 text-center flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#23A6F0] mb-4"></div>
        <p className="font-bold text-xl text-gray-400">Loading product details...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <div className="container mx-auto py-12 px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start bg-white p-8 rounded-xl shadow-sm">
          
          {/* SOL: Ürün Görsel Alanı */}
          <div className="space-y-4">
            <div className="relative rounded-lg overflow-hidden group">
              <img src={product.img} className="w-full aspect-square object-cover" alt={product.title} />
              <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl opacity-70 hover:opacity-100">‹</button>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl opacity-70 hover:opacity-100">›</button>
            </div>
            <div className="flex gap-4">
              <img src={product.img} className="w-24 h-24 object-cover rounded opacity-50 cursor-pointer border" alt="thumb" />
              <img src={product.img} className="w-24 h-24 object-cover rounded cursor-pointer border-2 border-[#23A6F0]" alt="thumb" />
            </div>
          </div>

          {/* SAĞ: Ürün Bilgileri ve Seçimler */}
          <div className="flex flex-col space-y-5">
            <h1 className="text-2xl font-semibold text-[#252B42]">{product.title}</h1>
            
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400 text-lg">
                <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-gray-300">★</span>
              </div>
              <span className="text-sm font-bold text-[#737373]">10 Reviews</span>
            </div>

            <div className="space-y-2">
              <p className="text-3xl font-bold text-[#252B42]">{product.newPrice}</p>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[#737373]">Availability :</span>
                <span className="text-sm font-bold text-[#23A6F0]">In Stock</span>
              </div>
            </div>

            <p className="text-[#858585] text-sm leading-relaxed border-b pb-8">
              {product.description || "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent."}
            </p>

            {/* RENK VE BOYUT SEÇİMİ */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-[#737373]">Select Color:</h3>
                <div className="flex gap-3">
                  {["#23A6F0", "#2DC071", "#E77C40", "#252B42"].map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      style={{ backgroundColor: color }}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        selectedColor === color ? 'border-gray-400 scale-110 shadow-md' : 'border-transparent'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-bold text-[#737373]">Select Size:</h3>
                <div className="flex gap-3">
                  {["S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-10 flex items-center justify-center text-xs font-bold border rounded transition-all ${
                        selectedSize === size 
                        ? 'bg-[#23A6F0] text-white border-[#23A6F0]' 
                        : 'text-[#737373] border-gray-200 hover:border-[#23A6F0]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* AKSİYON BUTONLARI */}
            <div className="flex items-center gap-4 pt-6 border-t">
              {cartItem ? (
                // Eğer ürün sepetteyse Miktar Kontrolcü göster
                <div className="flex items-center border-2 border-[#23A6F0] rounded-md overflow-hidden">
                  <button onClick={() => updateCount(-1)} className="px-4 py-2 bg-blue-50 text-[#23A6F0] font-bold hover:bg-blue-100">-</button>
                  <span className="px-6 py-2 font-bold text-[#252B42] border-x">{cartItem.count}</span>
                  <button onClick={() => updateCount(1)} className="px-4 py-2 bg-blue-50 text-[#23A6F0] font-bold hover:bg-blue-100">+</button>
                </div>
              ) : (
                // Sepette değilse Add to Cart göster
                <button 
                  onClick={handleAddToCart}
                  className="bg-[#23A6F0] text-white px-8 py-3 rounded-md font-bold text-sm hover:bg-[#1b8ecf] transition-all shadow-md uppercase"
                >
                  Add to Cart
                </button>
              )}
              
              <button 
                onClick={handleBuyNow}
                className="border-2 border-[#23A6F0] text-[#23A6F0] px-8 py-[10px] rounded-md font-bold text-sm hover:bg-blue-50 transition-all uppercase"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;