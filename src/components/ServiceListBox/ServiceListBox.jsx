import React from 'react';
import PropTypes from 'prop-types';

function ServiceListBox({
  itemController,
}) {
  const items = [
    ['home', 'home visit'],
    ['sleep', 'sleep over'],
    ['medication', 'medication'],
    ['addons', 'add-ons'],
  ];

  return (
    <div className="relative  w-full select-none mt-24 animate-fadein">
      <div className="flex gap-16 justify-center">
        <div className="flex w-full justify-evenly">
          {items.map((item) => (
            <button
              type="button"
              className="flex flex-col items-center"
              onClick={() => {
                itemController(item[0]);
              }}
            >
              <div className="flex flex-col gap-1">
                <h2 className="border-b-2 border-basic/40 font-thasadith text-[24px] tracking-wide">{item[1]}</h2>
              </div>
              <img
                src={`./services/${item[0]}.png`}
                className="w-[200px] drop-shadow-lg hover:animate-growhover"
                alt=""
              />

            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

ServiceListBox.propTypes = {
  itemController: PropTypes.func,
};

ServiceListBox.defaultProps = {
  itemController: undefined,
};

export default ServiceListBox;
