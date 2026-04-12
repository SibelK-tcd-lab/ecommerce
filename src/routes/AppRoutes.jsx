import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

// Ana Sayfa Bileşenleri
import Hero from '../components/home/Hero.jsx';
import EditorsPick from '../components/home/EditorsPick.jsx';
import BestsellerProducts from '../components/home/BestsellerProducts.jsx';
import GreenBanner from '../components/home/GreenBanner.jsx';
import CoupleBanner from '../components/home/CoupleBanner.jsx';

// Sayfalar (Pages)
import ShopPage from '../pages/ShopPage.jsx';
import ProductDetailPage from '../pages/ProductDetailPage.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';

const AppRoutes = () => {
  return (
    <Switch>
      {/* 1. ANA SAYFA: exact sayesinde sadece '/' yolunda çalışır */}
      <Route exact path="/">
        <div className="flex flex-col">
          <Hero />
          <EditorsPick />
          <BestsellerProducts />
          <GreenBanner />
          <CoupleBanner />
        </div>
      </Route>

      {/* 2. DÜKKAN (SHOP) SAYFASI */}
      <Route path="/shop">
        <ShopPage />
      </Route>

      {/* 3. ÜRÜN DETAY SAYFASI (T04 Görevi) */}
      {/* :id parametresi, ProductDetailPage içinde useParams() ile yakalanır */}
      <Route path="/product/:id">
        <ProductDetailPage />
      </Route>

      {/* 4. GİRİŞ VE KAYIT SAYFALARI */}
      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  );
};

export default AppRoutes;