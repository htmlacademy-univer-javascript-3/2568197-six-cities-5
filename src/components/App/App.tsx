import React from 'react';
import MainPage from '../mainPage/MainPage';

type AppProps = {
  offerCount: number;
};

const App: React.FC<AppProps> = ({ offerCount }) => (
  <MainPage offerCount={offerCount} />
);

export default App;
