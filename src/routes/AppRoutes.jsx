import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Sayfa Bileşenleri
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import AboutPage from '../pages/AboutPage';
import TeamPage from '../pages/TeamPage';
import ContactPage from '../pages/ContactPage';
import BlogPage from '../pages/BlogPage';
import CheckoutPage from '../pages/CheckoutPage';
import OrderSuccessPage from '../pages/OrderSuccessPage';
import Login from '../pages/Login';
import Register from '../pages/Register';

const AppRoutes = () => {
  return (
    <Switch>
      {/* Ana Sayfa ve Ürünler */}
      <Route path="/" exact component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/product/:id" component={ProductDetailPage} />

      {/* Kurumsal Sayfalar */}
      <Route path="/about" component={AboutPage} />
      <Route path="/team" component={TeamPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/blog" component={BlogPage} />

      {/* Alışveriş ve Kullanıcı İşlemleri */}
      <Route path="/checkout" component={CheckoutPage} />
      <Route path="/order-success" component={OrderSuccessPage} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />

      {/* 404 - Tanımsız Rotalar İçin Ana Sayfaya Yönlendirme */}
      <Route path="*" component={HomePage} />
    </Switch>
  );
};

export default AppRoutes;