import React from 'react';
import { Twitter, Instagram, Facebook, Play } from 'lucide-react';

const AboutPage = () => {
  // İstediğin 3 kişilik özel ekip listesi
  const teamMembers = [
    { 
      id: 1, 
      name: "Gökhan Özdemir", 
      role: "Project Manager", 
      img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400" 
    },
    { 
      id: 2, 
      name: "Sibel Karakelle", 
      role: "Frontend Developer", 
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400" 
    },
    { 
      id: 6, 
      name: "Kemal Gültekin", 
      role: "Quality Assurance", 
      img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
    }
  ];

  return (
    <div className="bg-white text-[#252B42] font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="container mx-auto px-6 md:px-20 py-20 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h5 className="uppercase font-bold text-sm tracking-widest text-[#252B42]">About Company</h5>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">ABOUT US</h1>
          <p className="text-[#737373] text-lg max-w-sm mx-auto md:mx-0">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="bg-[#23A6F0] text-white px-10 py-4 rounded-md font-bold text-sm uppercase tracking-widest hover:bg-[#1a8cd1] shadow-lg transition-all">
            Get Quote Now
          </button>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Hero Shopping" 
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="container mx-auto px-6 py-24 grid grid-cols-2 md:grid-cols-4 gap-12 text-center border-t border-gray-50">
        <div><h2 className="text-6xl font-black mb-2">15K</h2><p className="text-[#737373] font-bold uppercase text-sm tracking-widest">Happy Customers</p></div>
        <div><h2 className="text-6xl font-black mb-2">150K</h2><p className="text-[#737373] font-bold uppercase text-sm tracking-widest">Monthly Visitors</p></div>
        <div><h2 className="text-6xl font-black mb-2">15</h2><p className="text-[#737373] font-bold uppercase text-sm tracking-widest">Countries Worldwide</p></div>
        <div><h2 className="text-6xl font-black mb-2">100+</h2><p className="text-[#737373] font-bold uppercase text-sm tracking-widest">Top Partners</p></div>
      </section>

      {/* 3. VIDEO AREA */}
      <section className="container mx-auto px-6 md:px-40 py-20">
        <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl group cursor-pointer">
          <img 
            src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            alt="Nature Video"
          />
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
            <div className="w-24 h-24 bg-[#23A6F0] rounded-full flex items-center justify-center text-white shadow-2xl animate-pulse">
              <Play fill="white" size={36} />
            </div>
          </div>
        </div>
      </section>

      {/* 4. MEET OUR TEAM (Güncellenmiş 3 Kişilik Dev Kadro) */}
      <section className="py-32 bg-white text-center">
        <div className="container mx-auto px-6 md:px-24">
          <div className="mb-24">
            <h2 className="text-5xl font-black mb-6 tracking-tighter">Meet Our Team</h2>
            <p className="text-[#737373] max-w-lg mx-auto font-medium">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-center group">
                <div className="w-full aspect-[4/5] overflow-hidden mb-8 shadow-sm rounded-lg">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                <h5 className="font-bold text-xl text-[#252B42] mb-1">{member.name}</h5>
                <p className="text-[#737373] font-bold text-sm mb-6 uppercase tracking-[0.15em]">{member.role}</p>
                <div className="flex gap-6 text-[#23A6F0]">
                  <Facebook size={22} fill="currentColor" className="hover:scale-125 transition-transform cursor-pointer" />
                  <Instagram size={22} className="hover:scale-125 transition-transform cursor-pointer" />
                  <Twitter size={22} fill="currentColor" className="hover:scale-125 transition-transform cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WORK WITH US FOOTER */}
      <section className="flex flex-col md:flex-row min-h-[600px] mt-20">
        <div className="md:w-[60%] bg-[#23A6F0] text-white p-12 md:p-32 flex flex-col justify-center items-center md:items-start space-y-8 text-center md:text-left">
          <h5 className="font-black tracking-[0.2em] uppercase text-sm opacity-90">Work with us</h5>
          <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tighter">Now Let's grow Yours</h2>
          <p className="max-w-md text-lg leading-relaxed opacity-80">
            The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th century.
          </p>
          <button className="border-2 border-white px-12 py-4 rounded-md font-bold uppercase tracking-widest hover:bg-white hover:text-[#23A6F0] transition-all shadow-xl">
            Join Our Team
          </button>
        </div>
        <div className="md:w-[40%] hidden md:block">
          <img 
            src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800" 
            className="w-full h-full object-cover grayscale-[20%] contrast-110" 
            alt="Modern Office" 
          />
        </div>
      </section>

    </div>
  );
};

export default AboutPage; 