import logo from "../assets/logo.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <footer className="pb-10 bg-[#E5E7EB] dark:bg-[#030712] text-[#4B5563] dark:text-[#D1D5DB]">
      <div className="flex flex-col md:flex-row md:justify-between md:px-28 md:mt-32">
        <div className="flex items-start cursor-pointer flex-col my-12 ml-4 md:m-0 md:mt-6 lg:ml-0">
          <img src={logo} width={180} alt="" />
        </div>

        <div className="h-[1px] w-[85%] bg-[#4B5563] dark:bg-white text-center md:hidden ml-8 lg:ml-0"></div>

        <div className="flex gap-4 md:items-start mt-16 ml-8 md:mt-8 mb-16 lg:ml-0">
          <a href="">
            <GitHubIcon style={{ fontSize: 32 }} />
          </a>
          <a href="">
            <LinkedInIcon style={{ fontSize: 35 }} />
          </a>
          <a href="">
            <InstagramIcon style={{ fontSize: 35 }} />
          </a>
        </div>
      </div>

      <div className="md:text-center ml-8" >
        <p>
          <span className="text-[#BA00EF] text-lg">© Lívia Araujo 2023</span>
          <p>
            Todos os
          direitos reservados
          </p>
        </p>
      </div>
    </footer>
  );
}
