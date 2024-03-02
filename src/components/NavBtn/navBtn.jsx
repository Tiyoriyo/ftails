import React, { useState } from 'react';
import PropTypes from 'prop-types';

function NavBtn({ pageName, stateChanger }) {
  const getCapitalizedName = () => {
    const string = pageName;
    const firstLetter = string.slice(0, 1);
    const firstLetterRemovedString = string.substring(1);
    const firstLetterCapitalized = firstLetter.toUpperCase();
    const result = firstLetterCapitalized + firstLetterRemovedString;
    return result;
  };

  return (
    <button
      type="button"
      className="w-[225px] hover:animate-growhover"
      onClick={() => stateChanger(pageName)}
      onMouseOut={undefined}
      onBlur={() => undefined}
    >
      <img
        src={`/${pageName}Btn.png`}
        alt={`${getCapitalizedName()} Page Button`}
      />
    </button>

  );
}

NavBtn.propTypes = {
  pageName: PropTypes.string,
  stateChanger: PropTypes.func,
};

NavBtn.defaultProps = {
  pageName: undefined,
  stateChanger: undefined,
};

export default NavBtn;
