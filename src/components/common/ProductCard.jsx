import React from 'react';

const ProductCard = ({ img, title, department, oldPrice, newPrice, rating, reviews, showRating = true }) => {
  return (
    <div className="flex flex-col items-center text-center bg-white group cursor-pointer h-full transition-all">
      <div className="w-full aspect-[3/4] mb-6 overflow-hidden rounded-sm bg-[#F3F3F3]">
        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>

      <div className="flex flex-col gap-2 px-2 pb-6">
        <h5 className="text-[#252B42] font-bold text-base leading-6">{title}</h5>
        <p className="text-[#737373] font-bold text-sm">{department}</p>
        
        {/* Ortalama Yıldız ve Puan */}
        {showRating && (
          <div className="flex flex-col items-center gap-1 my-1">
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400 text-[10px] gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className={`fa-solid fa-star ${i >= Math.floor(rating) ? 'text-gray-200' : ''}`}></i>
                ))}
              </div>
              <span className="text-[#252B42] font-bold text-xs">{rating}</span>
            </div>
            <span className="text-[#737373] text-[11px] font-medium">({reviews} Reviews)</span>
          </div>
        )}

        <div className="flex justify-center gap-2 font-bold text-base mt-1">
          <span className="text-[#BDBDBD] line-through">{oldPrice}</span>
          <span className="text-[#23856D]">{newPrice}</span>
        </div>

        {/* Renk Seçenekleri (Alt Kısımda) */}
        <div className="flex justify-center gap-1.5 mt-3">
          <div className="w-4 h-4 rounded-full bg-[#23A6F0] border border-gray-100"></div>
          <div className="w-4 h-4 rounded-full bg-[#23856D] border border-gray-100"></div>
          <div className="w-4 h-4 rounded-full bg-[#E77C40] border border-gray-100"></div>
          <div className="w-4 h-4 rounded-full bg-[#252B42] border border-gray-100"></div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;