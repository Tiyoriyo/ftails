import React from 'react';
import './Logo.css';

function Logo() {
  return (
    <img
      id="ftlogo"
      className="mt-8 mb-4 lg: w-[150px] sm:w-[150px] md:w-[175px] lg:w-[200px] xl:w-[250px] max-[1023px]:hover:animate-grow lg:hover:animate-growhover"
      src="./logohorizontalnew.png"
      alt="Fairytails Logo"
    />
  );
}

export default Logo;
