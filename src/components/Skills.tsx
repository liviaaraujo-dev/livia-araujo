import js from "../assets/icon-javscript.png";
import react from "../assets/icon-react.png";
import postgres from "../assets/icon-postgresql.png";
export function Skills() {
  return (
    <section className="flex flex-col items-center pb-48 bg-white dark:bg-black text-[#4B5563] dark:text-[#D1D5DB] ">
      <h2 className="text-3xl text-center lg:text-5xl font-bold text-black dark:text-white lg:text-start mt-8">
        Skills
      </h2>
      <p className="w-4/5 text-center lg:mt-4">
        As habilidades, ferramentas e tecnologias em que sou muito bom:
      </p>
      <div className="grid grid-cols-3 w-4/5 gap-4 mt-4 lg:grid-cols-6 lg:mt-12 lg:w-[65%] lg:gap-8">
        <div>
          <img src={js} alt="" />
          <p>Javascript</p>
        </div>
        <div>
          <img src={react} alt="" />
          <p>React Js</p>
        </div>
        <div>
          <img src={postgres} alt="" />
          <p>Postgressql</p>
        </div>
        <div>
          <img src={js} alt="" />
          <p>Javascript</p>
        </div>
        <div>
          <img src={react} alt="" />
          <p>React Js</p>
        </div>
        <div>
          <img src={postgres} alt="" />
          <p>Postgressql</p>
        </div>
        <div>
          <img src={js} alt="" />
          <p>Javascript</p>
        </div>
        <div>
          <img src={react} alt="" />
          <p>React Js</p>
        </div>
        <div>
          <img src={postgres} alt="" />
          <p>Postgressql</p>
              </div>
               <div>
          <img src={js} alt="" />
          <p>Javascript</p>
        </div>
        <div>
          <img src={react} alt="" />
          <p>React Js</p>
        </div>
        <div>
          <img src={postgres} alt="" />
          <p>Postgressql</p>
              </div>
               <div>
          <img src={js} alt="" />
          <p>Javascript</p>
        </div>
        <div>
          <img src={react} alt="" />
          <p>React Js</p>
        </div>
        <div>
          <img src={postgres} alt="" />
          <p>Postgressql</p>
              </div>
                      <div>
          <img src={postgres} alt="" />
          <p>Postgressql</p>
              </div>
               <div>
          <img src={js} alt="" />
          <p>Javascript</p>
        </div>
        <div>
          <img src={react} alt="" />
          <p>React Js</p>
        </div>
      </div>
    </section>
  );
}
