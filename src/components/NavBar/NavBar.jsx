import React from 'react';
import PropTypes from 'prop-types';
import NavBtn from '../NavBtn/navBtn';

function NavBar({ stateChanger }) {
  return (
    <div id="home-buttons" className="flex flex-wrap justify-evenly gap-5 m-2" alt="Pages List">
      <NavBtn pageName="home" stateChanger={stateChanger} />
      <NavBtn pageName="about" stateChanger={stateChanger} />
      <NavBtn pageName="contact" stateChanger={stateChanger} />
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
