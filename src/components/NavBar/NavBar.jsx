import React from 'react';
import PropTypes from 'prop-types';
import NavBtn from '../NavBtn/navBtn';

function NavBar({ stateChanger }) {
  return (
    <div
      className="flex flex-wrap w-full justify-center xs:gap-6 md:gap-8 lg:gap-24"
      id="home-buttons"
      alt="Pages List"
    >
      <NavBtn pageName="home" stateChanger={stateChanger} />
      <NavBtn pageName="about" stateChanger={stateChanger} />
      <NavBtn pageName="testimonial" stateChanger={stateChanger} />
      <NavBtn pageName="services" stateChanger={stateChanger} />
      <NavBtn pageName="affiliation" stateChanger={stateChanger} />
    </div>
  );
}

NavBar.propTypes = {
  stateChanger: PropTypes.func,
};

NavBar.defaultProps = {
  stateChanger: undefined,
};

export default NavBar;
