import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => (
  <footer className="bg-white">
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

    {/* ORTA KISIM: Linkler ve Subscribe */}
    <div className="container mx-auto px-4 md:px-20 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        
        {/* Kolon Şablonu (Daha küçük gap-2 ile) */}
        {[
          { title: "Company Info", links: ["About Us", "Carrier", "We are hiring", "Blog"] },
          { title: "Legal", links: ["About Us", "Carrier", "We are hiring", "Blog"] },
          { title: "Features", links: ["Business Marketing", "User Analytic", "Live Chat", "Unlimited Support"] },
          { title: "Resources", links: ["IOS & Android", "Watch a Demo", "Customers", "API"] }
        ].map((column, idx) => (
          <div key={idx} className="space-y-3">
            <h5 className="font-bold text-[#252B42] text-sm">{column.title}</h5>
            <div className="flex flex-col gap-2 text-[#737373] font-bold text-[13px]">
              {column.links.map(link => (
                <a key={link} href="#" className="hover:text-[#23A6F0] transition-colors">{link}</a>
              ))}
            </div>
          </div>
        ))}

        {/* Subscribe Bölümü (Biraz daha kompakt) */}
        <div className="space-y-3">
          <h5 className="font-bold text-[#252B42] text-sm">Get In Touch</h5>
          <div className="flex h-11 w-full overflow-hidden rounded-md border border-[#E6E6E6]">
            <input 
              type="email"
              placeholder="Your Email"
              className="bg-[#F9F9F9] px-3 flex-1 text-[12px] outline-none text-[#737373]"
            />
            <button className="bg-[#23A6F0] text-white px-4 text-[12px] transition-colors hover:bg-[#1a8cd1] whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-[#737373] text-[11px]">Lore imp sum dolor Amit</p>
        </div>

      </div>
    </div>

    {/* ALT KISIM: Copyright */}
    <div className="bg-[#FAFAFA] py-5">
      <div className="container mx-auto px-4 md:px-20">
        <p className="text-[#737373] font-bold text-[13px]">
          Made With Love By Finland All Right Reserved 
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;