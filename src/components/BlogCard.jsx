import React from 'react';
import { Calendar, ChevronRight, Clock } from 'lucide-react';

const BlogCard = ({ post }) => {
  // Savunma: Eğer post objesi henüz yüklenmemişse hata vermesini engeller
  if (!post) return null;

  return (
    <div className="flex flex-col bg-white border border-[#EBEBEB] shadow-sm hover:shadow-md transition-shadow duration-300 rounded-none h-full overflow-hidden">
      {/* Görsel Alanı */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-4 left-4 bg-[#E74040] text-white text-xs font-bold px-3 py-1 rounded-sm uppercase shadow-md">
          New
        </span>
      </div>

      {/* İçerik Alanı */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Kategoriler */}
        <div className="flex gap-4 text-xs text-[#737373] mb-3">
          <span className="text-[#8EC2ED]">{post.category || "Google"}</span>
          <span>Trending</span>
          <span>New</span>
        </div>

        {/* Başlık ve Açıklama */}
        <h3 className="text-[#252B42] text-xl font-normal leading-tight mb-3 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-[#737373] text-sm mb-6 line-clamp-3">
          {post.description}
        </p>

        {/* Alt Bilgi (Meta Data) */}
        <div className="mt-auto pt-4 border-t border-[#F3F3F3] flex justify-between items-center text-[#737373]">
          <div className="flex items-center gap-1 text-xs">
            <Clock size={14} className="text-[#23A6F0]" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <Calendar size={14} className="text-[#23856D]" />
            <span>10 comments</span>
          </div>
        </div>

        {/* Learn More Butonu */}
        <button className="mt-4 flex items-center gap-2 text-[#737373] font-bold text-sm hover:text-[#23A6F0] transition-colors group">
          Learn More 
          <ChevronRight size={18} className="text-[#23A6F0] group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;