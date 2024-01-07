import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="flex flex-col items-center w-[100%]">
      <div className="flex lg:flex-row justify-center items-center mt-16 1080:mt-32">
        <img
          src="./public/scribble-v.png"
          alt=""
          className="hidden lg:block max-h-[20vh]"
        />
        <img
          src="./livingroom.png"
          alt="Living Room Background"
          className="w-[350px] xs:w-[450px] sm:w-[500px] md:w-[550px] lg:w-[600px] xl:w-[650px] xxl:w-[1000px]"
        />
        <img
          src="./public/scribble-v.png"
          alt=""
          className="hidden lg:block max-h-[20vh]"
        />
      </div>
      <img
        src="./public/scribble-h.png"
        alt=""
        className="w-2/5 mt-16 lg:hidden"
      />
      <img
        src="./public/contactus.png"
        className="hidden"
        alt="Contact Us Button"
      />
    </div>
  );
}

export default HomePage;
