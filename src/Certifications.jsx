// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Certification1 from "./freeCodeCamp.jpg";
import Certification2 from "./Dicoding1.png";
import Certification3 from "./Dicoding2.png";
import Certification4 from "./Progate.png";
import "./certification.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Fade } from "react-awesome-reveal";

export default function Certifications() {
  return (
    <>
      <h1
        id="certifications"
        className="pt-20 text-center font-semibold text-2xl md:text-3xl xl:text-4xl mb-4 xl:mt-44"
      >
        <Fade
          cascade
          delay={1e2}
          direction={"up"}
          triggerOnce={true}
          damping={1e-2}
          fraction={0.5}
        >
          Certifications
        </Fade>
      </h1>
      <Fade
        cascade
        delay={1e2}
        direction={"up"}
        triggerOnce={true}
        damping={1e-2}
        fraction={0.5}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper custom2-swiper"
        >
          <SwiperSlide className="bg-[#F9FA9B] border border-slate-800 w-[300px] md:w-[500px] xl:w-[800px] xl:p-16 h-[300px] md:h-[500px]">
            <div>
              <img src={Certification1} alt="FCC JavaScript" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#F9FA9B] border border-slate-800 w-[300px] md:w-[500px] xl:w-[800px] xl:p-16 h-[300px] md:h-[500px]">
            <div>
              <div className="text-center p-2">
                <h1 className="text-xl font-semibold md:text-2xl xl:text-3xl">
                  JavaScript Algorithms and Data Structures
                </h1>
                <h2 className="text-base md:text-lg xl:text-xl">
                  freeCodeCamp
                </h2>
                <h2 className="text-base md:text-lg xl:text-xl">
                  Published in Nov 2023
                </h2>
                <p className="text-base md:text-lg xl:text-xl">
                  <span className="font-bold">Skills:</span> JavaScript, ES6,
                  Regular Expressions, Debugging, Basic Data Structures, Basic
                  Algorithm Scripting, Object-Oriented Programming (OOP),
                  Functional Programming, and Intermediate Algorithm Scripting.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#30E3CA] border border-slate-800 w-[300px] md:w-[500px] xl:w-[800px] xl:p-16 h-[300px] md:h-[500px]">
            <div>
              <img src={Certification2} alt="Dicoding1" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#30E3CA] border border-slate-800 w-[300px] md:w-[500px] xl:w-[800px] xl:p-16 h-[300px] md:h-[500px]">
            <div>
              <div className="text-center p-2">
                <h1 className="text-xl md:text-2xl font-semibold xl:text-3xl">
                  Learn to Create Front-End Web for Beginners
                </h1>
                <h2 className="text-base md:text-lg xl:text-xl">
                  Dicoding Indonesia
                </h2>
                <h2 className="text-base md:text-lg xl:text-xl">
                  Published in Oct 2023
                </h2>
                <p className="text-base md:text-lg xl:text-xl">
                  <span className="font-bold">Skills:</span> Browser Object
                  Model & Document Object Model, Interactive with Events, and
                  Data Storage with Web Storage.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#7dd87d] border border-slate-800 w-[300px] md:w-[500px] xl:w-[800px] xl:p-16 h-[300px] md:h-[500px]">
            <div>
              <img src={Certification3} alt="Dicoding 2" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#7dd87d] border border-slate-800 w-[300px] md:w-[500px] xl:w-[800px] xl:p-16 h-[300px] md:h-[500px]">
            <div>
              <div className="text-center p-2">
                <h1 className="text-xl md:text-2xl font-semibold xl:text-3xl">
                  Learn the Basics of Web Programming
                </h1>
                <h2 className="text-base md:text-lg xl:text-xl">
                  Dicoding Indonesia
                </h2>
                <h2 className="text-base md:text-lg xl:text-xl">
                  Published in Oct 2023
                </h2>
                <p className="text-base md:text-lg xl:text-xl">
                  <span className="font-bold">Skills:</span> HTML, CSS, and
                  Responsive Layout with Flexbox.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#d6d0b8] border border-slate-800 w-[300px] md:w-[500px] xl:w-[800px] xl:p-16 h-[300px] md:h-[500px]">
            <div>
              <img src={Certification4} alt="Progate" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#d6d0b8] border border-slate-800 w-[300px] md:w-[500px] xl:w-[800px] xl:p-16  h-[300px] md:h-[500px]">
            <div>
              <div className="text-center p-2">
                <h1 className="text-xl md:text-2xl font-semibold xl:text-3xl">
                  Basics HTML & CSS Course
                </h1>
                <h2 className="text-base md:text-lg xl:text-xl">Progate</h2>
                <h2 className="text-base md:text-lg xl:text-xl">
                  Published in Aug 2021
                </h2>
                <p className="text-base md:text-lg xl:text-xl">
                  <span className="font-bold">Skills:</span> HTML and CSS.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Fade>
    </>
  );
}
