import React from 'react';

function Testimonial({
  info,
}) {
  return (
    <div className="flex flex-col flex-auto w-[350px] h-auto border shadow-md">
      <div className="flex flex-col gap-4 flex-auto  bg-white max-h-[3/5] p-5">
        <div className="flex items-center">
          <img src="./quote.svg" className="w-10" alt="" />
          <div className="flex ml-auto gap-1">
            {[...Array(info.stars)].map(() => <img src="./star.svg" className="h-4 text-yellow-400 drop-shadow-md" alt="" />)}
          </div>
        </div>
        <p className="text-[18px] text-center">
          {info.para}
        </p>
      </div>
      <div className="flex items-center flex-auto gap-8 bg-blush max-h-[1/4] p-4">
        <img src="./loki.png" className="w-[50px] border-2 border-solid rounded-[50px]" alt="" />
        <p className="text-[32px] font-animal text-white">Loki</p>
      </div>
    </div>
  );
}

export default Testimonial;
