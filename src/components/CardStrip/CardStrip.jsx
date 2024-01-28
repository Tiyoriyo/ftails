import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import services from '../../assets/services';

const CardStrip = forwardRef(({
  stripIndex,
  itemController,
}, ref) => {
  const sIndex = stripIndex;
  const moveStrip = itemController;

  return (
    <div
      className="flex items-center h-[650px] overflow-hidden w-[420px] xs:w-[468.75px] md:w-[500px]"
    >
      <div
        ref={ref}
        className="flex gap-24 pl-[50px] transition duration-500"
      >
        {Object.keys(services).map((item, index) => (
          <Card
            key={services[item].key}
            itemName={item}
            index={index}
            stripIndex={sIndex}
            itemController={moveStrip}
          />
        ))}
      </div>
    </div>
  );
});

CardStrip.propTypes = {
  stripIndex: PropTypes.number,
  itemController: PropTypes.func,
};

CardStrip.defaultProps = {
  stripIndex: undefined,
  itemController: undefined,
};

export default CardStrip;
