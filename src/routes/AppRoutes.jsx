import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Sayfa Importları
import HomePage from '../pages/HomePage.jsx';
import ShopPage from '../pages/ShopPage.jsx';
import ProductDetails from '../pages/ProductDetails.jsx'; 
import BlogPage from '../pages/BlogPage.jsx';
import TeamPage from '../pages/TeamPage.jsx';
import ContactPage from '../pages/ContactPage.jsx';
import AboutPage from '../pages/AboutPage.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx'; 
import CheckoutPage from '../pages/CheckoutPage.jsx';

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      
      {/* 1. Statik Rotalar */}
      <Route path="/checkout" component={CheckoutPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/team" component={TeamPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Register} /> 
      <Route path="/register" component={Register} />
      
      {/* ÇÖZÜM: Blog Rotası Buraya Eklendi */}
      <Route path="/blog" component={BlogPage} />

      {/* 2. Dinamik Rotalar */}
      <Route exact path="/shop" component={ShopPage} />
      <Route path="/shop/:id" component={ProductDetails} />
      <Route path="/product/:id" component={ProductDetails} />

      {/* 3. 404 Sayfası (Her zaman en altta kalmalı) */}
      <Route path="*">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-[#252B42]">
          <h2 className="font-black text-6xl mb-4 text-red-500">404</h2>
          <p className="font-bold text-xl uppercase tracking-widest text-center">Page Not Found</p>
        </div>
      </Route>
    </Switch>
  );
};

export default AppRoutes;