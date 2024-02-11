import React from 'react';
import PropTypes from 'prop-types';

function ServiceListBox({
  activeItemStateController,
}) {
  const items = [
    ['house', 'home visit'],
    ['sleep', 'sleep over'],
    ['paw', 'mani pawi'],
    ['shower', 'ear cleaning'],
    ['medication', 'medication'],
  ];

  return (
    <div className="border border-black rounded-3xl shadow-lg bg-white/60 w-max max-w-[950px] font-sulphur p-8">
      <div className="flex flex-col items-center gap-14">
        <div className="flex flex-wrap gap-16 justify-center">
          {items.map((item) => (
            <button
              type="button"
              className="flex flex-col items-center hover:animate-growhover"
              onClick={() => {
                activeItemStateController(item[0]);
              }}
            >
              <img
                src={`src/assets/services/${item[0]}.png`}
                className="w-[115px]"
                alt=""
              />
              <div className="flex flex-col w-max">
                <h1 className="uppercase tracking-widest text-4xl">{item[1]}</h1>
                <div className="box-border h-2 bg-[#545454]" />
              </div>
            </button>
          ))}
        </div>
        <div>
          <img
            src="src/assets/line.svg"
            alt=""
          />
        </div>
      </div>
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
