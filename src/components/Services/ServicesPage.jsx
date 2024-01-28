/* eslint-disable max-len */
import React from 'react';
import ServiceDescBox from '../ServiceDescBox/ServiceDescBox';

function ServicesPage() {
  return (
    <div className="flex flex-auto w-full justify-center animate-load">
      <div className="flex flex-auto flex-col lg:flex-row lg:justify-evenly items-center">

        <img
          src="./public/scribble-v.png"
          className="hidden lg:block h-[200px] opacity-60"
          alt=""
        />

        <ServiceDescBox />

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
      <div className="absolute -z-10 w-[100%] max-w-[900px] bottom-0">
        <img src="./public/bedroom.png" className="blur-sm opacity-50" alt="" />
      </div>
    </div>
  );
}

export default ServicesPage;
