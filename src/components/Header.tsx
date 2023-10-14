import logo from "../assets/imgs/logo2.png";
import CloseIcon from "@mui/icons-material/Close";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export function Header() {
  const pdfFile = "/caminho-para-o-seu-arquivo.pdf";

  const [openMenu, setOpenMenu] = useState<Boolean>(false);

  return (
    <header
      className={
        openMenu
          ? "flex flex-col items-center text-base font-sans fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black w-[100%] bg-light-primary lg:flex-row lg:justify-between h-[100vh]"
          : "flex flex-col items-center text-base font-sans fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black w-[100%] lg:flex-row lg:justify-between lg:px-24"
      }
    >
      <>
        <div className="flex justify-between items-center mt-2 w-[90%] pb-4 lg:w-[20%]">
          <img src={logo} alt="" className="h-14 lg:mt-4" />
          <button
            className={
              openMenu ? "text-8xl flex mt-4 lg:hidden" : "hidden lg:hidden"
            }
          >
            <CloseIcon
              style={{ fontSize: 30}}
              onClick={() => setOpenMenu(false)}
              className="text-black dark:text-white"
            />{" "}
          </button>
          <button
            className={
              !openMenu ? "text-8xl flex  mt-4 lg:hidden" : "hidden lg:hidden"
            }
            onClick={() => setOpenMenu(true)}
          >
            <MenuIcon style={{ fontSize: 30 }}  className="text-black dark:text-white"/>
          </button>
        </div>

        <hr className="border-5-[#4B5563] w-[100%] lg:hidden" />

        <div
          className={
            openMenu
              ? "flex flex-col w-[100%] items-center lg:flex-ro lg:justify-center lg:items-center"
              : "lg:flex lg:flex-row items-center justify-center"
          }
        >
          <nav className={openMenu ? "w-4/5 sm:w-[88%] " : "hidden lg:flex"}>
            <ul className="flex flex-col gap-4 mt-12 items-start font-medium text-xl text-[#4B5563] dark:text-[#D1D5DB] lg:flex-row lg:gap-7 lg:mt-4">
              <li>
                <a href="">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="text-[#BA00EF]">
                  About
                </a>
              </li>
              <li>
                <a href="">Skils</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>

          <div
            className={
              openMenu
                ? "flex flex-col w-[100%] items-center lg:justify-between"
                : "hidden lg:flex lg:justify-between lg:ml-20 mt"
            }
          >
            <hr className="border-5-[#4B5563] w-[100%] mt-8 lg:hidden lg:mt-0" />
            <button className="flex mt-6 w-4/5 justify-between text-xl sm:w-[88%] lg:w-[20%] lg:mt-2">
              <p className="text-[#4B5563] dark:text-[#D1D5DB] lg:hidden">Switch Theme</p>
              <Brightness4Icon style={{ fontSize: 35 }}  className="text-black dark:text-white"/>
            </button>

            <a
              href={pdfFile}
              download="nome-do-arquivo.pdf"
              className="bg-[#BA00EF] rounded-md py-2 w-4/5 flex items-center justify-center dark:text-white mt-8 font-medium text-xl sm:w-[88%] lg:w-[10rem] lg:mt-1 lg:h-10 lg:ml-4"
            >
              Dowland CV
            </a>
          </div>
        </div>
      </>
    </header>
  );
}
