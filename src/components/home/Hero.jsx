import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Swiper Stilleri
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
  const slides = [
    { id: 1, img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200", title: "NEW COLLECTION" },
    { id: 2, img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1200", title: "URBAN STYLE" },
    { id: 3, img: "https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&w=1200", title: "MODERN LOOK" },
    { id: 4, img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1200", title: "STREET WEAR" }
  ];

  return (
    <section className="w-full h-[600px] md:h-[800px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Arka Plan Görseli */}
              <img 
                src={slide.img} 
                className="w-full h-full object-cover" 
                alt={slide.title} 
              />
              
              {/* İçerik Katmanı */}
              <div className="absolute inset-0 bg-black/20 flex flex-col justify-center items-start px-8 md:px-32 text-white">
                <div className="container mx-auto">
                  <h5 className="font-bold mb-4 tracking-widest text-sm md:text-base">
                    SUMMER 2026
                  </h5>
                  <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight max-w-2xl">
                    {slide.title}
                  </h1>
                  <p className="max-w-md text-lg md:text-xl mb-8 text-gray-100">
                    Discover the latest trends in modern youth fashion. High quality, fresh styles for the new season.
                  </p>
                  <button className="bg-[#2DC071] hover:bg-[#25a05e] px-12 py-4 rounded font-bold uppercase transition-all transform hover:scale-105 shadow-xl">
                    Get Started Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;