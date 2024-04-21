/* eslint-disable max-len */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import storyData from './storyData';

function StoryContent({
  stateChanger,
}) {
  const item1 = useRef(null);
  const item2 = useRef(null);
  const item3 = useRef(null);

  useEffect(() => {
    setTimeout(() => { item1.current.style.opacity = 100; }, 0);
    setTimeout(() => { item2.current.style.opacity = 100; }, 500);
    setTimeout(() => { item3.current.style.opacity = 100; }, 1000);
  });

  return (
    <div className="flex flex-col items-center w-full mt-8 font-thasadith animate-fadein duration-1000">
      <div className="flex flex-col xl:flex-row justify-evenly  items-center gap-8">
        <div
          ref={item1}
          className="flex flex-col gap-4 items-center transition-opacity duration-1000"
          style={{ opacity: 0 }}
        >
          <img
            src="./cats/catn3.png"
            className="w-[150px] border-b-4 border-blush border-dashed pb-4"
            alt=""
          />
          <div className="flex flex-col gap-4 max-w-[900px] items-center font-semibold xl:font-light text-[18px] capitalize pb-4 text-justify">
            <p className="text-black ">{storyData.para1}</p>
            <p className="text-blush drop-shadow-lg">- - &#x25CF; - -</p>
            <p className="text-black">{storyData.para2}</p>
            <p className="font-meow text-[24px] text-blush font-light border-b-4 border-blush/70 border-dashed xl:border-none pb-4">~ Meghan & Paulina ~</p>
          </div>
        </div>
        <div className="relative flex justify-center">
          <img
            ref={item2}
            src="./aboutpic.jpeg"
            alt="Meghan & Paulina sitting on a couch surrounded by cats"
            className="max-w-[350px] xl:max-w-[350px] rounded-lg shadow-xl shadow-basic/40 transition-opacity duration-1000"
            style={{ opacity: 0 }}
          />
          <button
            ref={item3}
            type="button"
            className="absolute border px-5 bg-white -bottom-5 text-[32px] shadow-lg shadow-basic/40 border-blush animate-breathing rounded-lg transition-opacity duration-1000"
            style={{ opacity: 0 }}
            onClick={() => { stateChanger('selectteam'); }}
          >
            Meet the team :&#41;
          </button>
        </div>
      </div>
    </div>
  );
}

StoryContent.propTypes = {
  stateChanger: PropTypes.func,
};

StoryContent.defaultProps = {
  stateChanger: undefined,
};

export default StoryContent;
