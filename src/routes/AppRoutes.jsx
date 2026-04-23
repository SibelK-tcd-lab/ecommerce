import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Sayfa Importları
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import ProductDetails from '../pages/ProductDetails'; 
import TeamPage from '../pages/TeamPage';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';
import Login from '../pages/Login';
import Register from '../pages/Register'; 
import CheckoutPage from '../pages/CheckoutPage'; 

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      
      {/* 1. Önce Statik Rotalar (Checkout her zaman en üstte kalmalı) */}
      <Route path="/checkout" component={CheckoutPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/team" component={TeamPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Register} /> 
      <Route path="/register" component={Register} />

      {/* 2. Dinamik Rotalar */}
      <Route exact path="/shop" component={ShopPage} />
      <Route path="/shop/:id" component={ProductDetails} />
      <Route path="/product/:id" component={ProductDetails} />

      {/* 3. 404 Sayfası */}
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