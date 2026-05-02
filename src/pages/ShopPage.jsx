import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { 
  ChevronRight, 
  Star, 
  Heart, 
  Truck, 
  ShieldCheck, 
  Minus, 
  Plus, 
  ShoppingCart 
} from 'lucide-react';
import { addToCart } from '../store/actions/shoppingCartActions'; // Sepete ekleme aksiyonunu içe aktarıyoruz

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  // Fetch product list from Redux store
  const productList = useSelector((state) => state.product?.productList) || [];

  // Sample data compatible with the ShopPage component
  const sampleProducts = [
    { 
      id: 1, 
      title: 'Knitwear Sweater', 
      dept: 'Casual', 
      oldPrice: '$16.48', 
      newPrice: '$6.48', 
      img: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    { 
      id: 2, 
      title: 'Hooded Sports Wear', 
      dept: 'Hoodie Style', 
      oldPrice: '$16.48', 
      newPrice: '$6.48', 
      img: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    { id: 3, title: 'Classic Leather Jacket', dept: 'Casual', oldPrice: '$16.48', newPrice: '$6.48', img: 'https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 4, title: 'Essential T-Shirt', dept: 'Casual', oldPrice: '$16.48', newPrice: '$6.48', img: 'https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 5, title: 'Oxford Dress Shirt', dept: 'Casual', oldPrice: '$16.48', newPrice: '$6.48', img: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 6, title: 'Structured Blazer', dept: 'Casual', oldPrice: '$16.48', newPrice: '$6.48', img: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 7, title: 'Vintage Blazer Jacket', dept: 'Semi Formal', oldPrice: '$16.48', newPrice: '$6.48', img: 'https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 8, title: 'Slim Fit Shirt', dept: 'Semi Formal', oldPrice: '$16.48', newPrice: '$6.48', img: 'https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 9, title: 'Graphic T-Shirt', dept: 'Casual', oldPrice: '$25.00', newPrice: '$18.00', img: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 10, title: 'Heavyweight Sweater', dept: 'Casual', oldPrice: '$28.48', newPrice: '$22.48', img: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 11, title: 'Padded Winter Jacket', dept: 'Semi Formal', oldPrice: '$28.00', newPrice: '$15.00', img: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 12, title: 'Denim Trucker Jacket', dept: 'Casual', oldPrice: '$12.48', newPrice: '$9.48', img: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  let product = productList.find((item) => String(item.id) === String(id));
  if (!product) {
    product = sampleProducts.find((item) => String(item.id) === String(id)) || sampleProducts[0];
  }

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedColor, setSelectedColor] = useState('#23A6F0');
  const [selectedSize, setSelectedSize] = useState('M');
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const handleQuantityChange = (type) => {
    if (type === 'increment') {
      setQuantity((prev) => prev + 1);
    } else if (type === 'decrement' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleBuyNow = () => {
    // 1. Ürünü sepete ekle
    dispatch(
      addToCart({
        product: product,
        count: quantity,
        color: selectedColor,
        size: selectedSize,
      })
    );
    
    // 2. Checkout sayfasına yönlendir
    history.push('/checkout');
  };

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    alert(isFavorite ? 'Removed from favorites!' : 'Added to favorites!');
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans antialiased py-6 px-4 sm:px-6 lg:px-12">
      <nav className="mb-4 text-xs font-bold">
        <ol className="flex items-center gap-2">
          <li>
            <Link to="/" className="text-[#252B42] hover:text-[#23A6F0] transition-colors">Home</Link>
          </li>
          <li>
            <ChevronRight size={14} className="text-[#BDBDBD]" />
          </li>
          <li>
            <Link to="/shop" className="text-[#252B42] hover:text-[#23A6F0] transition-colors">Shop</Link>
          </li>
          <li>
            <ChevronRight size={14} className="text-[#BDBDBD]" />
          </li>
          <li className="text-[#BDBDBD] truncate max-w-[150px]">{product.title}</li>
        </ol>
      </nav>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-5 flex flex-col gap-4 max-w-md mx-auto md:max-w-none">
            <div className="aspect-[4/5] max-h-[360px] w-full bg-gray-50 rounded-lg overflow-hidden shadow-sm relative">
              <img 
                src={product.img} 
                alt={product.title} 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex justify-start">
              <div className="w-16 h-20 rounded border-2 border-[#23A6F0] overflow-hidden shadow-sm">
                <img src={product.img} alt={product.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col h-full justify-between gap-3">
            <div>
              <span className="text-xs text-[#23A6F0] font-bold uppercase tracking-widest">{product.dept}</span>
              <h1 className="text-xl font-bold text-[#252B42] mt-1 mb-2 leading-tight">{product.title}</h1>
              
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-0.5 text-[#F3CD03]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="text-[#737373] text-xs font-bold">(10 Reviews)</span>
              </div>

              <div className="flex items-baseline gap-3 mb-3 font-bold text-lg leading-none">
                <span className="text-[#23856D]">{product.newPrice}</span>
                <span className="text-[#BDBDBD] line-through text-sm">{product.oldPrice}</span>
              </div>

              <p className="text-[#737373] text-xs leading-relaxed mb-4">
                {product.title} offers an elegant design and breathable fabric structure that perfectly completes your outfit for every season.
              </p>
            </div>

            <hr className="border-gray-100 my-1" />

            <div>
              <span className="block text-xs font-bold text-[#252B42] mb-1">Color Options</span>
              <div className="flex gap-2">
                {['#23A6F0', '#23856D', '#E77C40', '#252B42', '#9747FF'].map((color, index) => (
                  <button 
                    key={index} 
                    onClick={() => setSelectedColor(color)}
                    style={{ backgroundColor: color }}
                    className={`w-5 h-5 rounded-full border transition-all ${selectedColor === color ? 'ring-2 ring-offset-1 ring-[#23A6F0]' : 'hover:scale-105'}`}
                  />
                ))}
              </div>
            </div>

            <div>
              <span className="block text-xs font-bold text-[#252B42] mb-1">Size: <span className="text-[#23A6F0] font-bold text-xs">{selectedSize}</span></span>
              <div className="flex gap-1.5">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-8 h-7 text-xs font-bold border rounded flex items-center justify-center transition-all ${
                      selectedSize === size 
                      ? 'bg-[#23A6F0] border-[#23A6F0] text-white shadow-sm' 
                      : 'border-[#BDBDBD] text-[#737373] bg-white hover:bg-gray-50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 items-center pt-2">
              <div className="flex items-center border border-[#BDBDBD] rounded bg-white p-0.5">
                <button 
                  onClick={() => handleQuantityChange('decrement')}
                  className="p-1.5 text-[#737373] hover:text-[#23A6F0] transition"
                >
                  <Minus size={14} />
                </button>
                <span className="w-7 text-center font-bold text-[#252B42] text-xs">{quantity}</span>
                <button 
                  onClick={() => handleQuantityChange('increment')}
                  className="p-1.5 text-[#737373] hover:text-[#23A6F0] transition"
                >
                  <Plus size={14} />
                </button>
              </div>

              <div className="flex items-center gap-1 border border-[#BDBDBD] rounded px-2.5 py-1.5 bg-white text-[#23A6F0]">
                <ShoppingCart size={16} />
                <span className="text-xs font-bold">{quantity}</span>
              </div>

              <button 
                onClick={handleBuyNow}
                className="bg-[#23A6F0] text-white h-8 px-4 rounded font-bold text-xs hover:bg-[#1a8cd1] shadow-sm transition-all active:scale-95"
              >
                BUY NOW
              </button>

              <button 
                onClick={handleToggleFavorite}
                className={`h-8 px-3 rounded font-bold text-xs border flex items-center justify-center gap-1.5 transition ${
                  isFavorite 
                  ? 'bg-red-50 border-red-200 text-red-500' 
                  : 'bg-white border-[#BDBDBD] text-[#737373] hover:bg-gray-50'
                }`}
              >
                <Heart size={14} fill={isFavorite ? "currentColor" : "none"} />
                Favorite
              </button>
            </div>

            <div className="pt-2 border-t border-gray-100 space-y-1 text-[11px] text-[#737373]">
              <div className="flex items-center gap-2">
                <Truck size={12} className="text-[#23A6F0]" />
                <span>Free shipping on orders over $50.</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={12} className="text-[#23A6F0]" />
                <span>100% Original Product and Secure Payment Guarantee.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 mt-6 p-4 md:p-6 max-w-6xl mx-auto">
        <div className="flex border-b border-gray-100 gap-5 mb-4 overflow-x-auto">
          {['description', 'info', 'reviews'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-xs font-bold transition-colors relative ${activeTab === tab ? 'text-[#23A6F0]' : 'text-[#BDBDBD] hover:text-[#252B42]'}`}
            >
              {tab === 'description' && 'Description'}
              {tab === 'info' && 'Additional Information'}
              {tab === 'reviews' && 'Reviews'}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#23A6F0]"></span>
              )}
            </button>
          ))}
        </div>

        <div className="text-[#737373] text-xs leading-relaxed">
          {activeTab === 'description' && (
            <div>
              <h3 className="text-xs font-bold text-[#252B42] mb-1">Product Details</h3>
              <p>{product.title} perfectly completes your daily style with its high-end craftsmanship and elegant design.</p>
            </div>
          )}

          {activeTab === 'info' && (
            <div>
              <h3 className="text-xs font-bold text-[#252B42] mb-1">Additional Features</h3>
              <ul className="space-y-1 list-disc list-inside">
                <li><strong>Category / Department:</strong> {product.dept}</li>
                <li><strong>Fabric Blend:</strong> 100% Premium Polyester / Cotton</li>
                <li><strong>Care:</strong> Machine washable at 30°C.</li>
              </ul>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <h3 className="text-xs font-bold text-[#252B42] mb-2">Reviews</h3>
              <div className="space-y-2">
                <div className="p-2 bg-[#FAFAFA] rounded border border-gray-100">
                  <span className="font-bold text-[#252B42] block mb-0.5 text-[10px]">John D.</span>
                  <p className="text-[10px] text-[#737373]">Arrived exactly as shown in the picture. The texture is very nice.</p>
                </div>
                <div className="p-2 bg-[#FAFAFA] rounded border border-gray-100">
                  <span className="font-bold text-[#252B42] block mb-0.5 text-[10px]">Jane S.</span>
                  <p className="text-[10px] text-[#737373]">Fits perfectly on me, fast shipping.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;