import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import TopHeader from "./components/layout/TopHeader";
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';

// Sayfa değiştiğinde otomatik olarak en yukarı çıkmasını sağlayan yardımcı bileşen
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // Bazı tarayıcılarda anlık sıçramayı önlemek için 'instant' kullanılabilir
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      {/* Her sayfa geçişinde scroll'u sıfırlar */}
      <ScrollToTop /> 
      
      {/* min-h-screen: Sayfa kısa olsa bile footer altta kalır.
          flex-col: İçerik hiyerarşisini dikeyde yönetir.
      */}
      <div className="min-h-screen bg-white flex flex-col font-sans">
        
        {/* Navigasyon Alanı */}
        <header className="w-full shrink-0">
          <TopHeader />
          <Navbar />
        </header>

        {/* Ana İçerik Alanı: 
            flex-grow: Boş alanı doldurur ve footer'ı aşağı iter.
            overflow-x-hidden: Yatay kaymayı sadece içerik alanında engeller.
        */}
        <main className="flex-grow w-full overflow-x-hidden">
          <AppRoutes />
        </main>

        {/* Alt Bilgi Alanı */}
        <footer className="w-full shrink-0">
          <Footer />
        </footer>

      </div>
    </Router>
  );
};

export default App;