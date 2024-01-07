import React, { useState } from 'react';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import ServicesPage from './components/Services/ServicesPage';

function App() {
  const [state, setState] = useState('home');

  return (
    <div className="flex flex-col items-center">
      <Header
        stateChanger={setState}
      />
      {state === 'home' && (
        <HomePage />
      )}
      {state === 'services' && (
        <ServicesPage />
      )}
    </div>
  );
}

export default App;
