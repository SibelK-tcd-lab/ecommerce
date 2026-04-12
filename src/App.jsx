import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import TopHeader from "./components/layout/TopHeader";
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';

// Sayfa değiştiğinde otomatik olarak en yukarı çıkaran bileşen
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop /> 
      
      <div className="min-h-screen bg-white flex flex-col font-sans">
        
        {/* Navigasyon Alanı */}
        <header className="w-full shrink-0">
          <TopHeader />
          <Navbar />
        </header>

        {/* Ana İçerik Alanı */}
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