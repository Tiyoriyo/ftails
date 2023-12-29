import React from 'react';
import addShrink from '../../addShrink';
import './Logo.css';

function Logo() {
  return (
    <img
      id="ftlogo"
      className="mx-auto mt-8 mb-8 w-[150px] sm:w-[150px] md:w-[175px] lg:w-[200px] xl:w-[250px]"
      src="/logohorizontalnew.png"
      alt="Fairytails Logo"
      onMouseOut={addShrink}
      onBlur={() => undefined}
    />
  );
}

export default Logo;
