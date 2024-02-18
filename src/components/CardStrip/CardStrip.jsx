import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import services from '../../../public/services';

const CardStrip = forwardRef(({
  stripIndex,
  itemController,
  stateController,
}, ref) => {
  const sIndex = stripIndex;
  const moveStrip = itemController;

  return (
    <div className="flex justify-center w-full min-[850px]:w-[550px] min-[850px]:h-[570px] min-[850px]:overflow-hidden">
      <div
        ref={ref}
        className="flex relative flex-col min-[850px]:flex-row gap-24 items-center w-full min-[850px]:pl-12 transition-[left] duration-500"
      >
        {Object.keys(services).map((item, index) => (
          <div className="flex flex-col items-center gap-16 w-full">
            <div className="relative flex justify-center items-center w-full">
              <Card
                key={services[item].key}
                itemName={item}
                index={index}
                stripIndex={sIndex}
                itemController={moveStrip}
                stateController={stateController}
              />
              <div className="absolute -z-10 w-full h-[250px] flex flex-col justify-evenly items-center">
                <div className="bg-basic drop-shadow-lg border h-[35px] w-full" />
                <div className="bg-basic drop-shadow-lg border h-[35px] w-full" />
                <div className="bg-melon drop-shadow-lg border h-[35px] w-full" />
              </div>
            </div>
            <img src="./line.svg" className="w-[50%] opacity-70 md:hidden" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
});

CardStrip.propTypes = {
  stripIndex: PropTypes.number,
  itemController: PropTypes.func,
  stateController: PropTypes.func,
};

CardStrip.defaultProps = {
  stripIndex: undefined,
  itemController: undefined,
  stateController: undefined,
};

export default CardStrip;
