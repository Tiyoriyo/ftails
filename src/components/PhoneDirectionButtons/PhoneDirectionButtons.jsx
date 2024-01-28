import React from 'react';
import PropTypes from 'prop-types';
import DirectionButton from '../DirectionButton/DirectionButton';

function PhoneDirectionButtons({
  itemController,
  index,
}) {
  return (
    <div className="flex lg:hidden gap-8 mt-8">
      <DirectionButton
        itemController={itemController}
        index={index}
        direction="left"
        phone
      />
      <DirectionButton
        itemController={itemController}
        index={index}
        direction="right"
        phone
      />
    </div>
  );
}

PhoneDirectionButtons.propTypes = {
  itemController: PropTypes.func,
  index: PropTypes.number,
};

PhoneDirectionButtons.defaultProps = {
  itemController: undefined,
  index: undefined,
};

export default PhoneDirectionButtons;
