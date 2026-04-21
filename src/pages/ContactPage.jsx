import React from 'react';
import { Twitter, Instagram, Linkedin, Facebook, Phone, MapPin, Mail } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-[#252B42]">
      
      {/* 1. Hero Section: Yeni Alışveriş Görseli ve Estetik Başlıklar */}
      <section className="container mx-auto px-6 md:px-20 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        <div className="flex-1 order-2 md:order-1 px-4">
          <h6 className="text-sm font-bold tracking-[0.2em] text-[#252B42] uppercase mb-6">
            CONTACT US
          </h6>
          <h1 className="text-4xl md:text-5xl lg:text-[58px] font-bold mb-8 leading-[1.1] tracking-[-0.03em]">
            Get in touch <br className="hidden md:block"/> today!
          </h1>
          <p className="text-[#737373] text-lg font-medium mb-10 max-w-sm mx-auto md:mx-0 leading-relaxed">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="space-y-2 mb-12">
            <h4 className="font-bold text-xl tracking-tight">Phone : +451 215 215 </h4>
            <h4 className="font-bold text-xl tracking-tight">Fax : +451 215 215</h4>
          </div>
          {/* Sosyal Medya İkonları */}
          <div className="flex justify-center md:justify-start gap-8 text-[#252B42]">
            <Twitter size={26} fill="currentColor" className="hover:text-[#23A6F0] transition-all cursor-pointer" />
            <Facebook size={26} fill="currentColor" className="hover:text-[#23A6F0] transition-all cursor-pointer" />
            <Instagram size={26} className="hover:text-[#23A6F0] transition-all cursor-pointer" />
            <Linkedin size={26} fill="currentColor" className="hover:text-[#23A6F0] transition-all cursor-pointer" />
          </div>
        </div>

        {/* Yeni Kahraman Görseli: Alışveriş Yapan Mutlu Arkadaşlar */}
        <div className="flex-1 order-1 md:order-2 px-6">
          <img 
            src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Happy Friends Shopping" 
            className="w-full max-w-[600px] md:max-w-none mx-auto object-cover rounded-[3rem] shadow-2xl transition-transform hover:scale-[1.02] duration-500"
          />
        </div>
      </section>

      {/* 2. Office Cards Section: Kurumsal ve Temiz */}
      <section className="py-24 bg-[#FAFAFA] text-center px-6">
        <h6 className="text-xs font-bold mb-4 uppercase tracking-[0.2em] text-[#252B42]">VISIT OUR OFFICE</h6>
        <h2 className="text-3xl md:text-4xl font-bold mb-24 tracking-tight leading-tight">
          We help small businesses <br className="hidden md:block" /> with big ideas
        </h2>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 max-w-5xl">
          {/* Kart 1: Telefon */}
          <div className="flex flex-col items-center p-12 bg-white border border-gray-100 md:border-r-0 md:rounded-l-2xl h-full">
            <Phone size={64} className="text-[#23A6F0] mb-8" />
            <div className="text-xs font-bold mb-6 space-y-1">
              <p>george.24@example.com</p>
              <p>george.24@gmail.com</p>
            </div>
            <h5 className="font-bold text-sm mb-8 uppercase tracking-wider">Get Support</h5>
            <button className="border-2 border-[#23A6F0] text-[#23A6F0] px-8 py-3.5 rounded-full font-bold hover:bg-[#23A6F0] hover:text-white transition-all text-[10px] uppercase tracking-widest">
              Submit Request
            </button>
          </div>

          {/* Kart 2: Konum (Vurgulu) */}
          <div className="flex flex-col items-center p-14 bg-[#252B42] text-white shadow-2xl py-20 z-10 md:scale-105 rounded-2xl md:rounded-none">
            <MapPin size={64} className="text-[#23A6F0] mb-8" />
            <div className="text-xs font-bold mb-6 space-y-1">
              <p>george.24@example.com</p>
              <p>george.24@gmail.com</p>
            </div>
            <h5 className="font-bold text-sm mb-8 uppercase tracking-wider text-white">Support</h5>
            <button className="border-2 border-[#23A6F0] text-[#23A6F0] px-8 py-3.5 rounded-full font-bold hover:bg-[#23A6F0] hover:text-white transition-all text-[10px] uppercase tracking-widest">
              Submit Request
            </button>
          </div>

          {/* Kart 3: Email */}
          <div className="flex flex-col items-center p-12 bg-white border border-gray-100 md:border-l-0 md:rounded-r-2xl h-full">
            <Mail size={64} className="text-[#23A6F0] mb-8" />
            <div className="text-xs font-bold mb-6 space-y-1">
              <p>george.24@example.com</p>
              <p>george.24@gmail.com</p>
            </div>
            <h5 className="font-bold text-sm mb-8 uppercase tracking-wider">Get Support</h5>
            <button className="border-2 border-[#23A6F0] text-[#23A6F0] px-8 py-3.5 rounded-full font-bold hover:bg-[#23A6F0] hover:text-white transition-all text-[10px] uppercase tracking-widest">
              Submit Request
            </button>
          </div>
        </div>
      </section>

      {/* 3. Let's Talk Section: Zarif Bitiş */}
      <section className="py-28 text-center bg-white">
        <h6 className="text-xs font-bold mb-5 uppercase tracking-[0.3em] text-[#252B42]">We Can't Wait To Meet You</h6>
        <h2 className="text-4xl md:text-[58px] font-bold mb-12 tracking-tighter">Let’s Talk</h2>
        <button className="bg-[#23A6F0] text-white px-14 py-5 rounded-md font-bold text-xs hover:bg-[#1a8cd1] shadow-2xl transition-all active:scale-95 uppercase tracking-widest">
          Try it free now
        </button>
      </section>
    </div>
  );
};

export default ContactPage;