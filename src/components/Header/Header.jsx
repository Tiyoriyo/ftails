import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../NavBar/NavBar';
import Logo from '../Logo/Logo';

function Header({ stateChanger }) {
  console.log(window.innerWidth);
  return (
    <div className="w-[100%]">
      <Logo />
      <NavBar
        stateChanger={stateChanger}
      />
    </div>
  );
}

Header.propTypes = {
  stateChanger: PropTypes.func,
};

Header.defaultProps = {
  stateChanger: undefined,
};

export default Header;
