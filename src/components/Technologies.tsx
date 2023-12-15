import js from "../assets/imgs/skills/icon-javscript.png";
import react from "../assets/imgs/skills/icon-react.png";
import node from "../assets/imgs/skills/nodejs.png";
import tailwind from "../assets/imgs/skills/tailwind.png";
import git from "../assets/imgs/skills/git.png";
import ts from "../assets/imgs/skills/typescript.png";
import html from "../assets/imgs/skills/html5.png";
import css from "../assets/imgs/skills/css.png";
import dart from "../assets/imgs/skills/dart.png";
import flutter from "../assets/imgs/skills/flutter.png";
import reactnative from "../assets/imgs/skills/react=native.png";
import figma from "../assets/imgs/skills/figma.png";
import express from "../assets/imgs/skills/express.png";
import firebase from "../assets/imgs/skills/firebase.png";
import azure from "../assets/imgs/skills/azure.png";
import googleCloud from "../assets/imgs/skills/google-cloud.png";
import linux from "../assets/imgs/skills/linux.png";
import php from "../assets/imgs/skills/php.png";

export function Technologies() {
  var technologies = [
    {
      name: "Flutter",
      image: flutter,
    },
    {
      name: "Dart",
      image: dart,
    },
    {
      name: "JavaScript",
      image: js,
    },
    {
      name: "Typescript",
      image: ts,
    },
    {
      name: "HTML",
      image: html,
    },
    {
      name: "CSS",
      image: css,
    },
    {
      name: "React Js",
      image: react,
    },
    {
      name: "Tailwind CSS",
      image: tailwind,
    },
    {
      name: "Git",
      image: git,
    },
    {
      name: "Node Js",
      image: node,
    },
    {
      name: "Express Js",
      image: express,
    },
    {
      name: "Firebase",
      image: firebase,
    },

    {
      name: "Figma",
      image: figma,
    },
    {
      name: "React Native",
      image: reactnative,
    },
    {
      name: "Azure",
      image: azure,
    },
    {
      name: "Google Cloud",
      image: googleCloud,
    },
    {
      name: "Linux",
      image: linux,
    },
    {
      name: "PHP",
      image: php,
    },
  ];

  return (
    <section id="technologies" className="flex flex-col items-center pb-36 bg-white dark:bg-black text-[#4B5563] dark:text-[#D1D5DB] ">
      <h2 className="text-3xl text-center lg:text-5xl font-bold text-black dark:text-white lg:text-start mt-8">
        Tecnologias
      </h2>
      <div className="grid grid-cols-3 w-4/5 gap-6 mt-4 lg:-w[90%] lg:grid-cols-6 lg:mt-16 xl:w-[65%] lg:gap-8">
        {technologies.map((technology) => {
          return (
            <div className="flex flex-col items-center justify-center gap-4">
              <img src={technology.image} alt={technology.name}/>
              <p className="text-center">{technology.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
