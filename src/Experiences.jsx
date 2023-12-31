// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./experience.css";
import { Fade } from "react-awesome-reveal";

// import required modules
import { EffectCube, Pagination } from "swiper";

export default function Experiences() {
  return (
    <>
      <div id="experiences" className="pt-20  xl:mt-40">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-center mb-4">
          <Fade
            cascade
            delay={1e2}
            direction={"up"}
            triggerOnce={true}
            damping={1e-2}
            fraction={0.5}
          >
            Experiences as Developer
          </Fade>
        </h1>
        <div className="relative z-[1]">
          <Fade
            cascade
            delay={1e2}
            direction={"up"}
            triggerOnce={true}
            damping={1e-2}
            fraction={0.6}
          >
            <Swiper
              effect={"cube"}
              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              pagination={true}
              modules={[EffectCube, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="bg-[#30E3CA] text-center flex flex-col justify-center h-[500px] p-4 xl:p-8 rounded-2xl">
                  <h1 className="font-semibold text-2xl md:text-3xl xl:text-4xl">
                    React & Back-End Developer
                  </h1>
                  <h2 className="text-base md:text-lg xl:text-xl">
                    Dicoding Indonesia . Study program
                  </h2>
                  <h2 className="text-base md:text-lg xl:text-xl">
                    Feb 2024 - Jun 2024 . 5 Months
                  </h2>
                  <p className="text-base text-justify md:text-lg xl:text-xl">
                    In these 16 modules, we start with the basics of programming
                    and logic, then learn about Git and GitHub. Move on to web
                    programming and JavaScript, and try our hands at creating
                    user interfaces. The journey continues with React for web
                    applications and even delves into back-end development.
                    Beyond technical skills, the program focuses on taking
                    initiative, being responsible, and staying eager to learn.
                    It includes self-reflection, soft skills, career prep, and a
                    final project to tie it all together. The goal is to prepare
                    us thoroughly for success in the world of software
                    development, encouraging active participation along the way.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-[#F9FA9B] text-center flex flex-col justify-center h-[500px] p-4 xl:p-8 rounded-2xl">
                  <h1 className="font-semibold text-2xl md:text-3xl xl:text-4xl">
                    Front-End Developer
                  </h1>
                  <h2 className="text-base md:text-lg xl:text-xl">
                    KKN PPM UGM Ibun 2023 . Community services
                  </h2>
                  <h2 className="text-base md:text-lg xl:text-xl">
                    Jun 2023 - Agu 2023 · 3 Months
                  </h2>
                  <p className="text-base text-justify md:text-lg xl:text-xl">
                    KKN (Kuliah Kerja Nyata), a widely adopted initiative in
                    various universities, especially in Indonesia. KKN involves
                    students actively participating in community service or
                    social projects, integrated into their academic curriculum.
                    The program aims to provide practical field experience while
                    contributing positively to local communities. In this role,
                    I am responsible for the development of
                    www.pesonakamojang.com. My tasks include creating Unified
                    Modeling Language (UML) diagrams, designing UI/UX in Figma,
                    hands-on coding, deploying the website, configuring DNS for
                    a custom domain, and implementing basic Search Engine
                    Optimization (SEO) practices.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-[#ff6473] text-center flex flex-col justify-center h-[500px] p-4 xl:p-8 rounded-2xl">
                  <h1 className="font-semibold text-2xl md:text-3xl xl:text-4xl">
                    Front-End Developer
                  </h1>
                  <h2 className="text-base md:text-lg xl:text-xl">
                    PT Cipta Mawi Lestari . Internship
                  </h2>
                  <h2 className="text-base md:text-lg xl:text-xl">
                    Des 2022 - Jan 2023 · 2 Months
                  </h2>
                  <p className="text-base md:text-lg text-justify xl:text-xl">
                    Contributed to the digitalization of Winstom champignon
                    mushroom products at PT Cipta Mawi Lestari Company. Took
                    charge of developing the website
                    www.jamurkancingwinstom.com, including creating Low-Fidelity
                    (Lofi) and UI/UX designs in Figma, hands-on coding,
                    deployment, custom domain DNS configuration, and
                    implementing basic Search Engine Optimization (SEO)
                    practices.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </Fade>
        </div>
      </div>
    </>
  );
}
