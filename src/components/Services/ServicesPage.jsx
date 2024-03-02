/* eslint-disable max-len */
import React, { useCallback, useState } from 'react';
import ServicePriceButton from '../ServicePriceButton/ServicePriceButton';
import ServiceDescBox from '../ServiceDescBox/ServiceDescBox';
import ServiceListBox from '../ServiceListBox/ServiceListBox';
import PricesPage from '../PricesPage/PricesPage';

function ServicesPage() {
  const [item, setItem] = useState('home');
  const [state, setState] = useState('Services');

  const itemController = useCallback(
    (service) => setItem(service),
    [],
  );

  function changeButtonState() {
    const newState = state === 'Services' ? 'Prices' : 'Services';
    setState(newState);
  }

  const isActive = item;

  return (
    <div className="flex flex-col items-center relative flex-auto mt-6 w-full animate-fadein">
      <div className="flex justify-center w-full">
        <div className="flex flex-col gap-16 min-[850px]:gap-4 items-center w-full">
          <ServicePriceButton
            state={state}
            stateController={changeButtonState}
          />
          {state === 'Prices' && (
          <PricesPage />
          )}
          {!isActive && state !== 'Prices' && (
          <ServiceListBox
            itemController={itemController}
          />
          )}
          {isActive && state !== 'Prices' && (
          <ServiceDescBox
            service={item}
            itemController={itemController}
          />
          )}
        </div>

        <img
          src="./scribble-v.png"
          alt=""
          className="hidden h-[200px]"
        />

        <img
          src="./scribble-h.png"
          alt=""
          className="hidden max-w-xs"
        />
      </div>
      <div className={`absolute flex justify-center bottom-0 -z-20 w-screen ${isActive ? 'blur' : null} transition-[-webkit-filter] duration-700 opacity-50`}>
        <img src="./forestbackground.png" alt="" />
      </div>
    </div>
  );
}

export default ServicesPage;
