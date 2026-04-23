import React, { useState } from 'react';
import BlogCard from '../components/BlogCard.jsx';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Specific fashion-oriented categories
  const categories = ['All', 'Capsule Wardrobe', 'Body Types', 'Style Trends', 'Sustainability'];

  const fashionPosts = [
    {
      id: 1,
      category: 'Capsule Wardrobe',
      image: "https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg",
      title: "Mastering Minimalism: 30 Pieces, 100 Outfits",
      description: "End decision fatigue for good. Learn how to curate a timeless wardrobe where every piece works in harmony to create endless style combinations.",
      date: "April 22, 2026",
      author: "Fashion Editor"
    },
    {
      id: 2,
      category: 'Body Types',
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg",
      title: "The Ultimate Guide to Dressing for Your Silhouette",
      description: "Pear, apple, or hourglass? Discover how to identify your proportions and choose cuts that highlight your best features while balancing your frame.",
      date: "April 20, 2026",
      author: "Style Consultant"
    },
    {
      id: 3,
      category: 'Sustainability',
      image: "https://images.pexels.com/photos/45924/pexels-photo-45924.jpeg",
      title: "The Fabric Detective: Investing in Longevity",
      description: "Beyond the label: Why natural fibers like linen and wool outperform synthetics, and how to build a high-quality, eco-conscious wardrobe.",
      date: "April 18, 2026",
      author: "Eco-Fashion Writer"
    }
  ];

  const filteredPosts = activeCategory === 'All' 
    ? fashionPosts 
    : fashionPosts.filter(post => post.category === activeCategory);

  return (
    <div className="bg-white min-h-screen font-sans text-[#252B42]">
      {/* Hero Section */}
      <section className="bg-[#FAFAFA] py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h6 className="text-[#23A6F0] font-bold tracking-[0.2em] uppercase text-sm mb-4">Style & Wardrobe Guide</h6>
          <h1 className="text-5xl md:text-6xl font-black mb-8 leading-tight">Redefine Your Style</h1>
          <p className="text-[#737373] text-xl leading-relaxed">
            More than just clothing—building a visual identity. From capsule wardrobe strategies 
            to deep-dives into body type analysis, explore our expert-curated style insights.
          </p>
        </div>
      </section>

      {/* Category Navigation (Sticky) */}
      <div className="sticky top-[70px] z-50 bg-white shadow-sm">
        <nav className="container mx-auto px-6 overflow-x-auto">
          <div className="flex justify-start md:justify-center items-center gap-4 py-6 min-w-max">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${
                  activeCategory === cat 
                    ? 'bg-[#23A6F0] text-white border-[#23A6F0]' 
                    : 'text-[#737373] border-[#ECECEC] hover:border-[#23A6F0] hover:text-[#23A6F0]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* Blog Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))
          ) : (
            <div className="col-span-full text-center py-32 border-2 border-dashed border-[#ECECEC] rounded-xl">
              <p className="text-[#737373] text-lg italic">New insights coming soon to this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Quote Section */}
      <section className="container mx-auto px-6 mb-20">
        <div className="bg-[#252B42] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4 italic">"Style is a way to say who you are without having to speak."</h2>
          <p className="text-[#8EC2ED] font-medium">— Rachel Zoe</p>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;