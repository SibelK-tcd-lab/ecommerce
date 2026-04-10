import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TopHeader from "./components/layout/TopHeader.jsx";
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import AppRoutes from './routes/AppRoutes.jsx';

const App = () => {
  return (
    <Router>
      {/* "overflow-x-hidden": Mobildeki kesilme/taşma sorununu kökten çözer.
        "min-h-screen": Sayfa boş olsa bile footer'ın en altta kalmasını sağlar.
      */}
      <div className="min-h-screen bg-white flex flex-col font-sans overflow-x-hidden">
        
        <header className="w-full">
          <TopHeader />
          <Navbar />
        </header>

        {/* Ana içerik alanı. "flex-grow" sayesinde footer'ı aşağı iter.
          "w-full max-w-full" içeriğin ekrana tam oturmasını sağlar.
        */}
        <main className="flex-grow w-full max-w-full">
          <AppRoutes />
        </main>

        <footer className="w-full">
          <Footer />
        </footer>

      </div>
    </Router>
  );
};

export default App;