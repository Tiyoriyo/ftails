import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../NavBar/NavBar';
import Logo from '../Logo/Logo';

function Header({ stateChanger }) {
  return (
    <div className="flex flex-col items-center w-full">
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
