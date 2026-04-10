import React from 'react';
import { User, Search, ShoppingCart, Heart, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full bg-white py-4 px-4 md:px-10">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Sol Taraf: Logo */}
        <Link to="/" className="text-2xl font-bold text-[#252B42]">
          Bandage
        </Link>

        {/* Orta: Menü (Masaüstü) */}
        <div className="hidden md:flex items-center gap-6 text-[#737373] font-bold">
          <Link to="/" className="hover:text-[#23A6F0] transition-colors">Home</Link>
          
          {/* DÜZELTİLEN KISIM: Shop artık bir Link! */}
          <Link to="/shop" className="flex items-center gap-1 cursor-pointer hover:text-[#23A6F0]">
            Shop <ChevronDown size={16} />
          </Link>

          <Link to="/about" className="hover:text-[#23A6F0]">About</Link>
          <Link to="/blog" className="hover:text-[#23A6F0]">Blog</Link>
          <Link to="/contact" className="hover:text-[#23A6F0]">Contact</Link>
          <Link to="/pages" className="hover:text-[#23A6F0]">Pages</Link>
        </div>

        {/* Sağ Taraf: Login/Register ve İkonlar */}
        <div className="flex items-center gap-4 text-[#23A6F0] font-bold">
          
          <div className="hidden sm:flex items-center gap-2">
            <User size={18} />
            <div className="flex items-center gap-1 text-sm md:text-base">
              <Link to="/login" className="hover:underline transition-all">
                Login
              </Link>
              <span className="text-[#23A6F0]">/</span>
              
              {/* DÜZELTİLEN KISIM: signup yerine register yaptık */}
              <Link to="/register" className="hover:underline transition-all">
                Register
              </Link>
            </div>
          </div>

          {/* İkonlar Bölümü */}
          <div className="flex items-center gap-4">
            <Search size={20} className="cursor-pointer hover:scale-110 transition-transform" />
            
            <Link to="/cart" className="flex items-center gap-1 cursor-pointer hover:scale-110 transition-transform">
              <ShoppingCart size={20} />
              <span className="text-xs font-normal">1</span>
            </Link>

            <Link to="/wishlist" className="hidden md:flex items-center gap-1 cursor-pointer hover:scale-110 transition-transform">
              <Heart size={20} />
              <span className="text-xs font-normal">1</span>
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;