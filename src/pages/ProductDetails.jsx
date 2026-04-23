import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/actions/productActions';

const ProductDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  // State Yönetimi: Renk ve Boyut seçimi için
  const [selectedColor, setSelectedColor] = useState("Blue");
  const [selectedSize, setSelectedSize] = useState("M");

  const { productList, fetchState } = useSelector((state) => state.product);
  const product = productList.find((p) => String(p.id) === String(id));

  useEffect(() => {
    window.scrollTo(0, 0);
    if (productList.length === 0 && fetchState !== 'FETCHING') {
      dispatch(fetchProducts());
    }
  }, [id, dispatch, productList.length, fetchState]);

  // Sepete Ekleme Fonksiyonu (Yeni Reducer yapısına tam uyumlu)
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

  const handleBuyNow = () => {
    handleAddToCart();
    history.push('/checkout');
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
    <div className="container mx-auto py-12 px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Ürün Görseli */}
        <div className="rounded-lg overflow-hidden shadow-xl border">
          <img src={product.img} className="w-full h-auto object-cover" alt={product.title} />
        </div>

        {/* Ürün Detayları */}
        <div className="flex flex-col space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-[#252B42] mb-2">{product.title}</h1>
            <p className="text-3xl font-bold text-[#23856D]">{product.newPrice}</p>
          </div>
          
          <p className="text-[#858585] text-lg leading-relaxed">{product.description}</p>

          {/* Renk Seçimi (Dinamik) */}
          <div className="space-y-3">
            <h3 className="font-bold text-[#252B42]">Select Color:</h3>
            <div className="flex gap-4">
              {["Blue", "Green", "Orange", "Black"].map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-6 py-2 rounded-full border-2 transition-all ${
                    selectedColor === color 
                    ? 'border-[#23A6F0] bg-[#23A6F0] text-white shadow-md' 
                    : 'border-gray-200 text-gray-500 hover:border-[#23A6F0]'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Boyut Seçimi (Dinamik) */}
          <div className="space-y-3">
            <h3 className="font-bold text-[#252B42]">Select Size:</h3>
            <div className="flex gap-4">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center font-bold transition-all ${
                    selectedSize === size 
                    ? 'border-[#23A6F0] text-[#23A6F0] bg-blue-50' 
                    : 'border-gray-200 text-gray-400 hover:border-[#23A6F0]'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Aksiyon Butonları */}
          <div className="flex gap-4 pt-4">
            <button 
              onClick={handleAddToCart} 
              className="flex-1 border-2 border-[#23A6F0] text-[#23A6F0] py-4 rounded-md font-bold uppercase hover:bg-[#23A6F0] hover:text-white transition-all shadow-sm"
            >
              Add to Cart
            </button>
            <button 
              onClick={handleBuyNow} 
              className="flex-1 bg-[#23A6F0] text-white py-4 rounded-md font-bold uppercase hover:bg-[#1b8ecf] transition-all shadow-md active:scale-95"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;