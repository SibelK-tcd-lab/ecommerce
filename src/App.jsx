import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TopHeader from "./components/layout/TopHeader.jsx";
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col font-sans">
        <header>
          <TopHeader />
          <Navbar />
        </header>
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;


