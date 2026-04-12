import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { allProducts } from '../../data/productData';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
  const randomSlides = useMemo(() => {
    if (!allProducts) return [];
    return [...allProducts].sort(() => 0.5 - Math.random()).slice(0, 5);
  }, []);

  return (
    <section className="w-full flex justify-center bg-white overflow-hidden">
      <div className="w-full max-w-[1300px]">
        <Swiper modules={[Navigation, Pagination, Autoplay]} navigation pagination={{ clickable: true }} autoplay={{ delay: 4500 }} loop className="w-full h-[500px] md:h-[650px]">
          {randomSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full flex items-center justify-start">
                <img src={slide.img} className="absolute inset-0 w-full h-full object-cover z-0" alt={slide.title} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
                <div className="relative z-20 px-10 md:pl-24 flex flex-col items-start gap-5 max-w-2xl text-left">
                  <h5 className="font-bold text-white text-sm md:text-base uppercase tracking-widest">SUMMER 2026</h5>
                  <h1 className="text-4xl md:text-6xl font-extrabold text-white uppercase leading-tight">NEW COLLECTION</h1>
                  <p className="text-white text-base md:text-xl opacity-90">We know how large objects will act, but things on a small scale.</p>
                  <button className="bg-[#2DC071] text-white px-10 py-4 rounded-md font-bold uppercase transition-all hover:bg-[#25a05e]">SHOP NOW</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;