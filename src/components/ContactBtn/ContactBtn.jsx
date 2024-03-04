import React from 'react';

function ContactBtn({
  bgStateChanger,
}) {
  console.log(bgStateChanger);
  return (

    <div className="absolute right-12 bottom-12" onClick={() => { bgStateChanger(); }}>
      <img src="./contactus.png" className="w-[250px] hover:animate-growhover" />
    </div>

  );
}

export default ContactBtn;
