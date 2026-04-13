import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white w-full">
      {/* 1. KISIM: Marka Logoları (Hooli, Lyft, Stripe, AWS, Reddit) */}
      <div className="bg-[#FAFAFA] py-12">
        <div className="container mx-auto px-6 md:px-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Hooli.svg" alt="hooli" className="h-8 md:h-12" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Lyft_logo.svg" alt="lyft" className="h-8 md:h-12" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Pied_Piper_logo.svg" alt="pied-piper" className="h-8 md:h-12" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="stripe" className="h-8 md:h-12" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="aws" className="h-8 md:h-12" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Reddit_logo_new.svg" alt="reddit" className="h-8 md:h-12" />
          </div>
        </div>
      </div>

      {/* 2. KISIM: Logo ve Sosyal Medya */}
      <div className="bg-white py-10 border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <h3 className="text-2xl font-bold text-[#252B42]">Bandage</h3>
          <div className="flex gap-5 text-[#23A6F0]">
            <Facebook size={24} className="cursor-pointer hover:text-[#1a8cd1]" fill="#23A6F0" stroke="none" />
            <Instagram size={24} className="cursor-pointer hover:text-[#1a8cd1]" />
            <Twitter size={24} className="cursor-pointer hover:text-[#1a8cd1]" fill="#23A6F0" stroke="none" />
          </div>
        </div>
      </div>

      {/* 3. KISIM: Linkler ve Subscribe Formu */}
      <div className="container mx-auto px-6 md:px-20 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-[#252B42]">Company Info</h5>
            <nav className="flex flex-col gap-3 text-sm font-bold text-[#737373]">
              <a href="#" className="hover:text-[#23A6F0]">About Us</a>
              <a href="#" className="hover:text-[#23A6F0]">Carrier</a>
              <a href="#" className="hover:text-[#23A6F0]">We are hiring</a>
              <a href="#" className="hover:text-[#23A6F0]">Blog</a>
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-[#252B42]">Legal</h5>
            <nav className="flex flex-col gap-3 text-sm font-bold text-[#737373]">
              <a href="#" className="hover:text-[#23A6F0]">About Us</a>
              <a href="#" className="hover:text-[#23A6F0]">Carrier</a>
              <a href="#" className="hover:text-[#23A6F0]">We are hiring</a>
              <a href="#" className="hover:text-[#23A6F0]">Blog</a>
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-[#252B42]">Features</h5>
            <nav className="flex flex-col gap-3 text-sm font-bold text-[#737373]">
              <a href="#" className="hover:text-[#23A6F0]">Business Marketing</a>
              <a href="#" className="hover:text-[#23A6F0]">User Analytic</a>
              <a href="#" className="hover:text-[#23A6F0]">Live Chat</a>
              <a href="#" className="hover:text-[#23A6F0]">Unlimited Support</a>
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-[#252B42]">Resources</h5>
            <nav className="flex flex-col gap-3 text-sm font-bold text-[#737373]">
              <a href="#" className="hover:text-[#23A6F0]">IOS & Android</a>
              <a href="#" className="hover:text-[#23A6F0]">Watch a Demo</a>
              <a href="#" className="hover:text-[#23A6F0]">Customers</a>
              <a href="#" className="hover:text-[#23A6F0]">API</a>
            </nav>
          </div>

          {/* Subscribe Bölümü */}
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-[#252B42]">Get In Touch</h5>
            <div className="flex flex-col gap-2">
              <div className="flex h-14 w-full overflow-hidden rounded-md border border-[#E6E6E6]">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="px-4 py-3 bg-[#F9F9F9] text-[#737373] text-sm w-full outline-none"
                />
                <button className="bg-[#23A6F0] text-white px-6 py-3 text-sm hover:bg-[#1a8cd1] transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-[#737373] text-xs">Lore imp sum dolor Amit</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. KISIM: Alt Bant */}
      <div className="bg-[#FAFAFA] py-6">
        <div className="container mx-auto px-6 md:px-20 text-center md:text-left">
          <p className="text-[#737373] font-bold text-sm tracking-wide">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;