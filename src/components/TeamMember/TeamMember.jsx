import React, { useEffect, useRef } from 'react';

function TeamMember({
  memberName,
  addClass,
}) {
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

  const name = memberName.toLowerCase();
  const img = useRef(null);

  useEffect(() => {
    console.log(img.current.offsetHeight);
  });

  return (
    <div className="relative flex items-center gap-4 max-w-[1000px] h-full">
      <div className="relative flex items-center justify-center flex-auto w-[300px] rounded-lg border-x-4 border-y-0 border-t-orangutan border-b-melon border-r-melon border-l-orangutan overflow-hidden drop-shadow-lg">
        <img ref={img} src={`./${name}.jpeg`} className="w-full top-20" />
      </div>
      {/* <div className="w-[60%]   bg-white rounded-b-md h-8 drop-shadow-lg absolute -top-2" /> */}
      {/* <h1 className="absolute -top-10 text-blush drop-shadow-lg text-[48px] font-animal">{memberName}</h1> */}
      <div className="flex flex-col gap-2 text-nowrap flex-auto h-fit px-2 w-full border-x border-dashed border-blush">
        {info[memberName].map((item) => (
          <div className="flex gap-5 text-centertext-nowrap">
            <p className="flex items-center bg-beige text-black drop-shadow-md w-fit p-1">
              {item[0]}
            </p>
            <p className="flex items-center bg-blush w-fit flex-auto  text-white p-1 drop-shadow-md pl-4">{item[1]}</p>
          </div>
        ))}

      </div>
    </div>
  );
}

export default TeamMember;
