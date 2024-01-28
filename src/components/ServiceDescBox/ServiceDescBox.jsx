import React, { useCallback, useRef, useState } from 'react';
import './ServiceDescBox.css';
import DirectionButton from '../DirectionButton/DirectionButton';
import CardStrip from '../CardStrip/CardStrip';

function ServiceDescBox() {
  const [sIndex, setSIndex] = useState(0); // Service Index
  const strip = useRef(null);

  const moveStrip = useCallback((direction) => {
    if (!((direction === 'right' && sIndex === 4) || (direction === 'left' && sIndex === 0))) {
      const move = strip.current.children[0].offsetWidth + 96;
      const baseCalc = sIndex * move;
      const coordinate = baseCalc + (direction === 'right' ? move : -move); // 2000 + 288

      strip.current.style.transform = `translateX(${-coordinate}px)`;
      setSIndex(sIndex + (direction === 'right' ? 1 : -1));
    }
  }, [sIndex]);

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

      />
      <DirectionButton
        itemController={moveStrip}
        index={sIndex}
        direction="right"
      />
    </div>

  );
}

export default ServiceDescBox;
