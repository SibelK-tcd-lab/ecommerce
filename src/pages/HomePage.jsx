import React from 'react';
import Hero from '../components/home/Hero';
import EditorsPick from '../components/home/EditorsPick';
import BestsellerProducts from '../components/home/BestsellerProducts';
import GreenBanner from '../components/home/GreenBanner';
import CoupleBanner from '../components/home/CoupleBanner';
import BlogCard from '../components/BlogCard.jsx';

const HomePage = () => {
  // Örnek veri (Props olarak BlogCard'a gidecek)
  const samplePost = {
    id: 1,
    image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg",
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2026",
    category: "Google"
  };

  return (
    <main className="w-full">
      <Hero />
      <div className="px-6 md:px-0"><EditorsPick /></div>
      <div className="px-6 md:px-0"><BestsellerProducts /></div>
      <div className="px-6 md:px-0"><GreenBanner /></div>
      <div className="px-6 md:px-0"><CoupleBanner /></div>

      {/* Ana Sayfa Blog Vitrini */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <h6 className="text-[#23A6F0] font-bold text-sm">Practice Advice</h6>
          <h2 className="text-4xl font-bold text-[#252B42]">Featured Posts</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BlogCard post={samplePost} />
          <BlogCard post={samplePost} />
          <BlogCard post={samplePost} />
        </div>
      </section>
    </main>
  );
};

export default HomePage;