import React, {
  useEffect, useRef, useState,
} from 'react';
import './ServiceDescBox.css';
import PropTypes from 'prop-types';
import CardStrip from '../CardStrip/CardStrip';

function ServiceDescBox({
  service,
  itemController,
}) {
  const items = [
    ['home', 'home visit'],
    ['sleep', 'sleep over'],
    ['medication', 'medication'],
    ['addons', 'add-ons'],
  ];

  const services = ['home', 'sleep', 'medication', 'addons'];
  const [sIndex, setSIndex] = useState(services.indexOf(service)); // Service Index
  const strip = useRef(null);

  const renderStrip = () => {
    const move = strip.current.children[0].offsetWidth + 96;
    const coordinate = sIndex * move;
    strip.current.style.left = `${-coordinate}px`;
  };

  const funcoo = (x, y) => {
    itemController(x);
    setSIndex(y);
  };

  const isMobile = false;

  useEffect(() => {
    if (!isMobile) {
      renderStrip();
    }
  });

  return (
    <div className="flex items-center gap-4 justify-center w-full animate-fadein">
      <div className="flex flex-col justify-evenly">
        {items.map((item, index) => (
          index < 2
            ? (
              <button
                type="button"
                className="flex  items-center"
                onClick={() => {
                  funcoo(item[0], index);
                }}
              >
                <div className="flex flex-col gap-1">
                  <h2 className="border-b-2 border-basic/40 font-thasadith text-[24px] tracking-wide">{item[1]}</h2>
                </div>
                <img
                  src={`./services/${item[0]}.png`}
                  className={`w-[150px] drop-shadow-lg ${sIndex === index ? 'opacity-100' : 'opacity-50'} hover:animate-growhover`}
                  alt=""
                />

              </button>
            ) : null
        ))}
      </div>
      <CardStrip
        ref={strip}
        stripIndex={sIndex}
      />
      <div className="flex flex-col justify-evenly">
        {items.map((item, index) => (
          index > 1
            ? (
              <button
                type="button"
                className="flex  items-center"
                onClick={() => {
                  funcoo(item[0], index);
                }}
              >
                <img
                  src={`./services/${item[0]}.png`}
                  className={`w-[150px] drop-shadow-lg ${sIndex === index ? 'opacity-100' : 'opacity-50'} hover:animate-growhover`}
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <h2 className="border-b-2 border-basic/40 font-thasadith text-[24px] tracking-wide">{item[1]}</h2>
                </div>

              </button>
            ) : null
        ))}
      </div>
    </div>

  );
}

ServiceDescBox.propTypes = {
  service: PropTypes.string,
  itemController: PropTypes.func,
};

ServiceDescBox.defaultProps = {
  service: undefined,
  itemController: undefined,
};

export default ServiceDescBox;
