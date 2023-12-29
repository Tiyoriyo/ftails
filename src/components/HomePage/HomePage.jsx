import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="flex justify-center mt-auto sm:mt-32 mb-8 ">
      <img
        src="./livingroom.png"
        className="w-[400px] sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[1250px]"
        alt="Living Room Background"
      />
    </div>
  );
}

export default HomePage;
