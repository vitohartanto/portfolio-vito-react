import Navbar from "./Navbar";
import myImage from "./vito.png";
// import React from 'react';
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <div id="hero" className=" flex flex-col items-center w-screen">
      <div>
        <Navbar />

        <h1 className="fixed top-8 right-8 text-2xl xl:text-4xl z-[10] md:text-3xl xl:">
          <Fade
            cascade
            delay={1e3}
            direction={"right"}
            triggerOnce={true}
            damping={1e-1}
          >
            Portfolio.
          </Fade>
        </h1>
      </div>
      <div className="mt-16 xl:h-screen xl:mt-0 flex flex-col items-center justify-center xl:justify-between xl:flex-row-reverse">
        <div className="mb-4 xl:ml-12">
          <Fade
            cascade
            delay={1e1}
            direction={"down"}
            triggerOnce={true}
            damping={1e-1}
          >
            <img
              className="w-72 hover:border rounded-2xl hover:border-slate-800"
              src={myImage}
              alt="Vito Hartanto"
            />
          </Fade>
        </div>
        <div className="text-center p-2">
          <Fade
            cascade
            delay={1e3}
            direction={"down"}
            triggerOnce={true}
            damping={1e-1}
          >
            <h1 className="text-2xl font-semibold md:text-3xl xl:text-4xl">
              Hi there!
            </h1>

            <h1 className="text-2xl md:text-3xl xl:text-4xl bg-yellow-400 rounded-2xl m-2 p-2">
              My name is Vito Hartanto, you can call me{" "}
              <span className="font-semibold ">Vito</span>.
            </h1>
            <h1 className="text-2xl md:text-3xl xl:text-4xl">
              I&apos;m{" "}
              <span className="text-2xl md:text-3xl font-semibold xl:text-4xl">
                a front-end and back-end enthusiast.
              </span>
            </h1>
            <h1 className="text-2xl md:text-3xl xl:text-4xl">
              Currently, I am{" "}
              <span className="font-semibold">21 years old</span> and based in{" "}
              <span className="font-semibold">Indonesia</span>.
            </h1>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Hero;
