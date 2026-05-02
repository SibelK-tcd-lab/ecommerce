import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const TopCategories = () => {
  const categories = useSelector(state => state.client.categories || []);

  // Sort by rating and select the top 5 categories
  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-[#252B42] mb-8 text-center">
        Top Rated Categories
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {topCategories.map(cat => {
          const genderSlug = cat.gender === 'K' || cat.gender === 'k' ? 'kadin' : 'erkek';
          
          return (
            <Link
              key={cat.id}
              to={`/shop/${genderSlug}/${cat.title.toLowerCase()}/${cat.id}`}
              className="relative group block overflow-hidden rounded-lg shadow-sm border border-gray-100 bg-[#FAFAFA] h-[300px] transition duration-300 hover:shadow-md"
            >
              {/* Category Image */}
              <div className="h-2/3 overflow-hidden bg-gray-200">
                <img
                  src={cat.img || 'https://via.placeholder.com/300x300?text=Category'}
                  alt={cat.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content and Rating Info */}
              <div className="p-4 h-1/3 flex flex-col justify-between">
                <div>
                  <h3 className="text-[#252B42] font-bold text-md truncate">{cat.title}</h3>
                  <p className="text-gray-400 text-xs capitalize">{genderSlug}</p>
                </div>
                
                <div className="flex items-center justify-between text-sm text-[#23A6F0]">
                  <span>Details</span>
                  <div className="flex items-center gap-1 font-bold">
                    ★ <span className="text-gray-700">{cat.rating}</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TopCategories;