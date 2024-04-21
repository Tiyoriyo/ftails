import React, { useEffect, useRef } from 'react';

function SelectTeam({
  stateChanger,
}) {
  const img1 = useRef(null);
  const img1bd = useRef(null);
  const img2 = useRef(null);
  const img2bd = useRef(null);

  useEffect(() => {
    img1.current.addEventListener('mouseover', () => {
      if (![...img1bd.current.classList].includes('blur-lg')) {
        img1bd.current.classList.add('blur-lg');
      }
    });
    img1.current.addEventListener('mouseout', () => {
      img1bd.current.classList.remove('blur-lg');
    });
    img2.current.addEventListener('mouseover', () => {
      if (![...img1bd.current.classList].includes('blur-lg')) {
        img2bd.current.classList.add('blur-lg');
      }
    });
    img2.current.addEventListener('mouseout', () => {
      img2bd.current.classList.remove('blur-lg');
    });
  });

  return (
    <div className="flex items-center gap-12 self-start mt-32 font-thasadith border-b pb-16  border-dashed rounded-xl drop-shadow-lg animate-fadein">
      <div className="flex items-center gap-16 text-blush">
        <h1 className="text-[96px] font-animal text-blush select-none">Paulina</h1>
        <div className="flex flex-col gap-8">
          <p className="text-melon drop-shadow-lg self-center">&#x25CF;</p>
          <div className="flex relative">
            <img ref={img1} src="./paulina.jpeg" className="w-[200px] rounded-md hover:cursor-pointer" onClick={() => { stateChanger('Paulina'); }} />
            <img ref={img1bd} src="./paulina.jpeg" className="absolute w-[200px] rounded-md -z-10  transition-[--tw-blur]" />
          </div>
          <p className="text-melon drop-shadow-lg self-center">&#x25CF;</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-blush font-bold select-none">
        <p className="text-melon drop-shadow-lg self-center">|</p>
        <p className="text-melon drop-shadow-lg self-center">|</p>
        <p className="text-melon drop-shadow-lg self-center">&#x25CF;</p>
        <p className="text-melon drop-shadow-lg self-center">|</p>
        <p className="text-melon drop-shadow-lg self-center">|</p>
      </div>
      {' '}
      <div className="flex items-center gap-16">
        <div className="flex flex-col text-blush gap-8">
          <p className="text-melon drop-shadow-lg self-center">&#x25CF;</p>
          <div className="flex relative">
            <img ref={img2} src="./meghan.jpeg" className="w-[200px] rounded-md hover:cursor-pointer" onClick={() => { stateChanger('Meghan'); }} />
            <img ref={img2bd} src="./meghan.jpeg" className="absolute w-[200px] rounded-md -z-10 transition-[--tw-blur]" />
          </div>
          <p className="text-melon drop-shadow-lg self-center">&#x25CF;</p>
        </div>
        <h1 className="text-[96px] font-animal text-blush border-foundation select-none">Meghan</h1>
      </div>

    </div>
  );
}

export default SelectTeam;
