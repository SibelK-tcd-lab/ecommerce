import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Home bileşenlerini tek tek çağırıyoruz
import Hero from '../components/home/Hero.jsx';
import EditorsPick from '../components/home/EditorsPick.jsx';
import GreenBanner from '../components/home/GreenBanner.jsx';
import CoupleBanner from '../components/home/CoupleBanner.jsx';

// Shop sayfasını çağırıyoruz
import ShopPage from '../pages/ShopPage.jsx';

const AppRoutes = () => {
  return (
    <Switch>
      {/* Ana Sayfa: Bileşenleri burada alt alta diziyoruz */}
      <Route exact path="/">
        <Hero />
        <EditorsPick />
        <GreenBanner />
        <CoupleBanner />
      </Route>

      {/* Dükkan Sayfası */}
      <Route path="/shop">
        <ShopPage />
      </Route>
    </Switch>
  );
};

export default AppRoutes;