/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

function StoryContent({
  stateChanger,
}) {
  return (
    <div className="flex flex-col items-center w-full mt-8 font-thasadith">
      <div className="flex flex-col xl:flex-row justify-evenly w-full items-center gap-8">
        <div className="flex flex-col gap-4 items-center">
          <img src="./cats/catn3.png" className="w-[150px] border-b-4 border-blush border-dashed pb-4" alt="" />
          <div className="flex flex-col gap-4 max-w-[900px] items-center font-semibold xl:font-light text-[18px] capitalize pb-4 text-justify">
            <p className="text-black">In the heart of our shared love for all things feline, Fairy Tails was born—a tale spun by two kindred spirits with a passion for whiskers, purrs, and the enchanting world of cats. Our journey began when [Your Names], the dreamweavers behind Fairy Tails, realized the need for a haven where cats could be surrounded by love and care, even when their human companions were away.</p>
            <p className="text-blush drop-shadow-lg">- - &#x25CF; - -</p>
            <p className="text-black">As lifelong cat enthusiasts, our story is one of genuine connection and understanding. We found inspiration in the unique personalities and quirks of our own feline companions, recognizing that each cat is a magical being with distinct needs and preferences. It was this realization that ignited the spark, propelling us into the creation of Fairy Tails—a sanctuary where cats are not merely visitors but cherished members of our ever-growing story.</p>
            <p className="font-meow text-[24px] text-blush font-light border-b-4 border-blush/70 border-dashed xl:border-none pb-4">~ Meghan & Paulina ~</p>
          </div>

        </div>
        <div className="relative flex justify-center">
          <img src="./aboutpic.jpeg" alt="Meghan & Paulina sitting on a couch surrounded by cats" className="max-w-[350px] xl:max-w-[350px] rounded-lg shadow-xl shadow-basic/40" />
          <button
            type="button"
            className="absolute border px-5 bg-white -bottom-5 text-[32px] shadow-lg shadow-basic/40 border-blush animate-breathing"
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
