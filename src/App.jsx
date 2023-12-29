import React, { useState } from 'react';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';

function App() {
  const [state, setState] = useState('home');
  return (
    <>
      <Header />
      <HomePage />
    </>
  );
}

export default App;
