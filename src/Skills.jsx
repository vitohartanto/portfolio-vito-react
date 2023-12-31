import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faFigma,
  faGithub,
  faGit,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { SiTailwindcss } from "react-icons/si";
import { Fade } from "react-awesome-reveal";

const Skills = () => {
  return (
    <div id="skills" className="pt-20 xl:mb-32 flex flex-col justify-center">
      <h1 className="text-2xl md:text-3xl xl:mb-4 xl:text-4xl font-semibold text-center">
        <Fade
          cascade
          delay={1e2}
          direction={"up"}
          triggerOnce={true}
          damping={1e-2}
          fraction={0.5}
        >
          Skills and Tech Stacks
        </Fade>
      </h1>
      <Fade
        cascade
        delay={1e2}
        direction={"up"}
        triggerOnce={true}
        damping={1e-1}
        fraction={0.5}
      >
        <div className="xl:flex xl:justify-center ">
          <div className="mt-4 mb-2 flex justify-evenly  text-center">
            <div className="xl:mx-12 ">
              <FontAwesomeIcon
                icon={faHtml5}
                size="8x"
                className="hover:text-[#e54c21]"
              />
              <h2 className="text-xl md:text-2xl xl:text-3xl">HTML</h2>
            </div>
            <div className="xl:mx-12 ">
              <FontAwesomeIcon
                icon={faCss3Alt}
                size="8x"
                className="hover:text-[#214ce5]"
              />
              <h2 className="text-xl md:text-2xl xl:text-3xl">CSS</h2>
            </div>
          </div>
          <div className="my-2 flex justify-evenly text-center">
            <div className="xl:mx-12 ">
              <FontAwesomeIcon
                icon={faBootstrap}
                size="8x"
                className="hover:text-[#7309f5]"
              />
              <h2 className="text-xl md:text-2xl xl:text-3xl">Bootstrap</h2>
            </div>
            <div className="xl:mx-12 ">
              <SiTailwindcss size={128} className="hover:text-[#38bdf8]" />
              <h2 className="text-xl md:text-2xl xl:text-3xl">Tailwind CSS</h2>
            </div>
          </div>
        </div>
        <div className="xl:flex xl:justify-center ">
          <div className="my-2 flex justify-evenly  xl:justify-starttext-center">
            <div className="xl:mx-12 ">
              <FontAwesomeIcon
                icon={faFigma}
                size="8x"
                className="hover:text-[#a45cfb]"
              />
              <h2 className="text-xl md:text-2xl xl:text-3xl">Figma</h2>
            </div>
            <div className="xl:mx-12 ">
              <FontAwesomeIcon
                icon={faGithub}
                size="8x"
                className="hover:text-slate-600"
              />
              <h2 className="text-xl md:text-2xl xl:text-3xl">Github</h2>
            </div>
          </div>
          <div className="my-2 flex justify-evenly text-center">
            <div className="xl:mx-12 ">
              <FontAwesomeIcon
                icon={faGit}
                size="8x"
                className="hover:text-[#f05033]"
              />
              <h2 className="text-xl md:text-2xl xl:text-3xl">Git</h2>
            </div>
            <div className="xl:mx-12 ">
              <FontAwesomeIcon
                icon={faReact}
                size="8x"
                className="hover:text-[#61dafb]"
              />
              <h2 className="text-xl md:text-2xl xl:text-3xl">ReactJS</h2>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Skills;
