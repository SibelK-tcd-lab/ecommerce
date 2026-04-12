import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Star, Heart, ShoppingCart, Eye } from 'lucide-react';

const ProductDetailPage = () => {
  const { id } = useParams();

  // 12 Ürünlük Tam Veri Seti
  const allProducts = [
    { id: 1, title: "Graphic Design", img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800", oldPrice: "$16.48", newPrice: "$6.48", description: "A unique artistic tee featuring high-quality prints and organic cotton for maximum comfort and style in your daily life." },
    { id: 2, title: "Urban Style", img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800", oldPrice: "$16.48", newPrice: "$6.48", description: "Perfect for the city life. Durable, stylish, and specifically designed for the modern urban explorer seeking both form and function." },
    { id: 3, title: "Modern Look", img: "https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&w=800", oldPrice: "$16.48", newPrice: "$6.48", description: "Minimalist aesthetic with premium stitching. A timeless addition to any modern wardrobe that values clean lines and quality." },
    { id: 4, title: "Street Wear", img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=800", oldPrice: "$16.48", newPrice: "$6.48", description: "Bold street fashion that combines edge with everyday usability. Feel the global vibes with this high-end oversized streetwear." },
    { id: 5, title: "Classic Essential", img: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=800", oldPrice: "$16.48", newPrice: "$6.48", description: "The foundation of every great outfit. Features soft-touch fabric and a perfect fit suitable for any casual or semi-formal occasion." },
    { id: 6, title: "Summer Breeze", img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800", oldPrice: "$16.48", newPrice: "$6.48", description: "Ultra-lightweight and breathable materials designed to keep you cool and stylish during even the hottest summer days." },
    { id: 7, title: "Vintage Vibe", img: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=800", oldPrice: "$16.48", newPrice: "$6.48", description: "Retro-inspired design meets modern craftsmanship. Relive the best fashion decades with a garment built for today's standards." },
    { id: 8, title: "Daily Comfort", img: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800", oldPrice: "$16.48", newPrice: "$6.48", description: "Focusing on your comfort throughout the day. Made with premium fabric that feels like a second skin, ideal for home or travel." },
    { id: 9, title: "Evening Gala", img: "https://images.pexels.com/photos/704977/pexels-photo-704977.jpeg?auto=compress&cs=tinysrgb&w=800", oldPrice: "$25.00", newPrice: "$18.00", description: "Elegant and sophisticated. Stand out at any formal event with this premium selection featuring a sharp silhouette and luxury finish." },
    { id: 10, title: "Winter Warmth", img: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800", oldPrice: "$30.48", newPrice: "$22.48", description: "Stay cozy without losing your fashion edge. High-insulation fabric designed to protect you against the coldest winter days." },
    { id: 11, title: "Office Smart", img: "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=800", oldPrice: "$20.00", newPrice: "$15.00", description: "Professional, clean, and incredibly comfortable. The perfect choice for long days at the office or important business meetings." },
    { id: 12, title: "Sporty Active", img: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=800", oldPrice: "$12.48", newPrice: "$9.48", description: "Moisture-wicking technology for your intense workout sessions. Look great and feel dry while staying active and healthy." }
  ];

  // URL'deki ID ile ürünü buluyoruz (Number dönüşümü önemli)
  const product = allProducts.find(p => p.id === Number(id));

  // Ürün bulunamazsa hata mesajı
  if (!product) {
    return (
      <div className="p-20 text-center font-bold text-2xl text-[#252B42]">
        Product not found!
      </div>
    );
  }

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="bg-[#FAFAFA] py-6 px-4 md:px-20">
        <div className="container mx-auto flex items-center gap-3 font-bold text-sm">
          <Link to="/" className="text-[#252B42] hover:text-[#23A6F0]">Home</Link>
          <ChevronRight size={16} className="text-[#BDBDBD]" />
          <Link to="/shop" className="text-[#BDBDBD] hover:text-[#23A6F0]">Shop</Link>
          <ChevronRight size={16} className="text-[#BDBDBD]" />
          <span className="text-[#BDBDBD]">{product.title}</span>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="container mx-auto py-12 px-4 md:px-20">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          
          {/* Left Side: Product Image */}
          <div className="flex-1">
            <img 
              src={product.img} 
              alt={product.title} 
              className="w-full h-auto md:h-[600px] object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Right Side: Product Details */}
          <div className="flex-1 flex flex-col gap-6 py-2">
            <h3 className="text-3xl text-[#252B42] font-medium">{product.title}</h3>
            
            {/* Reviews Sim */}
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(4)].map((_, i) => <Star key={i} size={20} fill="currentColor"/>)}
                <Star size={20} />
              </div>
              <span className="text-[#737373] font-bold text-sm">10 Reviews</span>
            </div>

            {/* Price & Availability */}
            <div className="flex flex-col gap-2">
              <h4 className="text-3xl font-bold text-[#252B42]">{product.newPrice}</h4>
              <div className="flex gap-2 text-sm font-bold">
                <span className="text-[#737373]">Availability :</span>
                <span className="text-[#23A6F0]">In Stock</span>
              </div>
            </div>

            {/* Dynamic Description (English) */}
            <p className="text-[#858585] text-base leading-relaxed md:max-w-md">
              {product.description}
            </p>
            
            <hr className="border-[#BDBDBD]" />
            
            {/* Color Pickers */}
            <div className="flex gap-3 mt-2">
              <div className="w-8 h-8 rounded-full bg-[#23A6F0] cursor-pointer hover:ring-2 ring-offset-2 ring-[#23A6F0] transition-all"></div>
              <div className="w-8 h-8 rounded-full bg-[#2DC071] cursor-pointer hover:ring-2 ring-offset-2 ring-[#2DC071] transition-all"></div>
              <div className="w-8 h-8 rounded-full bg-[#E77C40] cursor-pointer hover:ring-2 ring-offset-2 ring-[#E77C40] transition-all"></div>
              <div className="w-8 h-8 rounded-full bg-[#252B42] cursor-pointer hover:ring-2 ring-offset-2 ring-[#252B42] transition-all"></div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mt-6">
              <button className="bg-[#23A6F0] text-white px-8 py-3 rounded-md font-bold hover:bg-[#1a8ecd] active:scale-95 transition-all shadow-md">
                Select Options
              </button>
              
              <div className="flex gap-2">
                 <button className="p-3 border rounded-full text-[#252B42] hover:bg-[#23A6F0] hover:text-white transition-all">
                   <Heart size={20}/>
                 </button>
                 <button className="p-3 border rounded-full text-[#252B42] hover:bg-[#23A6F0] hover:text-white transition-all">
                   <ShoppingCart size={20}/>
                 </button>
                 <button className="p-3 border rounded-full text-[#252B42] hover:bg-[#23A6F0] hover:text-white transition-all">
                   <Eye size={20}/>
                 </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;