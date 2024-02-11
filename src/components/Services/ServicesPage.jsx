/* eslint-disable max-len */
import React, { useCallback, useEffect, useState } from 'react';
import ServiceDescBox from '../ServiceDescBox/ServiceDescBox';
import ServiceListBox from '../ServiceListBox/ServiceListBox';

function ServicesPage() {
  const [width, setWidth] = useState(window.innerWidth);
  const [item, setItem] = useState(null);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const stateController = useCallback(
    (service) => setItem(service),
    [],
  );

  const isMobile = width < 1280;
  const isActive = !isMobile && item;

  return (
    <div className="flex flex-auto w-full justify-center animate-load">
      <div className="flex flex-col lg:flex-row items-center gap-8">

        <img
          src="./public/scribble-v.png"
          className="hidden lg:block h-[200px] opacity-60"
          alt=""
        />
        {!isActive && !isMobile && (
          <ServiceListBox
            activeItemStateController={stateController}
          />
        )}
        {isActive && (
          <ServiceDescBox
            service={item}
            stateController={stateController}
          />
        )}
        {isMobile && (
          <ServiceDescBox
            service="house"
          />
        )}
        <img
          src="./public/scribble-v.png"
          alt=""
          className="hidden lg:block h-[200px] opacity-60"
        />

        <img
          src="./public/scribble-h.png"
          alt=""
          className="w-2/5 max-w-xs mt-16 lg:hidden"
        />
      </div>
      <div className="absolute -z-10 w-[100%] h-max max-w-[900px]">
        <img src="./public/bedroom.png" className="blur-sm opacity-50 bottom-0" alt="" />
      </div>
    </div>
  );
}

export default ServicesPage;
