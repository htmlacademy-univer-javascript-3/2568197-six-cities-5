import React from 'react';
import MainPage from '../mainPage/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../Login.page/LoginPage';
import FavoritePage from '../FavoritesPage/FavoritePage';
import OfferCard from '../OfferCard/OfferCard';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

type AppProps = {
  offerCount: number;
};

const App: React.FC<AppProps> = ({ offerCount }) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage offerCount={offerCount} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/favorites"
        element={
          <PrivateRoute>
            <FavoritePage />
          </PrivateRoute>
        }
      />
      <Route path="/offer/:id" element={<OfferCard />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
