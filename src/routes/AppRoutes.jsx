import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Sayfaların doğru yoldan geldiğine emin ol!
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import ProductDetailPage from '../pages/ProductDetailPage'; // Değişiklik yaptığın ana dosya bu olmalı

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
      
      {/* Detay sayfası yolu doğru mu? */}
      <Route path="/product/:id">
        <ProductDetailPage />
      </Route>
    </Switch>
  );
};

export default AppRoutes;