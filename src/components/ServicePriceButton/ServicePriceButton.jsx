import React from 'react';

function ServicePriceButton({
  state,
  stateController,
}) {
  const src = state === 'Prices' ? 'onslide.png' : 'offslide.png';

  return (
    <div className="flex items-center gap-0 font-thasadith w-full justify-center">
      <h1 className={`${state === 'Services' ? 'border-b-blush' : ''} border-b pb-1 w-[60px]`}>Services</h1>
      <button
        type="button"
        className={`py-2 px-10  ${state === 'Services' ? 'bg-orangutan' : 'bg-melon'} drop-shadow-lg animate-breathing ${state === 'Services' ? 'hover:bg-orangutan' : 'hover:bg-melon'}`}
        onClick={() => { stateController(); }}
      >
        <img src={src} className="w-[80px]" />
      </button>
      <h1 className={`${state === 'Prices' ? 'border-b-blush' : ''} border-b pb-1 w-[60px]`}>Prices</h1>
    </div>
  );
}

export default ServicePriceButton;
