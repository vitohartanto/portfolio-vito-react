import { Fade } from "react-awesome-reveal";

const Achievements = () => {
  return (
    <div id="achievements">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-center pt-20 mb-4">
        <Fade
          cascade
          delay={1e2}
          direction={"down"}
          triggerOnce={true}
          damping={1e-2}
          fraction={0.5}
        >
          Achievements
        </Fade>
      </h1>
      <div className="border border-slate-800 bg-[#c7eeff] p-4 rounded-2xl mx-4 md:mx-12 mb-4 xl:py-8 xl:px-16 xl:mx-32">
        <Fade
          cascade
          delay={1e2}
          direction={"up"}
          triggerOnce={true}
          damping={1e-2}
          fraction={0.5}
        >
          <h1 className="font-semibold text-xl md:text-2xl xl:text-3xl text-center">
            2nd Winner and Favorite Winner Website Contest Internal NWDC (Night
            Login Web Development Community) x NUXC (Night Login User Experience
            Community) UGM 2022
          </h1>
          <h2 className="text-center md:text-lg xl:text-xl">
            Issued by Night Login UGM Community Nov 2022
          </h2>
          <div className="text-justify md:text-lg xl:text-xl xl:mt-4">
            <h2>
              Collaborate with the team of 3 members, me, Vito Hartanto & Farhan
              Franaka, serving as Front-End Developers, and Pramudya Kusuma
              Hardika as the UI/UX Designer. Earning a total cash prize of 2
              million Indonesian Rupiah.
            </h2>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Achievements;
