import React, { useState } from 'react';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import ServicesPage from './components/Services/ServicesPage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactDetails from './components/ContactDetails/ContactDetails';
import AffiliationPage from './components/AffiliationPage/AffiliationPage';
import TestimonialPage from './components/TestimonialPage.jsx/TestimonialPage';
import ContactBtn from './components/ContactBtn/ContactBtn';

function App() {
  const [state, setState] = useState('home');
  const [hidden, bgFunc] = useState(true);
  const [index, setIndex] = useState(0);

  const stateChanger = (x) => {
    setState(x);
    setIndex((prev) => prev + 1);
  };

  const bgStateChanger = () => {
    bgFunc(!hidden);
    console.log('test');
  };

  console.log(hidden);

  return (
    <div className="relative flex flex-col items-center w-screen">
      <div className={`${hidden ? 'null' : 'blur'} flex flex-col h-full`}>
        <Header
          stateChanger={stateChanger}
        />
        {state === 'home' && (
        <HomePage />
        )}
        {state === 'about' && (
        <AboutPage
          mainStateChanger={setState}
        />
        )}
        {state === 'testimonial' && (
        <TestimonialPage />
        )}
        {state === 'services' && (
        <ServicesPage />
        )}
        {state === 'affiliation' && (
        <AffiliationPage />
        )}
      </div>
      {!hidden && (
        <div className="absolute flex items-center justify-center w-screen h-screen">
          <ContactDetails />
        </div>
      )}
      <div className={`${hidden ? 'hidden' : null} absolute flex flex-auto items-center justify-center w-screen h-screen bg-white z-40 animate-fadein50`} onClick={bgStateChanger} />
      <ContactBtn
        bgStateChanger={bgStateChanger}
      />
    </div>
  );
}

export default App;
