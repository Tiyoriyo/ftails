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
      left: null,
      right: 'sleep.png',
    },
    1: {
      left: 'house.png',
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
      right: null,
    },
  };

  const hiddenFunctionality = phone ? 'block lg:hidden' : 'hidden lg:block';

  const maxIndex = direction === 'left' ? 0 : 4;
  const ariaLabel = direction === 'left' ? 'Previous Item' : 'Next Item';

  return (
    <div className={`${hiddenFunctionality} items-center ${index === maxIndex ? 'opacity-0' : 'opacity-1'}`}>
      {!phone && (
        <img
          className="w-14"
          src={`src/assets/services/${imageList[index][direction]}`}
          alt=""
        />
      )}
      <button
        type="button"
        aria-label={ariaLabel}
        onClick={() => itemController(direction)}
        onMouseOut={undefined}
        onBlur={() => undefined}
      >
        <img src={`src/assets/${direction}.svg`} alt="" />
      </button>
    </div>
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
