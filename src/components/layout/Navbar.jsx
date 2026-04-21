import React, { useState } from 'react';
import { User, Search, ShoppingCart, Heart, ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white py-4 px-4 md:px-10 sticky top-0 z-[100] shadow-sm">
      <div className="container mx-auto">
        
        {/* Logo and Mobile Icons */}
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-[#252B42]">
            Bandage
          </Link>

          {/* MOBILE RIGHT SIDE */}
          <div className="flex items-center gap-4 md:hidden">
            <Search size={24} className="text-[#252B42]" />
            <ShoppingCart size={24} className="text-[#252B42]" />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6 text-[#737373] font-bold text-sm">
            <Link to="/" className="hover:text-[#23A6F0]">Home</Link>
            <Link to="/shop" className="flex items-center gap-1 hover:text-[#23A6F0]">
              Shop <ChevronDown size={16} />
            </Link>
            <Link to="/about" className="hover:text-[#23A6F0]">About</Link>
            <Link to="/blog" className="hover:text-[#23A6F0]">Blog</Link>
            <Link to="/contact" className="hover:text-[#23A6F0]">Contact</Link>
            
            <div className="relative group cursor-pointer py-2">
              <div className="flex items-center gap-1 group-hover:text-[#23A6F0]">
                Pages <ChevronDown size={16} />
              </div>
              <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl border border-gray-100 rounded-md py-3 min-w-[140px]">
                <Link to="/team" className="block px-6 py-2 hover:bg-gray-50 hover:text-[#23A6F0] transition-colors">
                  Team
                </Link>
              </div>
            </div>
          </div>

          {/* DESKTOP RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-4 text-[#23A6F0] font-bold">
            <div className="flex items-center gap-2">
              <User size={18} />
              <Link to="/login" className="hover:underline">Login</Link>
              <span>/</span>
              {/* T08: Link must go to /signup */}
              <Link to="/signup" className="hover:underline">Register</Link>
            </div>
            <Search size={20} className="cursor-pointer" />
            <div className="flex items-center gap-1 cursor-pointer">
              <ShoppingCart size={20} /> <span className="text-xs font-normal">1</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <Heart size={20} /> <span className="text-xs font-normal">1</span>
            </div>
          </div>
        </div>

        {/* MOBILE MENU CONTENT */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center gap-6 py-10 text-[#737373] text-2xl font-normal bg-white">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/team" onClick={() => setIsMenuOpen(false)}>Team</Link>
            <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>

            <div className="flex flex-col items-center gap-6 mt-4 text-[#23A6F0] font-medium text-xl">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>Register</Link>
              <div className="flex gap-8 mt-4">
                <Search size={28} />
                <div className="flex items-center gap-1">
                  <ShoppingCart size={28} /> <span>1</span>
                </div>
                <div className="flex items-center gap-1">
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