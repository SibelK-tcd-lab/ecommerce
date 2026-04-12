import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => (
  <footer className="bg-white">
    {/* Üst Kısım: Logo ve Sosyal Medya (Hafif Gri Arka Plan) */}
    <div className="bg-[#FAFAFA] py-10 border-t border-[#E6E6E6]">
      <div className="container mx-auto px-10 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-[#252B42]">Bandage</h2>
        <div className="flex gap-5 text-[#23A6F0]">
          <Facebook className="cursor-pointer hover:text-[#1a8cd1]" size={24} />
          <Instagram className="cursor-pointer hover:text-[#e4405f]" size={24} />
          <Twitter className="cursor-pointer hover:text-[#1da1f2]" size={24} />
        </div>
      </div>
    </div>

    {/* Orta Kısım: Ana Linkler (Beyaz Arka Plan) */}
    <div className="container mx-auto px-10 py-16">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-12 text-sm">
        <div className="space-y-5">
          <h5 className="font-bold text-[#252B42]">Company Info</h5>
          <div className="font-bold text-[#737373] space-y-3">
            <p className="cursor-pointer hover:text-[#23A6F0]">About Us</p>
            <p className="cursor-pointer hover:text-[#23A6F0]">Carrier</p>
            <p className="cursor-pointer hover:text-[#23A6F0]">We are hiring</p>
            <p className="cursor-pointer hover:text-[#23A6F0]">Blog</p>
          </div>
        </div>
        <div className="space-y-5">
          <h5 className="font-bold text-[#252B42]">Legal</h5>
          <div className="font-bold text-[#737373] space-y-3">
            <p className="cursor-pointer hover:text-[#23A6F0]">Privacy</p>
            <p className="cursor-pointer hover:text-[#23A6F0]">Terms</p>
          </div>
        </div>
        <div className="space-y-5">
          <h5 className="font-bold text-[#252B42]">Features</h5>
          <div className="font-bold text-[#737373] space-y-3">
            <p className="cursor-pointer hover:text-[#23A6F0]">Marketing</p>
            <p className="cursor-pointer hover:text-[#23A6F0]">Analytics</p>
          </div>
        </div>
        <div className="space-y-5">
          <h5 className="font-bold text-[#252B42]">Resources</h5>
          <div className="font-bold text-[#737373] space-y-3">
            <p className="cursor-pointer hover:text-[#23A6F0]">Watch Demo</p>
            <p className="cursor-pointer hover:text-[#23A6F0]">API</p>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 space-y-5">
          <h5 className="font-bold text-[#252B42]">Get In Touch</h5>
          <div className="flex h-12 overflow-hidden rounded-md border border-[#E6E6E6]">
            <input 
              className="bg-[#F9F9F9] px-4 flex-1 text-xs outline-none" 
              placeholder="Your Email"
            />
            <button className="bg-[#23A6F0] text-white px-4 text-xs font-normal transition-colors hover:bg-[#1a8cd1]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Alt Kısım: Sola Yatık Copyright Metni (Gri Arka Plan) */}
    <div className="bg-[#FAFAFA] py-6 border-t border-[#E6E6E6]">
      <div className="container mx-auto px-10">
        <p className="text-[#737373] font-bold text-sm text-left">
          Made With Love By Finland All Right Reserved 
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;