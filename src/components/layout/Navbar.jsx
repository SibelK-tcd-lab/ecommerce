import React, { useState } from 'react';
import { User, Search, ShoppingCart, Heart, ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Mobil menünün açık/kapalı durumunu kontrol eden state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white py-4 px-4 md:px-10">
      <div className="container mx-auto">
        
        {/* ÜST KISIM: Logo ve Mobil İkonlar */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-[#252B42]">
            Bandage
          </Link>

          {/* MOBİL SAĞ TARAF: Arama, Sepet ve Hamburger Menü */}
          <div className="flex items-center gap-4 md:hidden">
            <Search size={24} className="text-[#252B42]" />
            <ShoppingCart size={24} className="text-[#252B42]" />
            {/* Menü açma/kapama butonu */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>

          {/* MASAÜSTÜ MENÜ (md ve üzerinde görünür) */}
          <div className="hidden md:flex items-center gap-6 text-[#737373] font-bold">
            <Link to="/" className="hover:text-[#23A6F0]">Home</Link>
            <Link to="/shop" className="flex items-center gap-1 hover:text-[#23A6F0]">
              Shop <ChevronDown size={16} />
            </Link>
            <Link to="/about" className="hover:text-[#23A6F0]">About</Link>
            <Link to="/blog" className="hover:text-[#23A6F0]">Blog</Link>
            <Link to="/contact" className="hover:text-[#23A6F0]">Contact</Link>
            <Link to="/pages" className="hover:text-[#23A6F0]">Pages</Link>
          </div>

          {/* MASAÜSTÜ SAĞ TARAF (Login/Register ve İkonlar) */}
          <div className="hidden md:flex items-center gap-4 text-[#23A6F0] font-bold">
            <div className="flex items-center gap-2">
              <User size={18} />
              <Link to="/login" className="hover:underline">Login</Link>
              <span>/</span>
              <Link to="/register" className="hover:underline">Register</Link>
            </div>
            <Search size={20} />
            <div className="flex items-center gap-1">
              <ShoppingCart size={20} /> <span className="text-xs font-normal">1</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart size={20} /> <span className="text-xs font-normal">1</span>
            </div>
          </div>
        </div>

        {/* MOBİL MENÜ İÇERİĞİ (Açıldığında dikey liste olarak görünür) */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center gap-8 py-10 text-[#737373] text-2xl font-normal">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Link to="/pages" onClick={() => setIsMenuOpen(false)}>Pages</Link>

            {/* Mobil Login / Register */}
            <div className="flex flex-col items-center gap-6 mt-4 text-[#23A6F0] font-medium">
              <div className="flex flex-col items-center gap-2">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
                <span className="hidden">/</span>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>Register</Link>
              </div>
              
              {/* Mobil Alt İkonlar ve Sayılar */}
              <div className="flex flex-col items-center gap-6">
                <Search size={28} />
                <div className="flex items-center gap-2">
                  <ShoppingCart size={28} /> <span>1</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart size={28} /> <span>1</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;