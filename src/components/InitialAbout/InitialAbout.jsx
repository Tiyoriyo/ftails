import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function InitialAbout({
  stateChanger,
}) {
  const who1 = useRef(null);
  const who2 = useRef(null);
  const who3 = useRef(null);
  const who4 = useRef(null);
  const whoImg = useRef(null);
  const btn = useRef(null);

  useEffect(() => {
    setTimeout(() => { whoImg.current.style.opacity = 100; }, 0);
    setTimeout(() => { who1.current.style.opacity = 100; }, 500);
    setTimeout(() => { who2.current.style.opacity = 100; }, 1000);
    setTimeout(() => { who3.current.style.opacity = 100; }, 1500);
    setTimeout(() => { who4.current.style.opacity = 100; }, 2000);
    setTimeout(() => { btn.current.style.opacity = 100; }, 2500);
  });

  return (
    <div className="flex flex-col flex-auto items-center gap-24 mt-8 font-thasadith text-[32px]">
      <div className="flex flex-col items-center">
        <div className="relative flex items-center justify-center  gap-0 w-[95vw]">
          <div className="flex flex-col items-end w-[500px] text-[96px] text-black drop-shadow-sm tracking-widest uppercase">
            <p ref={who1} className="transition-opacity duration-[1.5s]" style={{ opacity: 0 }}>Who</p>
            <p ref={who3} className="transition-opacity duration-[1.5s]" style={{ opacity: 0 }}>We</p>
          </div>
          <div className="relative flex justify-center mx-12">
            <img
              ref={whoImg}
              className="w-[250px] xs:w-[275px] sm:w-[300px] md:w-[325px] lg:w-[350px] xl:w-[400px] drop-shadow-lg duration-[1.5s] transition-all"
              style={{ opacity: 0 }}
              src="./aboutus.png"
              alt="Meghan & Paulina sitting on a couch surrounded by cats"
            />
            <button
              ref={btn}
              type="button"
              className="absolute -bottom-5 px-8 py-1  shadow-lg shadow-blush rounded-md border border-black px-5 bg-white animate-breathing transition-all duration-[1.5s]"
              style={{ opacity: 0 }}
              onClick={() => { stateChanger('story'); }}
            >
              Our Story :&#41;
            </button>
          </div>
          <div />
          <div className="flex flex-col items-start w-[500px] text-[96px] text-black drop-shadow-sm tracking-widest uppercase">
            <p ref={who2} className="transition-opacity duration-[1.5s]" style={{ opacity: 0 }}>Are</p>
            <p ref={who4} className="transition-opacity duration-[1.5s]" style={{ opacity: 0 }}>?</p>
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
