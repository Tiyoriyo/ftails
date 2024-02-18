import React from 'react';

function AffiliationPage() {
  return (
    <div className="relative flex flex-col flex-auto w-full items-center font-thasadith">
      <div className="flex items-center gap-32 mt-40">
        <div className="flex flex-col items-center gap-8">
          <h2 className="uppercase border-b-2 border-basic/40 text-[32px] tracking-widest">Licensed</h2>
          <img src="src/assets/licensed.png" className="w-[150px] drop-shadow-lg hover:animate-growhover" />
        </div>
        <div className="flex flex-col items-center gap-8">
          <h2 className="uppercase border-b-2 border-basic/40 text-[32px] tracking-widest">Certified</h2>
          <img src="src/assets/certified.png" className="w-[150px] drop-shadow-lg hover:animate-growhover" />
        </div>
        <div className="flex flex-col items-center gap-8">
          <h2 className="uppercase border-b-2 border-basic/40 text-[32px] tracking-widest">Caring</h2>
          <img src="src/assets/caring.png" className="w-[150px] drop-shadow-lg hover:animate-growhover" />
        </div>
      </div>
      <div className="absolute flex justify-center bottom-0 -z-20 w-screen ">
        <img src="src/assets/park.png" alt="" />
        <img src="src/assets/cats/catn1.png" className="absolute w-[175px] bottom-5 left-[600px]" />
        <img src="src/assets/cats/catn2.png" className="absolute w-[150px] bottom-24 left-[425px]" />
        <img src="src/assets/cats/catn3.png" className="absolute w-[200px] bottom-24 right-[500px]" />
        <img src="src/assets/cats/catn4.png" className="absolute w-[100px] bottom-36" />

      </div>
    </div>
  );
}

export default AffiliationPage;
