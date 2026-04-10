import React from 'react';
// BU SATIRI KONTROL ET: { Switch, Route } her ikisi de süslü parantez içinde olmalı
import { Switch, Route } from 'react-router-dom'; 

// Home bileşenleri
import Hero from '../components/home/Hero.jsx';
import EditorsPick from '../components/home/EditorsPick.jsx';
import BestsellerProducts from '../components/home/BestsellerProducts.jsx';
import GreenBanner from '../components/home/GreenBanner.jsx';
import CoupleBanner from '../components/home/CoupleBanner.jsx';

// Sayfalar
import ShopPage from '../pages/ShopPage.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';

const AppRoutes = () => {
  return (
    // Switch burada düzgünce tanımlandı
    <Switch>
      {/* Ana Sayfa */}
      <Route exact path="/">
        <div className="flex flex-col">
          <Hero />
          <EditorsPick />
          <BestsellerProducts />
          <GreenBanner />
          <CoupleBanner />
        </div>
      </Route>

      {/* Dükkan Sayfası */}
      <Route path="/shop">
        <ShopPage />
      </Route>

      {/* Giriş Yap Sayfası */}
      <Route path="/login">
        <Login />
      </Route>

      {/* Kayıt Ol Sayfası */}
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  );
};

export default AppRoutes;