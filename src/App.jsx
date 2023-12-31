import "./App.css";
import Hero from "./Hero";
import Skills from "./Skills";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Certifications from "./Certifications";
import Educations from "./Educations";
import Achievements from "./Achievements";
import Contacts from "./Contacts";

function App() {
  return (
    <>
      <div className="w-screen">
        <Hero id="hero" />
        <Skills />
        <Experiences id="experience" />
        <Projects />
        <Certifications />
        <Educations />
        <Achievements />
        <Contacts />
      </div>
    </>
  );
}

export default App;
