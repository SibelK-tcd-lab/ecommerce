import React from 'react';
import { Search, ShoppingCart, Heart, User, ChevronRight } from 'lucide-react';

const Navbar = () => (
  <nav className="flex justify-between items-center py-6 px-10 bg-white">
    <div className="text-2xl font-bold tracking-tight text-[#252B42]">Bandage</div>
    <ul className="hidden md:flex gap-6 text-[#737373] font-bold">
      <li>Home</li>
      <li className="text-[#252B42] flex items-center gap-1">Shop <ChevronRight size={14} className="rotate-90"/></li>
      <li>About</li>
      <li>Blog</li>
      <li>Contact</li>
      <li>Pages</li>
    </ul>
    <div className="flex items-center gap-5 text-[#23A6F0] font-bold text-sm">
      <div className="flex items-center gap-1"><User size={18}/> Login / Register</div>
      <Search size={20}/>
      <div className="flex items-center gap-1"><ShoppingCart size={20}/> 1</div>
      <div className="flex items-center gap-1"><Heart size={20}/> 1</div>
    </div>
  </nav>
);

export default Navbar;