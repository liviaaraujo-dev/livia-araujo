import logo from "../assets/imgs/logo2.png";
import pdfFile from "../assets/Curriculo.pdf";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export function Header() {

  const [isMenu, setIsMenu] = useState<Boolean>(false);

  function closeMenu(){
    setIsMenu(false);
  }

  function openMenu(){
    setIsMenu(true);
  }

  return (
    <header
      className={
        isMenu
          ? "flex flex-col items-center text-base font-sans fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black w-[100%] bg-light-primary lg:flex-row lg:justify-between h-[100vh]"
          : "flex flex-col items-center text-base font-sans fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black w-[100%] lg:flex-row lg:justify-between lg:px-10 xl:px-20"
      }
    >
      <>
        <div className="flex justify-between items-center mt-2 w-[90%] pb-4 lg:w-[20%]">
          <img src={logo} alt="" className="h-14 lg:mt-4" />
          <button
            className={
              isMenu ? "text-8xl flex mt-4 lg:hidden" : "hidden lg:hidden"
            }
          >
            <CloseIcon
              style={{ fontSize: 30}}
              onClick={closeMenu}
              className="text-black dark:text-white"
            />{" "}
          </button>
          <button
            className={
              !isMenu ? "text-8xl flex  mt-4 lg:hidden" : "hidden lg:hidden"
            }
            onClick={openMenu}
          >
            <MenuIcon style={{ fontSize: 30 }}  className="text-black dark:text-white"/>
          </button>
        </div>

        <hr className="border-5-[#4B5563] w-[100%] lg:hidden" />

        <div
          className={
            isMenu
              ? "flex flex-col w-[100%] items-center lg:flex-row lg:justify-center lg:items-center"
              : "lg:flex lg:flex-row items-center justify-center"
          }
        >
          <nav className={isMenu ? "w-4/5 sm:w-[88%] " : "hidden lg:flex"}>
            <ul className="flex flex-col gap-4 mt-12 items-start font-medium text-xl text-[#4B5563] dark:text-[#D1D5DB] lg:flex-row lg:gap-7 lg:mt-4">
              <li>
                <a href="#home" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={closeMenu}>
                  Sobre
                </a>
              </li>
              <li>
                <a href="#technologies" onClick={closeMenu}>Tecnologias</a>
              </li>
              <li>
                <a href="#projects" onClick={closeMenu}>Projetos</a>
              </li>
            </ul>
          </nav>

          <div
            className={
              isMenu
                ? "flex flex-col w-[100%] items-center lg:justify-between"
                : "hidden lg:flex lg:justify-between lg:ml-6 mt"
            }
          >
            <hr className="border-5-[#4B5563] w-[100%] mt-8 lg:hidden lg:mt-0" />

            <a
              href={pdfFile}
              download="Currículo Lívia Araujo.pdf"
              className="bg-[#BA00EF] rounded-md py-2 w-4/5 flex items-center justify-center dark:text-white mt-8 font-medium text-lg sm:w-[88%] lg:w-[14rem] lg:mt-1 lg:h-10 lg:ml-4"
            >
              Dowland Currículo
            </a>
          </div>
        </div>
      </>
    </header>
  );
}
