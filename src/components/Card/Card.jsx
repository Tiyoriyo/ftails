import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import services from '../../assets/services';
import PhoneDirectionButtons from '../PhoneDirectionButtons/PhoneDirectionButtons';

function Card({
  itemName,
  index,
  stripIndex,
  itemController,
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
        return 'w-40 -top-10';
      }
      case 3: {
        return 'w-24 -top-24';
      }
      default: {
        return 'w-32 -top-20';
      }
    }
  }

  const isMobile = width < 1280;

  return (
    <div
      className="relative  w-[336px] xs:w-[375px] md:w-[400px] h-max self-center flex flex-col flex-shrink-0 items-center p-10 md:p-14 border-black border-solid border bg-white bg-opacity-80 shadow-lg justify-center transition-opacity duration-700"
      ref={card}
    >
      <img
        className={`absolute ${getCatClassName(index)}`}
        src={`src/assets/cats/catn${index + 1}.png`}
        alt=""
      />
      {!isMobile && (
        <button
          type="button"
          onClick={() => stateController(null)}
        >
          <p
            className="absolute w-5 h-5 right-0 top-0 text-sm font-medium mt-1 hover:animate-pulse hover:font-bold"
          >
            &#10005;
          </p>
        </button>
      )}
      <div className="flex flex-col items-center">
        <h1 className="textShadow font-thasadith text-center font-bold text-4xl tracking-[4.2px] lowercase text-[#525252]">{services[itemName].title}</h1>
        <img src="./public/line.png" alt="" />
      </div>
      <div className="flex flex-col gap-4 font-sulphur text-lg font-light textShadow text-center tracking-tighter mt-4">
        {services[itemName].paragraphs.map((para, paraIndex) => <p className="leading-4" key={`para${paraIndex.toString()}`}>{para}</p>)}
      </div>
      <ul className="list-disc text-[#C37272] font-sulphur mt-8 text-[15px] leading-4">
        {services[itemName].extraInfo.map((extraInfo, extraInfoIndex) => (
          <li key={`extraInfo${extraInfoIndex.toString()}`}>
            <span className="font-semibold">{extraInfo[0]}</span>
            {extraInfo[1]}
          </li>
        ))}
      </ul>
      <PhoneDirectionButtons
        itemController={itemController}
        stripIndex={stripIndex}
        index={index}
      />
    </div>
  );
}

Card.propTypes = {
  itemName: PropTypes.string,
  index: PropTypes.number,
  stripIndex: PropTypes.number,
  itemController: PropTypes.func,
  stateController: PropTypes.func,
};

Card.defaultProps = {
  itemName: '',
  index: undefined,
  stripIndex: undefined,
  itemController: undefined,
  stateController: undefined,
};

export default Card;
