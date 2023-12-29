import React from 'react';
import PropTypes from 'prop-types';
import addShrink from '../../addShrink';

function NavBtn({ pageName }) {
  const getCapitalizedName = () => {
    const string = pageName;
    const firstLetter = string.slice(0, 1);
    const firstLetterRemovedString = string.substring(1);
    const firstLetterCapitalized = firstLetter.toUpperCase();
    const result = firstLetterCapitalized + firstLetterRemovedString;
    return result;
  };

  return (
    <img
      src={`/${pageName}Btn.png`}
      alt={`${getCapitalizedName()} Page Button`}
      className="sm:w-[100px] md:w-[125px] lg:w-[150px] xl:w-[175px]"
      onMouseOut={addShrink}
      onBlur={() => undefined}
    />
  );
}

NavBtn.propTypes = {
  pageName: PropTypes.string,
};

NavBtn.defaultProps = {
  pageName: undefined,
};

export default NavBtn;
