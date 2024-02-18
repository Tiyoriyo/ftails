import React from 'react';
import PropTypes from 'prop-types';

function DirectionButton({
  itemController,
  index,
  direction,
  phone,
}) {
  const imageList = {
    0: {
      left: 'medication.png',
      right: 'sleep.png',
    },
    1: {
      left: 'home.png',
      right: 'paw.png',
    },
    2: {
      left: 'sleep.png',
      right: 'shower.png',
    },
    3: {
      left: 'paw.png',
      right: 'medication.png',
    },
    4: {
      left: 'shower.png',
      right: 'home.png',
    },
  };

  const hiddenFunctionality = phone ? 'block lg:hidden' : 'hidden lg:block';

  const maxIndex = direction === 'left' ? 0 : 4;
  const ariaLabel = direction === 'left' ? 'Previous Item' : 'Next Item';

  return (
    <button
      type="button"
      className="hover:animate-growhover"
      aria-label={ariaLabel}
      onClick={() => itemController(direction)}
      onMouseOut={undefined}
      onBlur={() => undefined}
    >

      <img
        src={`./services/${imageList[index][direction]}`}
        className="w-[50px]"
        alt=""
      />

      <img src={`./${direction}.svg`} alt="" />
    </button>

  );
}

DirectionButton.propTypes = {
  itemController: PropTypes.func,
  index: PropTypes.number,
  direction: PropTypes.string,
  phone: PropTypes.bool,
};

DirectionButton.defaultProps = {
  itemController: undefined,
  index: undefined,
  direction: undefined,
  phone: false,
};

export default DirectionButton;
