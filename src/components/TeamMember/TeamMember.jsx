import React, { useEffect, useRef } from 'react';

function TeamMember({
  memberName,
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
    <div className="relative flex flex-col items-center gap-4 w-full max-w-[340px]">
      <div className="relative flex items-center justify-center flex-auto h-[200px] rounded-t-lg border-x-4 border-y-0 border-t-orangutan border-b-melon border-r-melon border-l-orangutan overflow-hidden drop-shadow-lg">
        <img ref={img} src={`./${name}.jpeg`} className="w-full top-20" />
      </div>
      <div className="w-[60%]   bg-white rounded-b-md h-8 drop-shadow-lg absolute -top-2" />
      <h1 className="absolute -top-10 text-melon drop-shadow-lg text-[48px] font-animal">{memberName}</h1>
      <div className="flex flex-col gap-2 text-nowrap flex-auto h-fit px-2 w-full border-x border-dashed border-melon">
        {info[memberName].map((item) => (
          <div className="flex gap-5 text-centertext-nowrap">
            <p className="flex items-center bg-orangutan text-basic drop-shadow-md w-fit p-1">
              {item[0]}
            </p>
            <p className="flex items-center bg-melon w-fit flex-auto  text-white p-1 drop-shadow-md pl-4 text-sm">{item[1]}</p>
          </div>
        ))}

      </div>

      <div>
        <p className="px-4 border-x border-x-melon border-dashed leading-tight">Hello fellow feline enthusiasts! My name is Sarah, and I'm your dedicated cat sitter extraordinaire. As a lifelong lover of all things whiskers and purrs, I bring not only a passion for cats but also years of experience in caring for our furry friends.</p>
      </div>

    </div>
  );
}

export default TeamMember;
