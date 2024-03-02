import React from 'react';

function PricesPage() {
  const mainServiceItems = [
    ['Home Visit', '80 - 150 AED'],
    ['Sleep Over', '250 AED'],
    ['Mani Pawi', '20 AED'],
    ['Ear Cleaning', '10 AED'],
  ];

  const additionalServices = [
    ['Administration of Medication', '35 - 50 AED'],
  ];
  const importantDetails = [
    'Prices vary depending on location / medication',
    'Home visit duration: 45 minutes',
    'Sleep over duration: 8am Till 8pm',
  ];

  return (
    <div className="relative flex flex-col items-center  w-full text-basic md:tracking-widest animate-fadein">
      <div className="flex flex-col gap-2 border border-black rounded-sm bg-white w-[800px] font-thasadith drop-shadow-lg py-4 pb-12 px-4 md:px-8 mb-8">
        <h1 className="font-extrabold tracking-widest text-[36px] md:text-[48px] self-center">Rates</h1>
        <div className="flex flex-col">
          <h2 className="border-b border-basic text-[24px] md:text-[28px] font-bold md:text-[42px]">Main Services</h2>
          <ul className="flex flex-col gap-1 pt-1">
            {mainServiceItems.map((item) => (
              <div className="flex border-b border-black border-dotted font-semibold">
                <li className="ml-2 pl-3 list list-['\22C5'] md:text-[18px]">{item[0]}</li>
                <p className="ml-auto md:text-[20px]">{item[1]}</p>
              </div>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="border-b border-basic text-[24px] md:text-[28px] font-bold">
            Additional Services
          </h2>
          <ul className="flex flex-col gap-1 pt-1">
            {additionalServices.map((item) => (
              <div className="flex border-b border-black border-dotted font-semibold">
                <li className="ml-2 pl-3 list list-['\22C5'] md:text-[18px]">{item[0]}</li>
                <p className="ml-auto md:text-[20px]">{item[1]}</p>
              </div>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="border-b border-basic text-[24px] font-bold">
            Important Details
          </h2>
          <ul className="flex flex-col md:gap-1 pt-1">
            {importantDetails.map((item) => (
              <div className="flex font-semibold text-sm">
                <li className="ml-2 pl-3 list list-['\22C5'] md:text-[15px]">{`${item}`}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PricesPage;
