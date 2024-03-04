import React from 'react';
import Testimonial from '../Testimonial/Testimonial';

function TestimonialPage() {
  const testimonials = {
    1: {
      stars: 4,
      para: 'Loki received exceptional care from FairyTails, making it the best decision. Highly recommend for worry-free cat sitting! Great Cat Great Services Love it yes',
      imgsrc: 'loki.jpeg',
    },
  };

  return (
    <div className="flex flex-col items-center mt-16 mb-8 gap-4 font-thasadith">
      <h1 className="text-4xl uppercase tracking-widest bg-white">Testimonials</h1>
      {Object.keys(testimonials).map((item) => (
        <Testimonial
          info={testimonials[item]}
        />
      ))}
      <div className="absolute flex justify-center bottom-0 -z-20 w-screen opacity-50 animate-fadein50">
        <img src="./dubai.png" alt="" />
      </div>
    </div>
  );
}

export default TestimonialPage;
