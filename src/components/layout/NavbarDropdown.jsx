import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const NavbarDropdown = () => {
  // Hem kadın hem de erkek için geçerli olan ortak alt kategoriler
  const subcategories = [
    { name: 'T-Shirts', slug: 't-shirts' },
    { name: 'Shirts', slug: 'shirts' },
    { name: 'Pants', slug: 'pants' },
    { name: 'Jackets', slug: 'jackets' },
    { name: 'Sweaters', slug: 'sweaters' },
  ];

  return (
    <div className="relative group cursor-pointer py-2">
      <div className="flex items-center gap-1 group-hover:text-[#23A6F0]">
        Shop <ChevronDown size={16} />
      </div>

      <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl border border-gray-100 rounded-md py-4 min-w-[280px] z-50">
        <div className="grid grid-cols-2 gap-4 px-4 divide-x divide-gray-100">
          {/* WOMAN CATEGORIES */}
          <div className="pr-2">
            <h4 className="font-bold text-[#252B42] border-b pb-1 mb-3 text-sm">
              Woman
            </h4>
            <div className="flex flex-col gap-2 text-sm text-[#737373]">
              {subcategories.map((subcat) => (
                <Link
                  key={`woman-${subcat.slug}`}
                  to={`/shop/woman/${subcat.slug}`}
                  className="hover:text-[#23A6F0] transition-colors block py-0.5"
                >
                  {subcat.name}
                </Link>
              ))}
            </div>
          </div>

          {/* MAN CATEGORIES */}
          <div className="pl-4">
            <h4 className="font-bold text-[#252B42] border-b pb-1 mb-3 text-sm">
              Man
            </h4>
            <div className="flex flex-col gap-2 text-sm text-[#737373]">
              {subcategories.map((subcat) => (
                <Link
                  key={`man-${subcat.slug}`}
                  to={`/shop/man/${subcat.slug}`}
                  className="hover:text-[#23A6F0] transition-colors block py-0.5"
                >
                  {subcat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDropdown;