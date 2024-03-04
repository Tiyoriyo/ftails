import React, { useEffect, useRef, useState } from 'react';
import Switch from '../Switch/Switch';
import TeamMember from '../TeamMember/TeamMember';

function MeetTeam({
  member,
  stateChanger,
}) {
  const [state, setState] = useState('Info');
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

  const buttonProperties = {
    Meghan: {
      position: 'left-0',
    },
    Paulina: {
      position: 'right-0',
    },
  };

  const oppositeMember = member === 'Paulina' ? 'Meghan' : 'Paulina';

  return (
    <div className="relative flex flex-col flex-auto gap-10 items-center mt-16 w-[100%] font-sulphur animate-fadein">
      <Switch
        state={state}
        stateController={setState}
        header1="Info"
        header2="Her Cats"
      />
      {state === 'Info' && (
        <TeamMember memberName={member} />
      )}
      {state === 'Her Cats' && (
      <div className="flex justify-center w-max gap-4 border-x border-dashed border-blush px-2 items-center  max-h-[500px] animate-fadein">
        <div className="relative w-[200px] h-[200px] overflow-hidden border-2 border-blush">
          <img src="./meghancats/imgcat1.jpg" className="absolute drop-shadow-lg" />
        </div>
        <div className="relative w-[200px] h-[200px] overflow-hidden border-2 border-blush">
          <img src="./meghancats/imgcat2.jpg" className="absolute -top-8 drop-shadow-lg" />
        </div>
        <div className="relative w-[200px] h-[200px] overflow-hidden border-2 border-blush">
          <img src="./meghancats/imgcat3.jpg" className="absolute -top-10 drop-shadow-lg" />
        </div>
        <div className="w-[200px] overflow-hidden border-2 border-blush h-fit">
          <img src="./meghancats/imgcat4.jpg" className="drop-shadow-lg" />
        </div>

      </div>
      )}
    </div>
  );
}

export default MeetTeam;
