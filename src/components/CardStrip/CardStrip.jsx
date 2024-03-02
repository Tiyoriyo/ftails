import React, { forwardRef } from 'react';
import Card from '../Card/Card';
import services from '../../../public/services';

const CardStrip = forwardRef((props, ref) => (
  <div className="flex justify-center w-full min-[850px]:w-[550px] min-[850px]:h-[570px] min-[850px]:overflow-x-hidden">
    <div
      ref={ref}
      className="flex relative flex-col min-[850px]:flex-row gap-24 items-center w-full min-[850px]:pl-12 transition-[left] duration-500"
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
