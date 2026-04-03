import React from 'react';
import { Phone, Mail, Instagram, Youtube, Facebook, Twitter } from 'lucide-react';

const TopHeader = () => (
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

export default TopHeader;