import logo from '../assets/logo.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer(){
    return(
  <footer className="h-[25rem] md:h-[15rem] bg-[#141414] mt-10 md:pl-0">
    <div className="flex flex-col md:flex-row md:justify-between md:px-28 md:mt-32">
      <div className="flex items-start cursor-pointer flex-col my-12 ml-2 md:m-0 md:mt-6 lg:ml-0">
        {/* <h2 className="text-3xl font-medium text-white">Lívia</h2>
        <h3 className="text-base font-normal text-white">Frontend | Mobile</h3> */}
        <img src={logo} width={150} alt="" />
      </div>

      <div className="h-[1px] w-[90%] bg-white text-center md:hidden ml-8 lg:ml-0"></div>

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

    <div className="md:text-center md:mt-14 ml-8 lg:ml-0">
        <p className="text-white"><span className="text-[#AC14F4]">© Lívia Araujo 2023.</span> Todos os direitos reservados</p>
    </div>
  </footer>




    );
}