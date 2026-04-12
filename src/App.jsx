import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import TopHeader from "./components/layout/TopHeader.jsx";
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import AppRoutes from './routes/AppRoutes.jsx';

// Sayfa değiştiğinde otomatik olarak en yukarı çıkmasını sağlayan yardımcı bileşen
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      {/* Her sayfa geçişinde scroll'u sıfırlar */}
      <ScrollToTop /> 
      
      {/* "overflow-x-hidden": Mobildeki yatay kayma sorunlarını önler.
          "min-h-screen": Sayfa boş olsa bile footer'ı en aşağıya sabitler.
      */}
      <div className="min-h-screen bg-white flex flex-col font-sans overflow-x-hidden">
        
        {/* Navigasyon Alanı */}
        <header className="w-full">
          <TopHeader />
          <Navbar />
        </header>

        {/* Ana İçerik Alanı: "flex-grow" footer'ı aşağı iter */}
        <main className="flex-grow w-full">
          <AppRoutes />
        </main>

        {/* Alt Bilgi Alanı */}
        <footer className="w-full">
          <Footer />
        </footer>

      </div>
    </Router>
  );
};

export default App;