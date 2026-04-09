import React from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Mail, Instagram, Youtube, Facebook, Twitter } from 'lucide-react';

const TopHeader = () => {
  const location = useLocation();
  const isShop = location.pathname === '/shop';

  return (
    <div className={`${isShop ? 'bg-[#23856D]' : 'bg-[#252B42]'} text-white py-3 px-10 hidden lg:flex justify-between items-center text-sm font-bold transition-colors`}>
      <div className="flex gap-6">
        <div className="flex items-center gap-2"><Phone size={16}/> (225) 555-0118</div>
        <div className="flex items-center gap-2"><Mail size={16}/> michelle.rivera@example.com</div>
      </div>
      <div className="flex items-center gap-3">
        <span>Follow Us:</span>
        <Instagram size={16}/> <Youtube size={16}/> <Facebook size={16}/> <Twitter size={16}/>
      </div>
    </div>
  );
};

export default TopHeader;