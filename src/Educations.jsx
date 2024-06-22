import { Fade } from "react-awesome-reveal";

const Educations = () => {
  return (
    <div id="educations">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-center pt-20 mb-4">
        <Fade
          cascade
          delay={1e2}
          direction={"up"}
          triggerOnce={true}
          damping={1e-2}
          fraction={0.5}
        >
          Educations
        </Fade>
      </h1>

      <div className="border border-slate-800 bg-[#b1e9a3] p-4 rounded-2xl mx-4 md:mx-12 xl:mx-32 xl:px-16 xl:py-8 mb-4">
        <Fade
          cascade
          delay={1e2}
          direction={"down"}
          triggerOnce={true}
          damping={1e-2}
          fraction={0.5}
        >
          <h1 className="font-semibold text-xl md:text-2xl xl:text-3xl text-center">
            Universitas Gadjah Mada
            <br />
            (2020 - Present)
          </h1>
          <h2 className="text-center md:text-lg xl:text-xl">
            Bachelor of Electrical Engineering – GPA 3.47
            <br />
            (145 Credit Hours/ 149 Credit Hours)
          </h2>
          <div className="text-justify md:text-lg xl:text-xl xl:mt-4">
            <h2>
              • Lecturer Assistant of Ir. Oyas Wahyunggoro, MT., Ph.D. (Feb 2023
              - Present)
            </h2>
            <h2>
              • Entrepreneurship in Marketplace, Vertex Cooling Pad (Jan 2022 -
              Present)
            </h2>
            <h2>
              • Joining NWDC (Night Login Web Development Community) (Jan 2022 -
              Present)
            </h2>
            <h2>
              • Instrumentation & Control and Digital Systems Laboratory
              Assistant (Feb 2023 - Jun 2023)
            </h2>
            <h2>
              • Tutorial Assistant of Differential Equations (Aug 2021 - Des
              2021)
            </h2>
          </div>
        </Fade>
      </div>

      <div className="border border-slate-800 bg-[#b1e9a3] p-4 rounded-2xl mx-4 md:mx-12 xl:mx-32 xl:px-16 xl:py-8">
        <Fade
          cascade
          delay={1e2}
          direction={"down"}
          triggerOnce={true}
          damping={1e-2}
          fraction={0.5}
        >
          <h1 className="font-semibold text-xl md:text-2xl xl:text-3xl text-center">
            SMA Santa Maria Pekanbaru
            <br />
            (2017 - 2020)
          </h1>
          <h2 className="text-center md:text-lg xl:text-xl">
            Natural Sciences Program (Average 95)
          </h2>
          <div className="text-justify md:text-lg xl:text-xl xl:mt-4">
            <h2>
              • Graduate with a parallel ranking of 16<sup>th</sup> for all
              Natural Science Departments.
            </h2>
            <h2>
              • 2<sup>nd</sup> Place Winner in the Smart Quiz Competition at
              SMAYAVA 2019.
            </h2>
            <h2>
              • Ranked 7<sup>th</sup> in the Ki Hajar Dewantara Quiz at the
              Provincial Level in 2019.
            </h2>
            <h2>
              • 1<sup>st</sup> Place Winner in the Smart Quiz Competition at
              SMAYAVA (Santa Maria Youth Activity and Festival) 2018
            </h2>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Educations;
