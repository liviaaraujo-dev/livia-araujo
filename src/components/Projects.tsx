import { useState } from "react";
import img from "../assets/imgs/projects/indecor.png";
import listaR from "../assets/imgs/projects/lista-tarefas-react.png";
import flix from "../assets/imgs/projects/flix.png";
import devfinance from "../assets/imgs/projects/devfinance.png";
import cssZen from "../assets/imgs/projects/css-zen-garden.png";
import trakor from "../assets/imgs/projects/trakor.png";
import qrcode from "../assets/imgs/projects/qrcode-generator.png";
import devtodo from "../assets/imgs/projects/todo-list-flutter.jpg"; 
import listacontatos from "../assets/imgs/projects/lista-contatos.jpg"; 
import imcflutter from "../assets/imgs/projects/imc-flutter.jpeg"; 

interface WebApp {
  image: string;
  title: string;
  github: string;
  view: string;
  description: string;
}

interface MobileApp {
  image: string;
  title: string;
  github: string;
  view: string;
  description: string;

}

const webApps : WebApp[]  = [
  {
    image: img,
    title: "WebSite IndeCor",
    github: "https://github.com/liviaaraujo-dev/InDecor",
    view: "https://liviaaraujo-dev.github.io/InDecor/", 
    description: "Uma landing page do evento InDecor, focado em design de interiores. Techs: html, css e javascript"
  },
  {
    image: listaR,
    title: "Todo List React",
    github: "https://github.com/liviaaraujo-dev/todo-list",
    view: "https://todo-list-liviaaraujo.netlify.app/",
    description: "Uma lista de tarefas. Techs: TypeScript, React JS, Styled Components, Firebase/Realtime Database"

  },
  {
    image: flix,
    title: "Flix React Js",
    github: "https://github.com/liviaaraujo-dev/flix",
    view: "https://flix-liviaaraujo.netlify.app/",
    description: "O flix é um projeto que exibir um filme aleatório, por meio dos dados fornecidos pela API do themoviedb.org."

  },
  {
    image: devfinance,
    title: "Dev Finance - Controle financeiro",
    github: "https://github.com/liviaaraujo-dev/dev.finence",
    view: "https://liviaaraujo-dev.github.io/dev.finence/",
    description: "Aplicação de controle financeiro, onde é possível cadastrar e excluir transações e ver o saldo de entrada e saída."

  },
  {
    image: cssZen,
    title: "Css Zen Garden - Tema Stranger Things",
    github: "https://github.com/liviaaraujo-dev/css-zen-garden/",
    view: "https://liviaaraujo-dev.github.io/css-zen-garden/",
    description: "Desafio com o propósito de apenas utlizar css para estilizar o html do CSS Zen Garden, escolhi temática a série Stranger Things."
  },
  {
    image: trakor,
    title: "Trakor",
    github: "https://github.com/liviaaraujo-dev/trakor/",
    view: "https://liviaaraujo-dev.github.io/trakor/",
    description: "Landing page Trakor desenvolvida com html, css e javascript"
  },
  {
    image: qrcode,
    title: "QR Code Generator",
    github: "https://github.com/liviaaraujo-dev/qrcode-generator/",
    view: "https://qrcode-generator-liviaaraujo.netlify.app/",
    description: "Aplicação para gerar QR Code a partir de um link."
  },
];

const mobileApps : MobileApp[] = [
  {
    image: devtodo,
    title: "DevTodo",
    github: "https://github.com/liviaaraujo-dev/devtodo",
    view: "https://github.com/liviaaraujo-dev/devtodo",
    description: "Aplicativo de Listas de Tarefas desenvolvido em flutter, foi desenvolvido usando: Dart, Flutter, Firebase."
  },
  {
    image: listacontatos,
    title: "Lista de contatos",
    github: "https://github.com/liviaaraujo-dev/lista_de_contatos",
    view: "https://youtu.be/mtDP4NL5WuE",
    description: "App lista de contatos desenvolvido com flutter. Os dados estão sendo salvos utilizando Back4App."

  },
  {
    image: imcflutter,
    title: "Calculadora IMC",
    github: "https://github.com/liviaaraujo-dev/calculadora_imc_flutter",
    view: "https://github.com/liviaaraujo-dev/calculadora_imc_flutter",
    description: "Calculadora Imc desenvolvida com o framework flutter, salvando os dados localmente utilizando o banco de dados Sqlite.    "

  },
];

export default function Projects() {
  const [webSelect, setWebSelect] = useState(true);
  const [mobileSelect, setMobileSelect] = useState(false);

  return (
    <section id="projects" className="pl-8 pb-28 xl:pl-24 font-sans bg-white dark:bg-black text-[#4B5563] dark:text-[#D1D5DB] flex items-center flex-col">
      <h2 className="text-3xl text-center lg:text-5xl font-bold text-black dark:text-white lg:text-start mt-8">
        Projetos
      </h2>

      <div className="flex gap-6 mt-12 w-[100%]">
        <button 
          className={
            webSelect
              ? "bg-[#F4CCFB] dark:bg-[#27033d] text-black dark:text-white pl-4 pr-4 pt-1 pb-1 rounded-xl text-lg"
              : "text-black dark:text-white"
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
              ? "bg-[#F4CCFB] dark:bg-[#27033d] text-white dark:text-white pl-4 pr-4 pt-1 pb-1 rounded-xl text-lg"
              : "text-white bg:text-white"
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
        <div className="flex flex-col gap-12 mt-6 md:flex-row md:flex-wrap justify-center lg:justify-start">
          {webApps.map((project) => (
            <div className="w-[90%] sm:w-[20%] py-4 bg-[#F4CCFB] dark:bg-[#27033d] flex flex-col rounded-xl px-4 md:w-[40%] lg:w-[20%]">
              <img
                src={project.image}
                alt=""
                className="w-[100%] h-[40%] xl:h-[90%]       "
              />
              <h4 className="text-base font-bold mb-1 mt-2 text-black dark:text-white">{project.title}</h4>
              <p className="mb-4">
                {project.description}
              </p>
              <div className="flex justify-start gap-6">
                <a
                  href={project.view}
                  target="_blank"
                  className="bg-[#BA00EF] text-white dark:text-black w-24 text-sm py-2 text-center flex items-center justify-center font-medium rounded cursor-pointer"
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
            <div className="w-[90%] sm:w-[20%] py-4 bg-[#F4CCFB] dark:bg-[#27033d] flex flex-col rounded-xl px-4">
            <img
              src={project.image}
              alt=""
              className="w-[100%] h-[40%] xl:h-[30rem]       "
            />
            <h4 className="text-base font-bold mb-1 mt-2 text-black dark:text-white">{project.title}</h4>
            <p className="mb-4">
              {project.description}
            </p>
            <div className="flex justify-start gap-6">
              <a
                href={project.view}
                target="_blank"
                className="bg-[#BA00EF] text-white dark:text-black w-24 text-sm py-2 text-center flex items-center justify-center font-medium rounded cursor-pointer"
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
      )}
    </section>
  );
}
