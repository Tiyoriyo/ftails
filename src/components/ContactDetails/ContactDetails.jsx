/* eslint-disable max-len */
import React from 'react';

function ContactDetails() {
  const contactPoints = [
    ['whatsapp', '+971 - 501728594'],
    ['instagram', '@fairytails.catsitting'],
    ['mail', 'fairytails@gmail.com'],
  ];

  return (
    <div className="relative flex items-center gap-16 border border-blush  bg-white p-10 rounded-lg bg-opacity-75 z-50 drop-shadow-lg">
      <p className="absolute right-4 top-2 font-bold text-black select-none">&#x2715;</p>
      <div className="flex flex-col items-center self-center max-w-[600px] z-50">
        <img src="./cats/catn3.png" className="w-[175px] hover:animate-hop" alt="" />
        <p className="text-blush drop-shadow-lg self-center my-4">- - &#x25CF; - -</p>
        <div>
          <p className="text-justify italic  text-sm text-black max-w-[300px] border-1 border-b pb-4 border-dotted border-melon">Contact us, share your cat&apos;s needs, and our team will swiftly match you with a trusted sitter. Discuss details like routines and preferences, finalize the booking for a stress-free experience. Our goal is hassle-free and personalized cat sitting for your peace of mind.</p>
        </div>
        <p className="text-blush drop-shadow-lg self-center my-4">- - &#x25CF; - -</p>
      </div>
      <div className="flex flex-col items-center tracking-widest gap-4 w-full max-w-[375px] z-50">
        {contactPoints.map((item) => (
          <div className="flex items-center w-full bg-blush pl-4 py-2 drop-shadow-lg rounded-md hover:animate-growhover">
            <img
              src={`./${item[0]}.svg`}
              className="w-[50px] opacity-90 drop-shadow-md"
              alt={item[0]}
            />
            <p className="ml-auto lg:mr-4 text-[22px] lg:text-[22px] text-white font-bold">{item[1]}</p>
          </div>
        ))}
      </div>
    </div>

  );
}

export default ContactDetails;
