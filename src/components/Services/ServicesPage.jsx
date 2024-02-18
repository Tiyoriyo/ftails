/* eslint-disable max-len */
import React, { useCallback, useEffect, useState } from 'react';
import ServiceDescBox from '../ServiceDescBox/ServiceDescBox';
import ServiceListBox from '../ServiceListBox/ServiceListBox';
import PricesPage from '../PricesPage/PricesPage';
import ServicePriceButton from '../ServicePriceButton/ServicePriceButton';

function ServicesPage() {
  const [width, setWidth] = useState(window.innerWidth);
  const [item, setItem] = useState(null);
  const [state, setState] = useState('Services');

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const itemController = useCallback(
    (service) => setItem(service),
    [],
  );

  function changeButtonState() {
    const newState = state === 'Services' ? 'Prices' : 'Services';
    setState(newState);
  }

  const isMobile = width < 850;
  const isActive = !isMobile && item;

  return (
    <div className="flex flex-col items-center relative flex-auto mt-8 w-full max-w-[1035px]">
      <div className="flex justify-center w-full">
        <img
          src="./public/scribble-v.png"
          className="hidden h-[200px]"
          alt=""
        />
        <div className="flex flex-col gap-16 min-[850px]:gap-4 items-center w-full">
          <ServicePriceButton
            state={state}
            stateController={changeButtonState}
          />
          {/* <img src="src/assets/line.svg" className="mb-8 w-[75%]" /> */}
          {state === 'Prices' && (
          <PricesPage />
          )}
          {!isActive && !isMobile && state !== 'Prices' && (
          <ServiceListBox
            activeItemStateController={itemController}
          />
          )}
          {isActive && state !== 'Prices' && (
          <ServiceDescBox
            service={item}
            itemController={itemController}

          />
          )}
          {isMobile && state !== 'Prices' && (
          <ServiceDescBox
            service="house"
            stateController={setState}
          />
          )}
        </div>

        <img
          src="./public/scribble-v.png"
          alt=""
          className="hidden h-[200px]"
        />

        <img
          src="./public/scribble-h.png"
          alt=""
          className="hidden max-w-xs"
        />
      </div>
      <div className="absolute flex justify-center bottom-0 -z-20 w-screen max-w-[900px] blur-sm">
        <img src="./public/bedroom.png" alt="" />
      </div>
    </div>
  );
}

export default ServicesPage;
