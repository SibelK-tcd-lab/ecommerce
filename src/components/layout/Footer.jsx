import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => (
  <footer className="bg-white py-16 container mx-auto px-10 border-t border-[#E6E6E6]">
    <div className="flex justify-between items-center mb-12">
      <h2 className="text-2xl font-bold text-[#252B42]">Bandage</h2>
      <div className="flex gap-6 text-[#23A6F0]">
        <Facebook/> <Instagram/> <Twitter/>
      </div>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-5 gap-12 text-sm font-bold text-[#737373]">
      <div className="space-y-4 text-[#252B42]"><h5>Company Info</h5><div className="font-bold text-[#737373] space-y-2"><p>About Us</p><p>Carrier</p><p>We are hiring</p><p>Blog</p></div></div>
      <div className="space-y-4 text-[#252B42]"><h5>Legal</h5><div className="font-bold text-[#737373] space-y-2"><p>Privacy</p><p>Terms</p></div></div>
      <div className="space-y-4 text-[#252B42]"><h5>Features</h5><div className="font-bold text-[#737373] space-y-2"><p>Marketing</p><p>Analytics</p></div></div>
      <div className="space-y-4 text-[#252B42]"><h5>Resources</h5><div className="font-bold text-[#737373] space-y-2"><p>Watch Demo</p><p>API</p></div></div>
      <div className="col-span-2 md:col-span-1 space-y-4">
        <h5 className="text-[#252B42]">Get In Touch</h5>
        <div className="flex"><input className="bg-[#F9F9F9] border p-3 flex-1" placeholder="Your Email"/><button className="bg-[#23A6F0] text-white px-4">Subscribe</button></div>
      </div>
    </div>
  </footer>
);

export default Footer;