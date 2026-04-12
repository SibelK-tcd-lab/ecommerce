import React from 'react';

const ProductCard = ({ img, title, department, oldPrice, newPrice, rating = 4, reviews = 10, showRating = true }) => {
  return (
    <div className="flex flex-col items-center text-center bg-white group cursor-pointer h-full transition-all border border-transparent hover:border-gray-100 rounded-lg p-2">
      {/* Ürün Görseli */}
      <div className="w-full aspect-[3/4] mb-4 overflow-hidden rounded-sm bg-[#F3F3F3]">
        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>

      <div className="flex flex-col gap-2 px-2 pb-4">
        <h5 className="text-[#252B42] font-bold text-base leading-6 truncate w-full">{title}</h5>
        <p className="text-[#737373] font-bold text-sm">{department}</p>
        
        {/* Senkronize Yıldızlar */}
        {showRating && (
          <div className="flex flex-col items-center gap-1">
            <div className="flex text-yellow-400 text-[12px] gap-0.5">
              {[...Array(5)].map((_, i) => {
                const index = i + 1;
                if (rating >= index) return <i key={i} className="fa-solid fa-star"></i>;
                if (rating >= index - 0.5) return <i key={i} className="fa-solid fa-star-half-stroke"></i>;
                return <i key={i} className="fa-regular fa-star text-gray-200"></i>;
              })}
            </div>
            <span className="text-[#737373] text-[11px] font-bold">({reviews} Reviews)</span>
          </div>
        )}

        {/* Fiyatlar */}
        <div className="flex justify-center gap-2 font-bold text-base mt-1">
          <span className="text-[#BDBDBD] line-through">{oldPrice}</span>
          <span className="text-[#23856D]">{newPrice}</span>
        </div>

        {/* Renk Noktaları */}
        <div className="flex justify-center gap-1.5 mt-2">
          <div className="w-3.5 h-3.5 rounded-full bg-[#23A6F0]"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-[#23856D]"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-[#E77C40]"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-[#252B42]"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;