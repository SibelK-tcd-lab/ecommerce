import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Sayfa Importları
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import TeamPage from '../pages/TeamPage';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';
import Login from '../pages/Login';
// Buradaki import'un fiziksel dosya adıyla (Register.jsx) TAM eşleştiğinden emin ol
import Register from '../pages/Register'; 

const AppRoutes = () => {
  return (
    <Switch>
      {/* 1. Ana Sayfa */}
      <Route exact path="/" component={HomePage} />
      
      {/* 2. Mağaza / Liste Sayfası */}
      <Route exact path="/shop" component={ShopPage} />
      
      {/* 3. Ürün Detay Sayfaları */}
      <Route path="/shop/:id" component={ProductDetailPage} />
      <Route path="/product/:id" component={ProductDetailPage} />

      {/* 4. Kurumsal Sayfalar */}
      <Route path="/about" component={AboutPage} />
      <Route path="/team" component={TeamPage} />

      {/* 5. İletişim Sayfası */}
      <Route path="/contact" component={ContactPage} />

      {/* 6. Auth Sayfaları */}
      <Route path="/login" component={Login} />
      
      {/* T08 Ödevi İsteri: URL /signup olmalı.
          Navbar'da "/signup" linki verdiğimiz için bu rota çalışacak.
      */}
      <Route path="/signup" component={Register} /> 
      
      {/* Yedek olarak /register linki tıklandığında da aynı sayfayı açar */}
      <Route path="/register" component={Register} />

      {/* 7. 404 Sayfası */}
      <Route path="*">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-[#252B42]">
          <h2 className="font-black text-6xl mb-4">404</h2>
          <p className="font-bold text-xl uppercase tracking-widest text-center">
            Page Not Found
          </p>
        </div>
      </Route>
    </Switch>
  );
};

export default AppRoutes;