import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import './ServiceDescBox.css';
import PropTypes from 'prop-types';
import DirectionButton from '../DirectionButton/DirectionButton';
import CardStrip from '../CardStrip/CardStrip';

function ServiceDescBox({
  service,
  stateController,
}) {
  const items = ['house', 'sleep', 'paw', 'shower', 'medication'];
  const [sIndex, setSIndex] = useState(items.indexOf(service)); // Service Index
  const strip = useRef(null);

  const moveStrip = useCallback((direction) => {
    if (!((direction === 'right' && sIndex === 4) || (direction === 'left' && sIndex === 0))) {
      const move = strip.current.children[0].offsetWidth + 96;
      const baseCalc = sIndex * move;
      const coordinate = baseCalc + (direction === 'right' ? move : -move); // 2000 + 288

      strip.current.style.left = `${-coordinate}px`;
      setSIndex(sIndex + (direction === 'right' ? 1 : -1));
    }
  }, [sIndex]);

  const renderStrip = () => {
    const move = strip.current.children[0].offsetWidth + 96;
    const coordinate = sIndex * move;
    strip.current.style.left = `${-coordinate}px`;
  };

  useEffect(() => {
    renderStrip();
  });

  return (
    <div className="flex items-center gap-8">
      <DirectionButton
        itemController={moveStrip}
        index={sIndex}
        direction="left"
      />
      <CardStrip
        ref={strip}
        stripIndex={sIndex}
        itemController={moveStrip}
        stateController={stateController}

      />
      <DirectionButton
        itemController={moveStrip}
        index={sIndex}
        direction="right"
      />
    </div>

  );
}

ServiceDescBox.propTypes = {
  service: PropTypes.string,
  stateController: PropTypes.func,
};

ServiceDescBox.defaultProps = {
  service: undefined,
  stateController: undefined,
};

export default ServiceDescBox;
