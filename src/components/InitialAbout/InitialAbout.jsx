import React from 'react';
import PropTypes from 'prop-types';

function InitialAbout({
  stateChanger,
}) {
  return (
    <div className="flex flex-col flex-auto items-center gap-24 mt-8 font-thasadith text-[32px]">
      <div className="flex flex-col items-center">
        <div className="xl:hidden flex uppercase gap-1 tracking-widest md:text-[42px]">
          <p>Who</p>
          <p>Are</p>
          <p>We?</p>
        </div>
        <div className="relative flex flex-col items-center justify-center gap-8 xl:gap-16 w-[95vw]">
          {/* <div className="hidden xl:flex flex items-center text-[96px] font-bold text-foundation drop-shadow-sm gap-8 tracking-widest">
            <p>Who</p>
            <p>Are</p>
            <p>We?</p>
          </div> */}
          {/* <img
            className="w-[250px] xs:w-[275px] sm:w-[300px] md:w-[325px] lg:w-[350px] xl:w-[375px] drop-shadow-lg"
            src="./aboutus.png"
            alt="Meghan & Paulina sitting on a couch surrounded by cats"
          />
          <img
            className="absolute w-[250px] xs:w-[275px] sm:w-[300px] md:w-[325px] lg:w-[350px] xl:w-[375px] drop-shadow-lg"
            src="./aboutus.png"
            alt="Meghan & Paulina sitting on a couch surrounded by cats"
          /> */}
          <div className="relative flex justify-center">
            <button
              type="button"
              className="border border-black px-5 bg-white animate-breathing"
              onClick={() => { stateChanger('story'); }}
            >
              Our Story :&#41;
            </button>
          </div>
        </div>
      </div>
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
