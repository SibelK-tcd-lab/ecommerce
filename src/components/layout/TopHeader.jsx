import React from 'react';
import { Phone, Mail, Instagram, Youtube, Facebook, Twitter, Search, ShoppingCart, Heart, User, ChevronRight } from 'lucide-react';

export const TopHeader = () => (
  <div className="bg-[#252B42] text-white py-3 px-10 hidden lg:flex justify-between items-center text-sm font-bold">
    <div className="flex gap-6">
      <div className="flex items-center gap-2"><Phone size={16}/> (225) 555-0118</div>
      <div className="flex items-center gap-2"><Mail size={16}/> michelle.rivera@example.com</div>
    </div>
    <div>Follow Us and get a chance to win 80% off</div>
    <div className="flex items-center gap-3">
      <span>Follow Us:</span>
      <Instagram size={16}/> <Youtube size={16}/> <Facebook size={16}/> <Twitter size={16}/>
    </div>
  </div>
);

export const Navbar = () => (
  <nav className="flex justify-between items-center py-6 px-10 bg-white">
    <div className="text-2xl font-bold tracking-tight text-[#252B42]">Bandage</div>
    <ul className="hidden md:flex gap-6 text-[#737373] font-bold">
      <li className="cursor-pointer hover:text-[#23A6F0]">Home</li>
      <li className="text-[#252B42] flex items-center gap-1 cursor-pointer">Shop <ChevronRight size={14} className="rotate-90"/></li>
      <li className="cursor-pointer hover:text-[#23A6F0]">About</li>
      <li className="cursor-pointer hover:text-[#23A6F0]">Blog</li>
      <li className="cursor-pointer hover:text-[#23A6F0]">Contact</li>
      <li className="cursor-pointer hover:text-[#23A6F0]">Pages</li>
    </ul>
    <div className="flex items-center gap-5 text-[#23A6F0] font-bold text-sm">
      <div className="flex items-center gap-1 cursor-pointer"><User size={18}/> Login / Register</div>
      <Search size={20} className="cursor-pointer"/>
      <div className="flex items-center gap-1 cursor-pointer"><ShoppingCart size={20}/> 1</div>
      <div className="flex items-center gap-1 cursor-pointer"><Heart size={20}/> 1</div>
    </div>
  </nav>
);