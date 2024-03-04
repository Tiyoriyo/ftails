import React from 'react';

function Switch({
  state,
  stateController,
  header1,
  header2,
}) {
  const src = state === header1 ? 'offslide.png' : 'onslide.png';

  const oppositeState = state === header1 ? header2 : header1;

  return (
    <div className="flex items-center gap-0 font-thasadith w-full justify-center">
      <h1 className={`${state === header1 ? 'border-b-blush' : ''} border-b pb-1 w-[60px] text-center`}>{header1}</h1>
      <button
        type="button"
        className="py-2 px-10 "
        onClick={() => { stateController(oppositeState); }}
        aria-label="Price & Service Switch"
      >
        <img src={src} className="w-[80px]" alt="" />
      </button>
      <h1 className={`${state === header2 ? 'border-b-blush' : ''} border-b pb-1 w-[60px] text-center`}>{header2}</h1>
    </div>
  );
}

export default Switch;
