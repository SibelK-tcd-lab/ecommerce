import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchRoles } from './store/actions/clientActions.js';
import TopHeader from "./components/layout/TopHeader";
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Uygulama açıldığında rolleri güvenle çekiyoruz
    dispatch(fetchRoles());
  }, [dispatch]);

  return (
    <Router>
      <ScrollToTop /> 
      
      {/* Ana sarmalayıcı: Footer'ı en alta iten Flexbox yapısı */}
      <div className="min-h-screen flex flex-col bg-white font-sans overflow-x-hidden">
        
        {/* Header Bölümü */}
        <header className="w-full shrink-0 relative z-50">
          <TopHeader />
          <Navbar />
        </header>

        {/* İçerik Bölümü: flex-grow sayfanın uzamasını sağlar */}
        <main className="flex-grow w-full relative">
          <AppRoutes />
        </main>

        {/* Footer Bölümü */}
        <footer className="w-full shrink-0">
          <Footer />
        </footer>

      </div>
    </Router>
  );
};

export default App;