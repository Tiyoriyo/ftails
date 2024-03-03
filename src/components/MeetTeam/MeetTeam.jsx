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

  const dash = '|';

  return (
    <div className="flex flex-col flex-auto items-center gap-10 mt-12 w-[100%] font-sulphur animate-fadein">
      <div className="flex items-center gap-8 w-full justify-center">

        <TeamMember memberName="Paulina" />

        <div className="flex flex-col gap-2 items-center self-center">
          <p className="text-blush drop-shadow-lg">{dash}</p>
          <p className="text-blush drop-shadow-lg">{dash}</p>
          <p className="text-blush drop-shadow-lg">&#x25CF;</p>
          <p className="text-blush drop-shadow-lg">{dash}</p>
          <p className="text-blush drop-shadow-lg">{dash}</p>
        </div>

        <TeamMember memberName="Meghan" />

      </div>
    </div>
  );
}

export default MeetTeam;
