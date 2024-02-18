import React from 'react';
import PropTypes from 'prop-types';

function InitialAbout({
  stateChanger,
}) {
  return (
    <div className="flex flex-col flex-auto items-center gap-24 mt-8 xl:mt-24 font-thasadith text-[32px]">
      <div className="flex flex-col items-center">
        <div className="xl:hidden flex uppercase gap-1 tracking-widest md:text-[42px]">
          <p>Who</p>
          <p>Are</p>
          <p>We?</p>
        </div>
        <div className="flex items-center justify-center gap-8 xl:gap-16 w-[95vw]">
          <img src="public/scribble-v.png" className="h-[250px] opacity-35 xs:mr-[50px] md:mr-[100px] lg:mr-[150px]" alt="" />
          <div className="hidden xl:flex flex-col items-center text-[96px] uppercase gap-1 tracking-widest">
            <p>Who</p>
            <p>Are</p>
            <p>We?</p>
          </div>
          <div className="relative flex justify-center">
            <img
              src="src/assets/cats/catn3.png"
              className="hidden xl:block absolute w-[250px] -top-12 z-10 hover:animate-hop"
              alt=""
            />
            <img
              className="w-[250px] xs:w-[275px] sm:w-[300px] md:w-[325px] lg:w-[350px] xl:w-[375px] drop-shadow-lg"
              src="src/assets/aboutus.png"
              alt="Meghan & Paulina sitting on a couch surrounded by cats"
            />
            <button
              type="button"
              className="xl:hidden absolute border border-black px-5 bg-white -bottom-10 animate-breathing"
              onClick={() => { stateChanger('story'); }}
            >
              Our Story :&#41;
            </button>
          </div>
          <img src="public/scribble-v.png" className="h-[250px] opacity-35 xs:ml-[50px] md:ml-[100px] lg:ml-[150px]" alt="" />
        </div>
      </div>
      <button
        type="button"
        className="hidden xl:block border border-black px-5 bg-white text-[42px] rounded-md drop-shadow-lg tracking-widest animate-breathing  hover:border-melon hover:shadow-melon/40 hover:text-melon"
        onClick={() => { stateChanger('story'); }}
      >
        Our Story :&#41;
      </button>
    </div>
  );
}

InitialAbout.propTypes = {
  stateChanger: PropTypes.func,
};

InitialAbout.defaultProps = {
  stateChanger: undefined,
};

export default InitialAbout;
