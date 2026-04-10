import React from 'react';

const EditorsPick = () => {
  return (
    <section className="bg-[#FAFAFA] py-10 md:py-16 px-4 md:px-20">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl font-bold text-[#252B42] mb-2 uppercase">EDITOR'S PICK</h2>
          <p className="text-[#737373] text-sm">Problems trying to resolve the conflict between</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
          
          {/* MEN (id: 2) - Büyük Kare */}
          <div className="md:col-span-2 relative h-[500px] overflow-hidden group">
            <img 
              src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              alt="Modern Men Style" 
            />
            <button className="absolute bottom-6 left-6 bg-white px-10 py-3 font-bold text-[#252B42] uppercase shadow-md hover:bg-[#23A6F0] hover:text-white transition-colors">
              MEN
            </button>
          </div>

          {/* WOMEN (id: 1) - Orta Kare */}
          <div className="relative h-[500px] overflow-hidden group">
            <img 
              src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              alt="Modern Women Style" 
            />
            <button className="absolute bottom-6 left-6 bg-white px-8 py-3 font-bold text-[#252B42] uppercase shadow-md hover:bg-[#23A6F0] hover:text-white transition-colors">
              WOMEN
            </button>
          </div>

          {/* SAĞ TARAF: Küçük Kareler (Yükseklik Ayarlandı) */}
          <div className="flex flex-col gap-6 h-[500px]">
            
            {/* YOUTH (id: 4) - Yükseklik Küçültüldü */}
            <div className="relative h-[238px] overflow-hidden group">
              <img 
                src="https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=600" 
                className="w-full h-full object-cover group-hover:scale-105 transition-all" 
                alt="Youth Style" 
              />
              <button className="absolute bottom-4 left-4 bg-white px-6 py-2 font-bold text-[#252B42] text-sm uppercase shadow-sm hover:bg-[#23A6F0] hover:text-white transition-colors">
                YOUTH
              </button>
            </div>

            {/* CASUAL (id: 8) - Yükseklik Küçültüldü */}
            <div className="relative h-[238px] overflow-hidden group">
              <img 
                src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600" 
                className="w-full h-full object-cover group-hover:scale-105 transition-all" 
                alt="Casual Style" 
              />
              <button className="absolute bottom-4 left-4 bg-white px-8 py-2 font-bold text-[#252B42] text-sm uppercase shadow-sm hover:bg-[#23A6F0] hover:text-white transition-colors">
                CASUAL
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorsPick;