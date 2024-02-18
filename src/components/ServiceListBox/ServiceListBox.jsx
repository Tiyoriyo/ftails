import React from 'react';
import PropTypes from 'prop-types';

function ServiceListBox({
  activeItemStateController,
}) {
  const items = [
    ['home', 'home visit'],
    ['sleep', 'sleep over'],
    ['paw', 'mani pawi'],
    ['shower', 'ear cleaning'],
    ['medication', 'medication'],
  ];

  return (
    <div className="relative border border-dashed border-black rounded-lg p-10 bg-white bg-opacity-75 drop-shadow-xl w-[85%]">
      <div className="flex flex-col gap-16 items-center">
        <div className="flex flex-wrap justify-center gap-12">
          {items.map((item) => (
            <button
              type="button"
              className="flex flex-col items-center hover:animate-growhover"
              onClick={() => {
                activeItemStateController(item[0]);
              }}
            >
              <img
                src={`./services/${item[0]}.png`}
                className="w-[115px]"
                alt=""
              />
              <div className="flex flex-col gap-1">
                <h1 className="text-[32px] tracking-widest uppercase border-b border-double border-black">{item[1]}</h1>
                <div className="w-[100%] h-[10px] bg-basic" />
              </div>
            </button>
          ))}
        </div>
        <div>
          <img
            src="./line.svg"
            alt=""
          />
        </div>
      </div>
      <img src="./cats/catn3.png" className="absolute w-[250px] -rotate-90 -left-36 top-64" />
      <img src="./cats/catn3.png" className="absolute w-[250px] rotate-90 -right-36 top-64" />
    </div>
  );
}

ServiceListBox.propTypes = {
  activeItemStateController: PropTypes.func,
};

ServiceListBox.defaultProps = {
  activeItemStateController: undefined,
};

export default ServiceListBox;
