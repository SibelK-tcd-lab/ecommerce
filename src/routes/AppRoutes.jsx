import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Sayfa Importları
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import ProductDetailPage from '../pages/ProductDetailPage';

const AppRoutes = () => {
  return (
    <Switch>
      {/* Ana Sayfa */}
      <Route exact path="/" component={HomePage} />
      
      {/* Liste Sayfası - exact şart ki detayla karışmasın */}
      <Route exact path="/shop" component={ShopPage} />
      
      {/* Ürün Detay Sayfası - :id parametresi burada yakalanır */}
      <Route path="/shop/:id">
        <ProductDetailPage />
      </Route>

      {/* Eğer linklerin /product/1 şeklindeyse bu route'u da tutabilirsin */}
      <Route path="/product/:id">
        <ProductDetailPage />
      </Route>
    </Switch>
  );
};

export default AppRoutes;