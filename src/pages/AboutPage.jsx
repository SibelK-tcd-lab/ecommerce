import React from 'react';
import { Twitter, Instagram, Facebook, Play } from 'lucide-react';

const AboutPage = () => {
  // Senin istediğin 3 kişilik özel kadro
  const team = [
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
    },
  ];

  return (
    <div className="bg-white text-[#252B42] font-sans">
      
      {/* SECTION 1: HERO (Başlık küçültüldü ve tek görsel eklendi) */}
      <section className="container mx-auto px-6 md:px-20 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h5 className="uppercase font-bold text-sm tracking-widest text-[#252B42]">About Company</h5>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight">About Us</h1>
          <p className="text-[#737373] text-lg max-w-sm mx-auto md:mx-0">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="bg-[#23A6F0] text-white px-8 py-3 rounded-md font-bold hover:bg-[#1a8cd1] transition-all shadow-md">
            Get Quote Now
          </button>
        </div>
        
        {/* Editor's Pick'ten gelen o tek ve sade fotoğraf */}
        <div className="md:w-1/2 relative h-[400px] md:h-[500px] overflow-hidden group rounded-sm shadow-lg">
          <img 
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            alt="About Featured" 
          />
        </div>
      </section>

      {/* SECTION 2: STATS */}
      <section className="container mx-auto px-6 py-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-gray-50">
        <div><h2 className="text-5xl font-black">15K</h2><p className="text-[#737373] font-bold">Happy Customers</p></div>
        <div><h2 className="text-5xl font-black">150K</h2><p className="text-[#737373] font-bold">Monthly Visitors</p></div>
        <div><h2 className="text-5xl font-black">15</h2><p className="text-[#737373] font-bold">Countries Worldwide</p></div>
        <div><h2 className="text-5xl font-black">100+</h2><p className="text-[#737373] font-bold">Top Partners</p></div>
      </section>

      {/* SECTION 3: VIDEO Tanıtım */}
      <section className="container mx-auto px-6 md:px-40 py-16">
        <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl group cursor-pointer">
          <img 
            src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            className="w-full h-full object-cover" 
            alt="Video Preview"
          />
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
            <button className="w-20 h-20 bg-[#23A6F0] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg">
              <Play fill="white" size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: MEET OUR TEAM (3 Kişilik Ekip) */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 md:px-24">
          <div className="mb-20">
            <h2 className="text-4xl font-black mb-4 tracking-tight">Meet Our Team</h2>
            <p className="text-[#737373] max-w-md mx-auto">
              Problems trying to resolve the conflict between the two major realms of Classical physics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member) => (
              <div key={member.id} className="flex flex-col items-center group">
                <div className="w-full aspect-square overflow-hidden mb-6 rounded-sm shadow-sm">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                <h5 className="font-bold text-lg text-[#252B42]">{member.name}</h5>
                <p className="text-[#737373] font-bold text-sm mb-4 uppercase tracking-widest">{member.role}</p>
                <div className="flex gap-4 text-[#23A6F0]">
                  <Facebook size={20} fill="currentColor" className="cursor-pointer hover:text-[#252B42]" />
                  <Instagram size={20} className="cursor-pointer hover:text-[#252B42]" />
                  <Twitter size={20} fill="currentColor" className="cursor-pointer hover:text-[#252B42]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WORK WITH US (Yazı Netliği Düzeltildi) */}
      <section className="flex flex-col md:flex-row min-h-[500px]">
        <div className="md:w-[60%] bg-[#23A6F0] text-white p-12 md:p-24 flex flex-col justify-center items-center md:items-start space-y-6 text-center md:text-left">
          <h5 className="font-bold tracking-widest uppercase text-sm">Work with us</h5>
          <h2 className="text-4xl md:text-5xl font-black leading-tight">Now Let's grow Yours</h2>
          
          {/* Yazı rengi text-white yapılarak grileşme giderildi */}
          <p className="max-w-md text-white text-lg leading-relaxed font-medium">
            The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th century.
          </p>
          
          <button className="border-2 border-white px-10 py-3 rounded-md font-bold hover:bg-white hover:text-[#23A6F0] transition-all shadow-lg">
            Join Our Team
          </button>
        </div>
        <div className="md:w-[40%] hidden md:block">
          <img 
            src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800" 
            className="w-full h-full object-cover" 
            alt="Office Working" 
          />
        </div>
      </section>

    </div>
  );
};

export default AboutPage;