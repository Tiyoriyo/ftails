import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import './ServiceDescBox.css';
import PropTypes from 'prop-types';
import CardStrip from '../CardStrip/CardStrip';
import ServicePriceButton from '../ServicePriceButton/ServicePriceButton';
import DirectionButton from '../DirectionButton/DirectionButton';

function ServiceDescBox({
  service,
  itemController,
  stateController,
}) {
  const [state, setState] = useState('Services');
  const items = ['home', 'sleep', 'paw', 'shower', 'medication'];
  const [sIndex, setSIndex] = useState(items.indexOf(service)); // Service Index
  const strip = useRef(null);

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const moveStrip = useCallback((direction) => {
    const move = strip.current.children[0].offsetWidth + 96;
    const baseCalc = sIndex * move;
    const coordinate = baseCalc + (direction === 'right' ? move : -move);

    if (!((direction === 'right' && sIndex === 4) || (direction === 'left' && sIndex === 0))) {
      strip.current.style.left = `${-coordinate}px`;
      setSIndex(sIndex + (direction === 'right' ? 1 : -1));
    }

    if (direction === 'right' && sIndex === 4) {
      strip.current.style.left = '0px';
      setSIndex(0);
    }

    if (direction === 'left' && sIndex === 0) {
      strip.current.style.left = '2384px';
      setSIndex(4);
    }
  }, [sIndex]);

  const moveToStrip = (moveIndex) => {
    const move = strip.current.children[0].offsetWidth + 96;
    const coordinate = moveIndex * move;
    strip.current.style.left = `${-coordinate}px`;
    setSIndex(moveIndex);
  };

  const renderStrip = () => {
    const move = strip.current.children[0].offsetWidth + 96;
    const coordinate = sIndex * move;
    strip.current.style.left = `${-coordinate}px`;
  };

  const isMobile = width < 850;

  useEffect(() => {
    if (!isMobile) {
      renderStrip();
    }
  });

  return (
    <div className="flex items-center gap-4 justify-center w-full">
      {!isMobile && (
        <DirectionButton
          itemController={moveStrip}
          index={sIndex}
          direction="left"
        />
      )}
      <div className="relative flex flex-col items-center">
        <CardStrip
          ref={strip}
          stripIndex={sIndex}
          itemController={moveStrip}
          stateController={itemController}
        />
        {isMobile && (
        <div className="absolute bottom-5 flex gap-1">
          <span>&#8592;</span>
          <div className="flex gap-1 flex-grow-0 max-h-fit">
            {[...Array(5)].map((item, index) => (
              <div
                className={`${index === sIndex ? 'bg-melon' : 'bg-melon/75'} p-[10px] rounded-[10px] drop-shadow-md`}
                onClick={() => { moveToStrip(index); }}
              />
            ))}
          </div>
          <span>&#8594;</span>
        </div>
        )}
      </div>
      {!isMobile && (
        <DirectionButton
          itemController={moveStrip}
          index={sIndex}
          direction="right"
        />
      )}
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
