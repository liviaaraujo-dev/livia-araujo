import { useState } from "react";
import img from "../assets/projects/indecor.png";
import listaR from "../assets/projects/lista-tarefas-react.png";
import flix from "../assets/projects/flix.png";
import devfinance from "../assets/projects/devfinance.png";
import cssZen from "../assets/projects/css-zen-garden.png";

interface WebApp {
  image: string;
  title: string;
  github: string;
  view: string;
}

interface MobileApp {
  image: string;
  title: string;
  github: string;
  view: string;
}

var webApps : WebApp[]  = [
  {
    image: img,
    title: "WebSite IndeCor",
    github: "https://github.com/liviaaraujo-dev/InDecor",
    view: "https://liviaaraujo-dev.github.io/InDecor/",
  },
  {
    image: listaR,
    title: "Todo List React",
    github: "https://github.com/liviaaraujo-dev/todo-list",
    view: "https://todo-list-liviaaraujo.netlify.app/",
  },
  {
    image: flix,
    title: "Flix React Js",
    github: "https://github.com/liviaaraujo-dev/flix",
    view: "https://flix-liviaaraujo.netlify.app/",
  },
  {
    image: devfinance,
    title: "Dev Finance - Controle financeiro",
    github: "https://github.com/liviaaraujo-dev/InDecor",
    view: "https://liviaaraujo-dev.github.io/InDecor/",
  },
  {
    image: cssZen,
    title: "Css Zen Garden - Tema Stranger Things",
    github: "https://github.com/liviaaraujo-dev/css-zen-garden/",
    view: "https://liviaaraujo-dev.github.io/css-zen-garden/",
  },
];

var mobileApps : MobileApp[] = [
  {
    image: img,
    title: "WebSite IndeCor",
    github: "https://github.com/liviaaraujo-dev/InDecor",
    view: "https://liviaaraujo-dev.github.io/InDecor/",
  },
  {
    image: listaR,
    title: "Todo List React",
    github: "https://github.com/liviaaraujo-dev/todo-list",
    view: "https://todo-list-liviaaraujo.netlify.app/",
  },
];

export default function Projects() {
  const [webSelect, setWebSelect] = useState(true);
  const [mobileSelect, setMobileSelect] = useState(false);

  return (
    <section className="pl-8 pt-24 xl:pl-24 bg-white dark:bg-black text-[#4B5563] dark:text-[#D1D5DB] flex items-center flex-col">
      <h2 className="text-3xl text-center lg:text-5xl font-bold text-black dark:text-white lg:text-start mt-8">
        Projetos
      </h2>

      <div className="flex gap-6 mt-12 w-[100%]">
        <button 
          className={
            webSelect
              ? "bg-[#27033d] text-black dark:text-white pl-4 pr-4 pt-1 pb-1 rounded-xl text-lg"
              : "text-white"
          }
          onClick={() => {
            setWebSelect(true);
            setMobileSelect(false);
          }}
        >
          Web app
        </button>
        <button
          className={
            mobileSelect
              ? "bg-[#27033d] text-black dark:text-white pl-4 pr-4 pt-1 pb-1 rounded-xl text-lg"
              : "text-white"
          }
          onClick={() => {
            setWebSelect(false);
            setMobileSelect(true);
          }}
        >
          Mobile app
        </button>
      </div>

      {webSelect == true ? (
        <div className="flex flex-col gap-12 mt-6 xl:flex-row xl:flex-wrap">
          {webApps.map((project) => (
            <div className="w-[90%] sm:w-[20%] py-4 bg-[#27033d] flex flex-col rounded-xl px-4">
              <img
                src={project.image}
                alt=""
                className="w-[100%] h-[40%] xl:h-[90%]
                               "
              />
              <h4 className="text-xl font-bold mb-1 mt-2 text-black dark:text-white">{project.title}</h4>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores exercitationem optio iusto id nulla, eos ullam veniam
              </p>
              <div className="flex justify-start gap-6">
                <a
                  href={project.view}
                  target="_blank"
                  className="bg-[#BA00EF]  w-24 text-sm py-2 text-center flex items-center justify-center font-medium rounded cursor-pointer"
                >
                  Link
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="text-[#BA00EF] border-[#BA00EF] border-2 w-24 text-sm text-center flex items-center justify-center font-medium rounded cursor-pointer"
                >
                  Código
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-12 mt-6 xl:flex-row xl:flex-wrap">
          {mobileApps.map((project) => (
            <div className="w-[90%] sm:w-[20%] py-4 bg-[#27033d] flex flex-col rounded-xl px-4">
              <img
                src={project.image}
                alt=""
                className="w-[100%] h-[40%] xl:h-[90%]
                               "
              />
              <h4 className="text-xl font-bold mb-6 mt-2">{project.title}</h4>
              <div className="flex justify-start gap-6">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-[#BA00EF] border-[#BA00EF] border-2 w-24 text-sm text-center flex items-center justify-center font-medium rounded cursor-pointer"
                >
                  Código
                </a>
                <a
                  href={project.view}
                  target="_blank"
                  className="bg-[#BA00EF] w-24 text-sm py-2 text-center flex items-center justify-center font-medium rounded cursor-pointer"
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
