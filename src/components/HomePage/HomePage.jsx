import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="flex flex-col items-center mt-16">
      <div className="flex items-center gap-16">
        <img
          src="./scribble-v.png"
          alt=""
          className="hidden lg:block max-h-[20vh]"
        />
        <div className="relative">
          <img
            src="./livingroom.png"
            alt="Living Room Background"
            className="w-[350px] xs:w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px]"
          />
          <div>
            <img
              src="./cats/catn1.png"
              className="absolute
            w-[65px] xs:w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px] xl:w-[110px]
            top-[20px] sm:top-[40px] md:top-[50px] lg:top-[65px] xl:top-[80px]
            left-[170px] xs:left-[200px] sm:left-[250px] md:left-[305px] lg:left-[360px] xl:left-[410px] drop-shadow-xl hover:animate-hop"
              alt=""
            />
            <img
              src="./cats/catn2.png"
              className="absolute
            w-[65px] xs:w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px] xl:w-[110px]
            top-[115px] xs:top-[130px] sm:top-[165px] md:top-[215px] lg:top-[250px] xl:top-[290px]
            left-[250px] xs:left-[275px] sm:left-[350px] md:left-[425px] lg:left-[500px] xl:left-[575px] drop-shadow-xl hover:animate-hop"
              alt=""
            />
            <img
              src="./cats/catn3.png"
              className="absolute
            w-[100px] xs:w-[110px] sm:w-[125px] md:w-[150px] lg:w-[175px] xl:w-[190px]
            top-[75px] xs:top-[90px] sm:top-[115px] md:top-[140px] lg:top-[165px] xl:top-[190px]
            left-[75px] xs:left-[80px] sm:left-[110px] md:left-[130px] lg:left-[150px] xl:left-[180px] hover:animate-hop"
              alt=""
            />
            <img
              src="./cats/catn4.png"
              className="
            absolute
            w-[40px] xs:w-[45px] sm:w-[55px] md:w-[65px] lg:w-[72px] xl:w-[80px]
            top-[-10px] xl:top-[-5px]
            left-[30px] xs:left-[37px] sm:left-[45px] md:left-[55px] lg:left-[65px] xl:left-[75px] hover:animate-hop"
              alt=""
            />
          </div>
        </div>
        <img
          src="./scribble-v.png"
          alt=""
          className="hidden lg:block max-h-[20vh]"
        />
      </div>
      <img
        src="./scribble-h.png"
        className="lg:hidden w-[250px] opacity-70 mt-14"
        alt=""
      />
      {/* <img
        src="./contactus.png"
        className="hidden"
        alt="Contact Us Button"
      /> */}
    </div>
  );
}

export default HomePage;
