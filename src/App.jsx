import React, { useState } from 'react';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import ServicesPage from './components/Services/ServicesPage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactPage from './components/ContactPage/ContactPage';

function App() {
  const [state, setState] = useState('home');

  return (
    <div className="flex flex-col items-center w-[95%]">
      <Header
        stateChanger={setState}
      />
      {state === 'home' && (
        <HomePage />
      )}
      {state === 'about' && (
        <AboutPage />
      )}
      {state === 'contact' && (
        <ContactPage />
      )}
      {state === 'services' && (
        <ServicesPage />
      )}
    </div>
  );
}

export default App;
