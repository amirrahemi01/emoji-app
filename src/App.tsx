import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Starter from './page/starter/Starter';
import Emoji from './page/search/Emoji';
import Game from './page/game/Game';
import Error from './page/error/Error';

export type Emoji = {
  keywords: string;
  title: string;
  symbol: string;
};
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Starter />} />
        <Route path='Game' element={<Game />} />
        <Route path='Emoji' element={<Emoji />} />
        <Route path='TermOfService' element={<Starter />} />
        <Route path='PrivacyPolicy' element={<Starter />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
