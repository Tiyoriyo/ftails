import React from 'react';

function Testimonial() {
  return (
    <div className="flex flex-col items-center mt-4 gap-4 font-thasadith  w-[100%]">
      <h1 className="text-[28px] tracking-widest">TESTMINONIALS</h1>
      <div className="flex flex-col flex-auto w-[350px] h-auto border shadow-md">
        <div className="flex flex-col gap-4 flex-auto  max-h-[3/5] p-5">
          <div className="flex items-center">
            <img src="src/assets/quote.svg" className="w-10" alt="" />
            <div className="flex ml-auto gap-1">
              {[...Array(5)].map(() => <img src="src/assets/star.svg" className="h-4 text-yellow-400 drop-shadow-md" alt="" />)}
            </div>
          </div>
          <p className="text-[18px] text-center">Loki received exceptional care from FairyTails, making it the best decision. Highly recommend for worry-free cat sitting!</p>
        </div>
        <div className="flex items-center flex-auto gap-8 bg-[#FFE9D4] max-h-[1/4] p-4">
          <img src="src/assets/loki.png" className="w-[50px]" alt="" />
          <p className="text-[32px] font-animal text-[#6c635b]">Loki</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
