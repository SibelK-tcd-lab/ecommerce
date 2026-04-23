import React from 'react';
import { useDispatch } from 'react-redux';
import { Twitter, Instagram, Facebook } from 'lucide-react';

const TeamPage = () => {
  const dispatch = useDispatch();

  // Sabit 3 kişi + 6 Yeni ve Farklı Görselli Üye
  const teamMembers = [
    { id: 1, name: "Gökhan Özdemir", role: "Project Manager", img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 2, name: "Sibel Karakelle", role: "Frontend Developer", img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 6, name: "Kemal Gültekin", role: "Quality Assurance", img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 3, name: "Jacob Jones", role: "Product Owner", img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 4, name: "Kathryn Murphy", role: "UX Designer", img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 5, name: "Marvin McKinney", role: "Backend Developer", img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 7, name: "Eleanor Pena", role: "DevOps Engineer", img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 8, name: "Floyd Miles", role: "Data Scientist", img: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 9, name: "Dianne Russell", role: "Marketing Lead", img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ];

  const handleRemoveMember = (member) => {
    // Redux tarafında sepetten silme mantığıyla aynı yapıyı kurduk
    dispatch({
      type: 'REMOVE_MEMBER_FROM_VIEW', 
      payload: { id: member.id, name: member.name }
    });
  };

  return (
    <section className="py-24 bg-white text-center">
      <div className="container mx-auto px-6 md:px-24">
        {/* Header - Görseldeki formatta */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-[#252B42]">
            Meet Our <span className="bg-[#23A6F0]/10 text-[#23A6F0] px-2 rounded">Team</span>
          </h2>
          <p className="text-[#737373] max-w-lg mx-auto font-medium">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
          </p>
        </div>
        
        {/* Team Grid - 9 Kişilik Dinamik Yapı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center group transition-all duration-300 relative border p-6 rounded-xl shadow-sm hover:shadow-lg hover:border-[#23A6F0]/20">
              
              {/* ÇIKAR BUTONU (X) - Hover durumunda görünür */}
              <button 
                onClick={() => handleRemoveMember(member)}
                className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors text-2xl leading-none p-1 opacity-0 group-hover:opacity-100"
              >
                &times;
              </button>

              {/* Görsel Alanı */}
              <div className="w-full aspect-[4/5] overflow-hidden mb-6 shadow-md rounded-lg relative">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" 
                />
              </div>
              
              {/* Bilgi Alanı */}
              <div className="text-left w-full">
                <h5 className="font-bold text-xl text-[#252B42] mb-1">{member.name}</h5>
                <p className="text-[#737373] font-bold text-sm mb-4 uppercase tracking-widest">{member.role}</p>
                
                {/* ID ve Departman Detayları */}
                <div className="border-t pt-4 space-y-1 text-xs text-gray-400 uppercase font-medium">
                  <p>Employee ID: <span className="font-bold text-[#252B42]">{member.id}</span></p>
                  <p>Office: <span className="font-bold text-[#252B42]">Antalya Branch</span></p>
                </div>
              </div>
              
              {/* Sosyal Medya İkonları */}
              <div className="flex gap-5 text-[#23A6F0] mt-6 border-t pt-4 w-full justify-center">
                <Facebook size={20} fill="currentColor" className="hover:scale-125 transition-transform cursor-pointer" />
                <Instagram size={20} className="hover:scale-125 transition-transform cursor-pointer" />
                <Twitter size={20} fill="currentColor" className="hover:scale-125 transition-transform cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPage;