import React from 'react';
import PropTypes from 'prop-types';

function Cat({
  index,
}) {
  // const cats = {
  //   Meghan: ['Molly', 'Simba', 'Nunie', 'Draco'],
  //   Paulina: ['Oreo', 'Biscuit', 'Sierra'],
  // };

  return (
    <div className="relative w-[100px] rounded-[100px] h-[100px] overflow-hidden drop-shadow-lg border-2">
      <img src={`./meghancats/imgcat${index}.jpg`} className="absolute drop-shadow-lg" alt="" />
    </div>
  );
}

Cat.propTypes = {
  index: PropTypes.number,
};

Cat.defaultProps = {
  index: 0,
};

export default Cat;
