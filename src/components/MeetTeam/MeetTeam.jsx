import React, { useEffect, useRef, useState } from 'react';
import TeamMember from '../TeamMember/TeamMember';

function MeetTeam({
  mainStateChanger,
}) {
  const [width, setWidth] = useState(window.innerWidth);
  const infoBox = useRef(null);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width < 1024;

  const info = {
    Paulina: [
      ['Nationality:', 'Poland'],
      ['My Fur Babies:', 'Oreo, Biscuit, Sierra'],
      ['Starbucks Order:', 'Latte with Milk'],
      ['Dream Vacation:', 'Bahamas'],
      ['Favorite TV Show:', 'Avengers'],
    ],
    Meghan: [
      ['Nationality:', 'South Africa'],
      ['My Fur Babies:', 'Choppy, Toppy, Sloppy'],
      ['Starbucks Order:', 'Latte with Water'],
      ['Dream Vacation:', 'Chicago'],
      ['Favorite TV Show:', 'Naruto'],
    ],
  };

  const dash = isMobile ? '-' : '|';

  return (
    <div className="flex flex-col items-center gap-10 mt-12 w-[100%] font-sulphur">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="flex items-center gap-12 md:gap-24 lg:gap-20">
          <img src="./scribble-v.png" className="hidden min-[600px]:block h-[200px]" />
          <TeamMember memberName="Paulina" />
          <img src="./scribble-v.png" className="hidden min-[600px]:block lg:hidden h-[200px]" />
        </div>
        <div className="flex flex-row gap-2 lg:flex-col items-center">
          <p className="text-melon drop-shadow-lg">{dash}</p>
          <p className="text-melon drop-shadow-lg">{dash}</p>
          <p className="text-melon drop-shadow-lg">&#x25CF;</p>
          <p className="text-melon drop-shadow-lg">{dash}</p>
          <p className="text-melon drop-shadow-lg">{dash}</p>
        </div>
        <div className="flex items-center gap-12  md:gap-24 lg:gap-20">
          <img src="./scribble-v.png" className="hidden min-[600px]:block lg:hidden h-[200px]" />
          <TeamMember memberName="Meghan" />
          <img src="./scribble-v.png" className="hidden min-[600px]:block  h-[200px]" />
        </div>
      </div>
      <button
        type="button"
        className="hidden xl:block w-fit border px-10 py-3 rounded-lg bg-white -bottom-5 text-[36px] shadow-lg border-black animate-breathing hover:border-melon hover:shadow-melon/40 hover:text-melon"
        onClick={() => { mainStateChanger('services'); }}
      >
        Services
      </button>
    </div>
  );
}

export default MeetTeam;
