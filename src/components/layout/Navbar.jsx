import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Heart, User, ChevronDown } from 'lucide-react';

const Navbar = () => (
  <nav className="flex justify-between items-center py-6 px-10 bg-white">
    <div className="text-2xl font-bold tracking-tight text-[#252B42]">
      <Link to="/">Bandage</Link>
    </div>
    <ul className="hidden md:flex gap-6 text-[#737373] font-bold">
      <li><Link to="/" className="hover:text-[#23A6F0]">Home</Link></li>
      <li className="text-[#252B42] flex items-center gap-1">
        <Link to="/shop" className="hover:text-[#23A6F0]">Shop</Link>
        <ChevronDown size={14}/>
      </li>
      <li><Link to="/about" className="hover:text-[#23A6F0]">About</Link></li>
      <li><Link to="/blog" className="hover:text-[#23A6F0]">Blog</Link></li>
      <li><Link to="/contact" className="hover:text-[#23A6F0]">Contact</Link></li>
    </ul>
    {/* Sağ taraf (Iconlar) aynı kalabilir */}
  </nav>
);

export default Navbar;