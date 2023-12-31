import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Fade } from "react-awesome-reveal";

const Contacts = () => {
  return (
    <div>
      <h1 className="mt-20 text-center font-semibold text-2xl md:text-3xl xl:text-4xl">
        <Fade
          cascade
          delay={1e2}
          direction={"up"}
          triggerOnce={true}
          damping={1e-2}
          fraction={0.5}
        >
          Feel free to connect
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
        <div className="flex justify-center items-center pb-4">
          <a
            href="https://github.com/vitohartanto"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="m-4" icon={faGithub} size="3x" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/vito-hartanto/"
          >
            <FontAwesomeIcon className="m-4" icon={faLinkedin} size="3x" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/hartantovito/"
          >
            <FontAwesomeIcon className="m-4" icon={faInstagram} size="3x" />
          </a>
        </div>
      </Fade>
    </div>
  );
};

export default Contacts;
