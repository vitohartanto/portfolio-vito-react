// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Project1 from "./ProjectBookshelf.png";
import Project2 from "./ProjectVCP.png";
import Project3 from "./ProjectPesonaKamojang.png";
import Project4 from "./ProjectJamurKancingWinstom.png";
import Project5 from "./ProjectNL.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./project.css";

// import required modules
import { EffectCards } from "swiper";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  return (
    <>
      <h1
        id="projects"
        className="text-center font-semibold text-2xl md:text-3xl xl:text-4xl pt-20 mb-4 xl:mt-32"
      >
        <Fade
          cascade
          delay={1e2}
          direction={"up"}
          triggerOnce={true}
          damping={1e-2}
          fraction={0.5}
        >
          Projects
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
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper custom-swiper"
        >
          <SwiperSlide className="bg-[#639cd9] p-2 xl:p-8 border border-slate-800">
            <div>
              <img
                className="rounded-2xl border border-slate-800"
                src={Project1}
                alt="Bookshelf Web App"
              />
              <div className="text-center p-2">
                <h1 className="text-xl md:text-2xl xl:text-3xl font-semibold">
                  Bookshelf Web App
                </h1>
                <h2 className="text-base md:text-lg xl:text-xl">Nov 2023</h2>
                <a
                  className="text-base md:text-lg xl:text-xl"
                  target="_blank"
                  rel="noreferrer"
                  href="https://bookshelf-app-pied.vercel.app/"
                >
                  https://bookshelf-app-pied.vercel.app/
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#639cd9] p-4 xl:p-8 border border-slate-800">
            <p className="text-justify text-base md:text-lg xl:text-xl">
              The website is suitable for book enthusiasts. Its purpose is to
              enable users to track books they haven&apos;t read or have already
              read.
            </p>
          </SwiperSlide>
          <SwiperSlide className="bg-[#639cd9] p-4 xl:p-8 border border-slate-800">
            <p className="text-justify text-base md:text-lg xl:text-xl">
              It features local storage capable of holding up to 10 MB of data,
              ensuring information is stored on individual devices and
              won&apos;t be lost when the web app or device is turned off. Data
              can be deleted by pressing the delete button. There is a search
              feature based on book titles to facilitate searching.
            </p>
          </SwiperSlide>
          <SwiperSlide className="bg-[#ff6473] p-2 xl:p-8 border border-slate-800">
            {" "}
            <div>
              <img
                className="rounded-2xl border border-slate-800"
                src={Project2}
                alt="Vertex Cooling Pad"
              />
              <div className="text-center p-2">
                <h1 className="text-xl md:text-2xl xl:text-3xl font-semibold">
                  Vertex Cooling Pad Landing Page
                </h1>
                <h2 className="text-base md:text-lg xl:text-xl">Nov 2023</h2>
                <a
                  className="text-base md:text-lg xl:text-xl"
                  target="_blank"
                  rel="noreferrer"
                  href="https://vertex-cooling-pad.vercel.app/"
                >
                  https://vertex-cooling-pad.vercel.app/
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#ff6473] p-4 xl:p-8 border border-slate-800">
            <p className="text-justify text-base md:text-lg xl:text-xl">
              This website serves as the landing page for the Vertex Cooling Pad
              product, which is a little business owned by me. I am the owner of
              Vertex Cooling Pad.
            </p>
          </SwiperSlide>
          <SwiperSlide className="bg-[#ff6473] p-4 xl:p-8 border border-slate-800">
            <p className="text-justify text-base md:text-lg xl:text-xl">
              Vertex Cooling Pad is a brand specializing in the sale of Cooling
              Pads designed for Set Top Boxes, Wi-Fi devices, Routers, and
              Laptops. I am responsible for product research, product design,
              production, and the management of our presence on online
              marketplaces such as Shopee and Tokopedia.
            </p>
          </SwiperSlide>
          <SwiperSlide className="bg-[#7dd87d] border border-slate-800">
            {" "}
            <div className="w-[180px] md:w-[250px] lg:w-[300px] p-2 xl:w-[500px] xl:p-8">
              <img
                className="rounded-2xl border border-slate-800"
                src={Project3}
                alt=""
              />
              <div className="text-center p-2">
                <h1 className="text-xl font-semibold md:text-2xl xl:text-3xl">
                  Pesona Kamojang
                </h1>
                <h2 className="text-base md:text-lg xl:text-xl">
                  Jun 2023 - Aug 2023
                </h2>
                <a
                  className="text-base md:text-lg xl:text-xl"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.pesonakamojang.com/"
                >
                  pesonakamojang.com
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#7dd87d] p-4 xl:p-8 border border-slate-800">
            <p className="text-justify text-base md:text-lg xl:text-xl">
              This website is designed to promote the Kamojang Crater Nature
              Park (Taman Wisata Alam Kawah Kamojang) located in the village of
              Laksana, Ibun District, Bandung Regency, Indonesia.
            </p>
          </SwiperSlide>
          <SwiperSlide className="bg-[#7dd87d] p-4 xl:p-8 border border-slate-800">
            <p className="text-justify text-base md:text-lg xl:text-xl">
              The creation of this website is an outcome of the work carried out
              under the leadership of Vito Hartanto as part of the Real Work
              Lecture Program (Kuliah Kerja Nyata or KKN) organized by PPM UGM
              Ibun in 2023.
            </p>
          </SwiperSlide>
          <SwiperSlide className="bg-[#4c9173] p-2 border border-slate-800">
            {" "}
            <div className="w-[180px] md:w-[250px] lg:w-[300px] p-2 xl:w-[500px] xl:p-8">
              <img
                className="rounded-2xl border border-slate-800"
                src={Project4}
                alt=""
              />
              <div className="text-center p-2 ">
                <h1 className="text-xl font-semibold md:text-2xl xl:text-3xl">
                  Jamur Kancing Winstom Landing Page
                </h1>
                <h2 className="text-base md:text-lg xl:text-xl">
                  Des 2022 - Jan 2023
                </h2>
                <a
                  className="text-sm md:text-base xl:text-xl"
                  target="_blank"
                  rel="noreferrer"
                  href="https://jamurkancingwinstom.com/"
                >
                  jamurkancingwinstom.com
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#4c9173] p-4 xl:p-8 border border-slate-800">
            <p className="text-justify text-base md:text-lg xl:text-xl">
              This website aims to digitize the product offerings of Winstom
              Champignon Mushroom, a winning product of PT Cipta Mawi Lestari,
              making them accessible through the company&apos;s official
              website.
            </p>
          </SwiperSlide>
          <SwiperSlide className="bg-[#4c9173] p-4 xl:p-8 border border-slate-800">
            <p className="text-justify text-base md:text-lg xl:text-xl">
              PT Cipta Mawi Lestari, has been in operation for the past 28 years
              since its establishment in 1995, has been a prominent distributor
              of button mushrooms serving the regions of Yogyakarta, Semarang,
              Jakarta, and Makassar.
            </p>
          </SwiperSlide>
          <SwiperSlide className="bg-[#f96d6d] p-2 xl:p-8 border border-slate-800">
            {" "}
            <div>
              <img
                className="rounded-2xl border border-slate-800"
                src={Project5}
                alt=""
              />
              <div className="text-center p-2">
                <h1 className="text-xl font-semibold md:text-2xl">
                  Night Login Community Website Contest
                </h1>
                <h2 className="text-base md:text-lg">Sep 2022 - Nov 2022</h2>
                <a
                  className="text-base md:text-lg"
                  target="_blank"
                  rel="noreferrer"
                  href="https://test-deploy-nl.netlify.app/"
                >
                  https://test-deploy-nl.netlify.app/
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#f96d6d] p-4 xl:p-8 border border-slate-800">
            {" "}
            <p className="text-justify text-base md:text-lg xl:text-xl">
              We made this website for a contest hosted by NWDC (Night Login Web
              Development Community) and NUXC (Night Login User Experience
              Community) UGM 2022.
            </p>
          </SwiperSlide>
          <SwiperSlide className="bg-[#f96d6d] p-4 xl:p-8 border border-slate-800">
            {" "}
            <p className="text-justify text-base md:text-lg xl:text-xl">
              Vito Hartanto and Farhan Franaka as Front-end Developers, and
              Pramudya Kusuma Hardika as the UI/UX Designer, won 2nd place and
              the Favorite Award. We received a cash prize of 2 million
              Indonesian Rupiah.
            </p>
          </SwiperSlide>
        </Swiper>
      </Fade>
    </>
  );
};

export default Projects;
