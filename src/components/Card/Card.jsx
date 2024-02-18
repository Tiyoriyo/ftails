import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import services from '../../assets/services';

function Card({
  itemName,
  index,
  stateController,
}) {
  const [width, setWidth] = useState(window.innerWidth);
  const card = useRef(null);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  function getCatClassName(catIndex) {
    switch (catIndex) {
      case 2: {
        return 'w-32 -top-20';
      }
      case 3: {
        return 'w-24 -top-14';
      }
      case 4: {
        return 'w-24 -top-14';
      }
      default: {
        return 'w-28 -top-14';
      }
    }
  }

  const icons = ['home', 'sleep', 'paw', 'shower', 'medication'];

  const isMobile = width < 1280;

  return (
    <div
      className="relative flex items-center flex-col border bg-white drop-shadow-lg p-10 border-black border-solid w-[85%] min-[850px]:w-[450px] font-sulphur font-bold max-w-[500px]"
      ref={card}
    >
      <img
        src={`src/assets/services/${icons[index]}.png`}
        className={`absolute ${getCatClassName(index)} hover:animate-hop`}
        alt=""
      />
      {!isMobile && (
        <button
          type="button"
          className="absolute top-1 right-2"
          onClick={() => stateController(null)}
        >
          <p>
            &#10005;
          </p>
        </button>
      )}
      <div className="flex flex-col items-center">
        <h1 className="text-[38px] text-basic drop-shadow-md tracking-wider">{services[itemName].title}</h1>
        <img src="./public/line.png" alt="" />
      </div>
      <div className="flex flex-col gap-4 items-center mt-8 leading-4">
        {services[itemName].paragraphs.map((para, paraIndex) => <p key={`para${paraIndex.toString()}`} className="text-center">{para}</p>)}
      </div>
      <ul className="list-disc text-sm mt-8 leading-4">
        {services[itemName].extraInfo.map((extraInfo, extraInfoIndex) => (
          <li
            key={`extraInfo${extraInfoIndex.toString()}`}
            className="text-melon font-normal"
          >
            <span className="font-bold">{extraInfo[0]}</span>
            {extraInfo[1]}
          </li>
        ))}
      </ul>
    </div>
  );
}

Card.propTypes = {
  itemName: PropTypes.string,
  index: PropTypes.number,
  stateController: PropTypes.func,
};

Card.defaultProps = {
  itemName: '',
  index: undefined,
  stateController: undefined,
};

export default Card;
