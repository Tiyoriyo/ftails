/* eslint-disable max-len */
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

function StoryContent({
  stateChanger,
}) {
  const item1 = useRef(null);
  const item2 = useRef(null);
  const item3 = useRef(null);
  const item4 = useRef(null);
  const item5 = useRef(null);
  const item6 = useRef(null);
  const item7 = useRef(null);

  useState(() => {
    setTimeout(() => { item1.current.style.opacity = 100; }, 0);
    setTimeout(() => { item2.current.style.opacity = 100; }, 500);
    setTimeout(() => { item3.current.style.opacity = 100; }, 1000);
    setTimeout(() => { item4.current.style.opacity = 100; }, 1500);
    setTimeout(() => { item5.current.style.opacity = 100; }, 2000);
    setTimeout(() => { item6.current.style.opacity = 100; }, 2500);
    setTimeout(() => { item7.current.style.opacity = 100; }, 3000);
  });

  return (
    <div className="flex flex-col items-center w-full mt-8 font-thasadith animate-fadein duration-1000">
      <div className="flex flex-col xl:flex-row justify-evenly  items-center gap-8">
        <div className="flex flex-col gap-4 items-center">
          <img ref={item1} src="./cats/catn3.png" className="w-[150px] border-b-4 border-blush border-dashed pb-4 transition-opacity duration-[1.5s]" alt="" style={{ opacity: 0 }} />
          <div className="flex flex-col gap-4 max-w-[900px] items-center font-semibold xl:font-light text-[18px] capitalize pb-4 text-justify">
            <p ref={item2} className="text-black transition-opacity duration-[1.5s]" style={{ opacity: 0 }}>In the heart of our shared love for all things feline, Fairy Tails was born—a tale spun by two kindred spirits with a passion for whiskers, purrs, and the enchanting world of cats. Our journey began when [Your Names], the dreamweavers behind Fairy Tails, realized the need for a haven where cats could be surrounded by love and care, even when their human companions were away.</p>
            <p ref={item3} className="text-blush drop-shadow-lg transition-opacity duration-[1.5s]" style={{ opacity: 0 }}>- - &#x25CF; - -</p>
            <p ref={item4} className="text-black transition-opacity duration-[1.5s]" style={{ opacity: 0 }}>As lifelong cat enthusiasts, our story is one of genuine connection and understanding. We found inspiration in the unique personalities and quirks of our own feline companions, recognizing that each cat is a magical being with distinct needs and preferences. It was this realization that ignited the spark, propelling us into the creation of Fairy Tails—a sanctuary where cats are not merely visitors but cherished members of our ever-growing story.</p>
            <p ref={item5} className="font-meow text-[24px] text-blush font-light border-b-4 border-blush/70 border-dashed xl:border-none pb-4 transition-opacity duration-[1.5s]" style={{ opacity: 0 }}>~ Meghan & Paulina ~</p>
          </div>

        </div>
        <div className="relative flex justify-center">
          <img ref={item6} src="./aboutpic.jpeg" alt="Meghan & Paulina sitting on a couch surrounded by cats" className="max-w-[350px] xl:max-w-[350px] rounded-lg shadow-xl shadow-basic/40 transition-opacity duration-[1.5s]" style={{ opacity: 0 }} />
          <button
            ref={item7}
            type="button"
            className="absolute border px-5 bg-white -bottom-5 text-[32px] shadow-lg shadow-basic/40 border-blush animate-breathing transition-opacity duration-[1.5s]"
            style={{ opacity: 0 }}
            onClick={() => { stateChanger('meetteam'); }}
          >
            Meet the team :&#41;
          </button>
        </div>
        <p className="xl:hidden text-blush drop-shadow-lg self-center mt-8 text-3xl">- - &#x25CF; - -</p>
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
