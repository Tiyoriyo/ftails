import React, { forwardRef } from 'react';
import Card from '../Card/Card';
import services from '../../../public/services';

const CardStrip = forwardRef((props, ref) => (
  <div className="relative flex items-center w-[550px] h-[600px] overflow-x-hidden ">
    <div
      ref={ref}
      className="flex absolute gap-24 items-center pl-12 transition-[left] duration-500"
    >
      {Object.keys(services).map((item, index) => (
        <div className="relative flex justify-center items-center w-full">
          <Card itemName={item} index={index} />
        </div>
      ))}
    </div>
  </div>
));

export default CardStrip;
