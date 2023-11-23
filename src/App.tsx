import React, { useEffect, useState } from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Starter from './Page/Starter/Starter';
import Emoji from './Page/Search/Emoji';
import Game from './Page/Game/Game';
import Error from './Page/Error/Error';

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
