/* eslint-disable max-len */
import React from 'react';
import Testimonial from '../Testimonial/Testimonial';

function ContactPage() {
  const contactPoints = [
    ['whatsapp', '+971 - 501728594'],
    ['instagram', '@fairytails.catsitting'],
    ['mail', 'fairytails@gmail.com'],
  ];

  return (
    <div className="flex flex-col items-center font-sulphur mt-8 mb-24 min-[1090px]:mb-0 w-full min-[1090px]:w-[1035px]">
      <div className="flex flex-col min-[1090px]:flex-row justify-between items-center gap-8 min-[1090px]:gap-24 w-full border-b">
        <div className="flex flex-col items-center self-center max-w-[600px]">
          <img src="./cats/catn3.png" className="w-[175px] hover:animate-hop" alt="" />
          <p className="text-melon drop-shadow-lg self-center my-4">- - &#x25CF; - -</p>
          <div>
            <p className="text-justify italic font-bold text-lg text-basic max-w-[600px] border-1 border-b pb-4 border-dotted border-melon">Contact us, share your cat&apos;s needs, and our team will swiftly match you with a trusted sitter. Discuss details like routines and preferences, finalize the booking for a stress-free experience. Our goal is hassle-free and personalized cat sitting for your peace of mind.</p>
          </div>
          <p className="text-melon drop-shadow-lg self-center my-4">- - &#x25CF; - -</p>
        </div>
        <div className="flex flex-col items-center tracking-widest gap-4 w-full max-w-[600px] min-[1090px]:max-w-[375px] ">
          {/* <h1 className="text-[28px] tracking-widest">SOCIAL MEDIA</h1> */}
          {contactPoints.map((item) => (
            <div className={`flex items-center w-full lg:w-full ${'bg-melon'} border border-white border-solid  px-4 py-2 rounded-lg drop-shadow-lg`}>
              <img
                src={`./${item[0]}.svg`}
                className="w-[50px] opacity-90 drop-shadow-md"
                alt={item[0]}
              />
              <p className="ml-auto lg:mr-4 tracking-widest lg:tracking-widest text-[22px] lg:text-[22px] text-white font-bold">{item[1]}</p>
            </div>
          ))}
        </div>
      </div>
      <Testimonial />
    </div>
  );
}

export default ContactPage;
