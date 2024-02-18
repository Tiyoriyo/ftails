import React from 'react';

function ServicePriceButton({
  state,
  stateController,
}) {
  return (
    <div className="flex items-center border-b-2 border-[#252525] border-dashed pb-4">
      <div className=" bg-black w-[50px] h-0.5 -z-50" />

      <button
        type="button"
        className={`py-2 px-10 ${state === 'Services' ? 'bg-orangutan' : 'bg-melon'} drop-shadow-lg animate-breathing ${state === 'Services' ? 'hover:bg-orangutan' : 'hover:bg-melon'}`}
        onClick={stateController}
      >
        {state}
      </button>

      <div className=" bg-black w-[50px] h-0.5 -z-50" />
    </div>
  );
}

export default ServicePriceButton;
