import React from 'react';

const ProductCard = ({ img, title, department, oldPrice, newPrice, rating, reviews, showRating = true }) => {
  
  // Güvenlik Kontrolü: Görsel yoksa bileşeni render etme
  if (!img) return null; 

  return (
    <div className="flex flex-col items-center text-center bg-white group cursor-pointer h-full transition-all duration-300">
      {/* Görsel Alanı */}
      <div className="w-full aspect-[3/4] mb-6 overflow-hidden rounded-sm bg-[#F3F3F3]">
        <img 
          src={img} 
          alt={title || "product"} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        />
      </div>

      {/* Metin İçerikleri - Fontlar Büyütüldü */}
      <div className="flex flex-col gap-3 px-2 pb-6 w-full">
        <h5 className="text-[#252B42] font-bold text-lg leading-7">
          {title}
        </h5>
        <p className="text-[#737373] font-bold text-base">
          {department}
        </p>
        
        {/* Rating Alanı */}
        {showRating && rating && (
          <div className="flex flex-col items-center gap-1 my-1">
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400 text-xs gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className={`fa-solid fa-star ${i >= Math.floor(rating) ? 'text-gray-200' : ''}`}></i>
                ))}
              </div>
              <span className="text-[#252B42] font-bold text-sm">{rating}</span>
            </div>
            <span className="text-[#737373] text-[13px] font-medium">({reviews} Reviews)</span>
          </div>
        )}

        {/* Fiyatlar - Font Büyütüldü */}
        <div className="flex justify-center gap-3 font-bold text-lg mt-1">
          <span className="text-[#BDBDBD] line-through">{oldPrice}</span>
          <span className="text-[#23856D]">{newPrice}</span>
        </div>

        {/* Renk Seçenekleri */}
        <div className="flex justify-center gap-2 mt-2">
          <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
          <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
          <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
          <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;