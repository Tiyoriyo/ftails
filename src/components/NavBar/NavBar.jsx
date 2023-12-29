import React from 'react';
import NavBtn from '../NavBtn/navBtn';

function NavBar() {
  return (
    <div id="home-buttons" className="hidden sm:flex gap-4 md:gap-6 lg:gap-10 xl:gap-16 justify-center mx-auto" alt="Pages List">
      <NavBtn pageName="home" />
      <NavBtn pageName="about" />
      <NavBtn pageName="contact" />
      <NavBtn pageName="services" />
      <NavBtn pageName="affiliation" />
    </div>
  );
}

export default NavBar;
