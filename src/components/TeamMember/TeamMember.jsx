import React, { useEffect, useRef } from 'react';
import Cat from '../cat/cat';

function TeamMember({
  memberName,
}) {
  const info = {
    Paulina: [
      ['Nationality:', 'Polish'],
      ['My Fur Babies:', 'Oreo, Biscuit, Sierra'],
      ['Starbucks Order:', 'Latte with Milk'],
      ['Dream Vacation:', 'Bahamas'],
      ['Favorite TV Show:', 'Avengers'],
    ],
    Meghan: [
      ['Nationality:', 'South African'],
      ['My Fur Babies:', 'Molly, Simba, Nunie and Draco'],
      ['Starbucks Order:', 'Iced Vanilla Latte'],
      ['Dream Vacation:', 'Japan'],
      ['Favorite TV Show:', 'Chicago Fire'],
    ],
  };

  const name = memberName.toLowerCase();
  const img = useRef(null);

  return (
    <div className="relative flex flex-col items-center w-full gap-4 max-w-[1250px] h-full animate-fadein">
      <div className="flex items-center justify-center gap-16">
        <div className="flex items-center gap-16">
          <div className="relative flex items-center justify-center flex-auto w-[250px] rounded-lg border-x-4 border-y-0 border-t-orangutan border-b-melon border-r-melon border-l-orangutan overflow-hidden drop-shadow-lg">
            <img ref={img} src={`./${name}.jpeg`} className="w-full top-20" />
          </div>
          <div className="flex flex-col gap-2 text-nowrap flex-auto h-fit px-2 w-max border-x border-dashed border-blush">
            {info[memberName].map((item) => (
              <div className="flex gap-5 text-centertext-nowrap w-full">
                <p className="flex items-center bg-beige text-black drop-shadow-md w-fit px-2">
                  {item[0]}
                </p>
                <p className="flex items-center bg-blush w-fit flex-auto  text-white p-1 drop-shadow-md pl-4">{item[1]}</p>
              </div>
            ))}
          </div>
          <p className="text-justify italic font-bold text-sm text-basic max-w-[300px] border-1 border-b pb-4 border-dotted border-melon">Contact us, share your cat&apos;s needs, and our team will swiftly match you with a trusted sitter. Discuss details like routines and preferences, finalize the booking for a stress-free experience. Our goal is hassle-free and personalized cat sitting for your peace of mind.</p>
        </div>
      </div>
      <div className="flex justify-center w-max gap-4 items-center  max-h-[500px] animate-fadein">
        {[...Array(4)].map((item, index) => (
          <Cat index={index} />
        ))}

      </div>
    </div>
  );
}

export default TeamMember;
