/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

function StoryContent({
  stateChanger,
}) {
  return (
    <div className="flex flex-col items-center w-[85%] mt-8 mb-24 font-thasadith">
      <div className="flex flex-col xl:flex-row justify-center items-center gap-8">
        <div className="flex flex-col gap-4 items-center">
          <img src="src/assets/cats/catn3.png" className="w-[150px] border-b-4 border-[#C37272] border-dashed pb-4" alt="" />
          <div className="flex flex-col gap-8 xl:max-w-[550px] items-center font-semibold xl:font-light text-[18px] capitalize pb-4 text-justify">
            <p className="text-[#2D2D2D]">In the heart of our shared love for all things feline, Fairy Tails was born—a tale spun by two kindred spirits with a passion for whiskers, purrs, and the enchanting world of cats. Our journey began when [Your Names], the dreamweavers behind Fairy Tails, realized the need for a haven where cats could be surrounded by love and care, even when their human companions were away.</p>
            <p className="text-[#C37272] drop-shadow-lg">- - &#x25CF; - -</p>
            <p className="text-[#2D2D2D]">As lifelong cat enthusiasts, our story is one of genuine connection and understanding. We found inspiration in the unique personalities and quirks of our own feline companions, recognizing that each cat is a magical being with distinct needs and preferences. It was this realization that ignited the spark, propelling us into the creation of Fairy Tails—a sanctuary where cats are not merely visitors but cherished members of our ever-growing story.</p>
            <p className="font-meow text-[24px] text-[#C37272] font-light border-b-4 border-[#C37272]/70 border-dashed xl:border-none pb-4">~ Meghan & Paulina ~</p>
          </div>

        </div>
        <div className="relative flex justify-center">
          <img src="src/assets/aboutpic.jpeg" alt="Meghan & Paulina sitting on a couch surrounded by cats" className="max-w-[350px] xl:max-w-[450px] rounded-lg shadow-xl shadow-[#7f472d]/40" />
          <button
            type="button"
            className="xl:hidden absolute border px-5 bg-white -bottom-5 text-[32px] shadow-lg shadow-[#C37272]/40 border-[#C37272] animate-breathing"
            onClick={() => { stateChanger('meetteam'); }}
          >
            Meet the team :&#41;
          </button>
        </div>
        <p className="xl:hidden text-[#C37272] drop-shadow-lg self-center mt-8 text-3xl">- - &#x25CF; - -</p>
      </div>
      <button
        type="button"
        className="hidden xl:block w-fit border px-10 py-3 rounded-lg bg-white -bottom-5 text-[36px] shadow-lg border-black animate-breathing hover:border-[#C37272] hover:shadow-[#C37272]/40 hover:text-[#C37272]"
        onClick={() => { stateChanger('meatteam'); }}
      >
        Meet the team :&#41;
      </button>
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
