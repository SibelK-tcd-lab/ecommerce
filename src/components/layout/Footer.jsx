import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white w-full">
      {/* ÜST KISIM: Logo ve Sosyal Medya */}
      <div className="bg-[#FAFAFA] py-8 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-20 flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-xl font-bold text-[#252B42]">Bandage</h2>
          <div className="flex gap-4 text-[#23A6F0]">
            <Facebook className="cursor-pointer hover:scale-110 transition-transform" size={20} fill="#23A6F0" stroke="none" />
            <Instagram className="cursor-pointer hover:scale-110 transition-transform" size={20} />
            <Twitter className="cursor-pointer hover:scale-110 transition-transform" size={20} fill="#23A6F0" stroke="none" />
          </div>
        </div>
      </div>

      {/* ORTA KISIM: Link Grupları ve Subscribe */}
      <div className="container mx-auto px-4 md:px-20 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          
          {/* Link Kolonları */}
          <div className="space-y-3">
            <h5 className="font-bold text-[#252B42] text-sm">Company Info</h5>
            <nav className="flex flex-col gap-2 text-[#737373] font-bold text-[13px]">
              <a href="#" className="hover:text-[#23A6F0]">About Us</a>
              <a href="#" className="hover:text-[#23A6F0]">Carrier</a>
              <a href="#" className="hover:text-[#23A6F0]">We are hiring</a>
              <a href="#" className="hover:text-[#23A6F0]">Blog</a>
            </nav>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold text-[#252B42] text-sm">Legal</h5>
            <nav className="flex flex-col gap-2 text-[#737373] font-bold text-[13px]">
              <a href="#" className="hover:text-[#23A6F0]">Privacy Policy</a>
              <a href="#" className="hover:text-[#23A6F0]">Terms of Service</a>
              <a href="#" className="hover:text-[#23A6F0]">Cookie Policy</a>
            </nav>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold text-[#252B42] text-sm">Features</h5>
            <nav className="flex flex-col gap-2 text-[#737373] font-bold text-[13px]">
              <a href="#" className="hover:text-[#23A6F0]">Business Marketing</a>
              <a href="#" className="hover:text-[#23A6F0]">User Analytic</a>
              <a href="#" className="hover:text-[#23A6F0]">Live Chat</a>
              <a href="#" className="hover:text-[#23A6F0]">Unlimited Support</a>
            </nav>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold text-[#252B42] text-sm">Resources</h5>
            <nav className="flex flex-col gap-2 text-[#737373] font-bold text-[13px]">
              <a href="#" className="hover:text-[#23A6F0]">IOS & Android</a>
              <a href="#" className="hover:text-[#23A6F0]">Watch a Demo</a>
              <a href="#" className="hover:text-[#23A6F0]">Customers</a>
              <a href="#" className="hover:text-[#23A6F0]">API</a>
            </nav>
          </div>

          {/* Subscribe Bölümü - Vercel Fix Uygulandı */}
          <div className="space-y-3">
            <h5 className="font-bold text-[#252B42] text-sm">Get In Touch</h5>
            <div className="flex h-11 w-full max-w-full overflow-hidden rounded-md border border-[#E6E6E6]">
              <input 
                type="email"
                placeholder="Your Email"
                className="bg-[#F9F9F9] px-3 flex-1 text-[12px] outline-none text-[#737373] min-w-0" 
              />
              <button 
                type="button"
                className="bg-[#23A6F0] text-white px-4 text-[12px] font-normal transition-colors hover:bg-[#1a8cd1] whitespace-nowrap flex-shrink-0"
              >
                Subscribe
              </button>
            </div>
            <p className="text-[#737373] text-[11px] font-medium leading-none">
              Lore imp sum dolor Amit
            </p>
          </div>

        </div>
      </div>

      {/* ALT KISIM: Copyright */}
      <div className="bg-[#FAFAFA] py-6">
        <div className="container mx-auto px-4 md:px-20">
          <p className="text-[#737373] font-bold text-[13px] text-center md:text-left">
            Made With Love By Finland All Right Reserved 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 