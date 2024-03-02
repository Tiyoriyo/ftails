import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import services from '../../../public/services';

function Card({
  itemName,
  index,

}) {
  const card = useRef(null);

  const icons = ['home', 'sleep', 'medication', 'addons'];

  return (
    <div
      className="relative flex items-center flex-col bg-white border border-black drop-shadow-lg p-10  w-[85%] min-[850px]:w-[450px] font-sulphur font-bold max-w-[500px]"
      ref={card}
    >
      <img
        src={`./services/${icons[index]}.png`}
        className="absolute w-28 -top-16 hover:animate-hop"
        alt=""
      />
      <div className="flex flex-col items-center">
        <h1 className="text-[24px] text-basic drop-shadow-md tracking-wider">{services[itemName].title}</h1>
        <img src="./line.png" alt="" />
      </div>
      <div className="flex flex-col gap-4 items-center mt-8 leading-4">
        {services[itemName].paragraphs.map((para, paraIndex) => <p key={`para${paraIndex.toString()}`} className="text-center">{para}</p>)}
      </div>
      <ul className="list-disc text-sm mt-8 leading-4">
        {services[itemName].extraInfo.map((extraInfo, extraInfoIndex) => (
          <li
            key={`extraInfo${extraInfoIndex.toString()}`}
            className="text-melon font-normal text-blush"
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
};

Card.defaultProps = {
  itemName: '',
  index: undefined,
};

export default Card;
