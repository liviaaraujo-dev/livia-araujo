import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import foto1 from '../assets/imgs/foto1.png';
import { Typewriter } from 'react-simple-typewriter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export function Home() {
    return (
        <section
            id="home" className="pt-28 md:px-10 lg:pt-40 flex flex-col-reverse items-center justify-center text-lg md:justify-start lg:items-start font-sans bg-white pb-36 dark:bg-black text-[#4B5563] dark:text-[#D1D5DB] lg:flex-row lg:justify-start lg:px-14 xl:px-24">
            <div className='w-4/5 lg:w-2/4 lg:mt-12'>
                <h2 className="text-4xl lg:text-6xl font-bold lg:text-start mt-8">
                    Olá, sou
                    <span className="text-[#BA00EF] typewriter">
                        <Typewriter words={[' Lívia 👋']} loop={5}
                            cursor
                            cursorStyle=''
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000} />
                    </span>
                </h2>
                <p className='mt-3'>Sou desenvolvedora de software com experiência em desenvolvimento web e mobile, com foco em criar experiências digitais excepcionais que sejam rápidas, acessíveis, visualmente atraentes e responsivas. </p>
                <span className="flex gap-2 mt-8">
                    <FmdGoodOutlinedIcon />
                    <p>Brasil</p>
                </span>
                <div className='flex items-center gap-4 mt-2'>
                    <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>

                    Disponível para novos projetos
                </div>

                <div className="flex gap-4 mt-12">
                    <a href="https://github.com/liviaaraujo-dev" target="_blank">
                        <GitHubIcon style={{ fontSize: 32 }} />
                    </a>
                    <a href="https://www.linkedin.com/in/liviaaraujodev" target="_blank">
                        <LinkedInIcon style={{ fontSize: 35 }} />
                    </a>
                    <a href="https://instagram.com/liviaaraujo._" target="_blank">
                        <InstagramIcon style={{ fontSize: 35 }} />
                    </a>
                    <a href="https://wa.me/558892858695" target="_blank">
                        <WhatsAppIcon style={{ fontSize: 35 }} />
                    </a>
                </div> 
            </div>

            <div className='flex items-center justify-center lg:w-[40%]  lg:ml-20'>
                <img src={foto1} alt="Foto Lívia Araujo" className="h-[26rem] lg:h-[36rem]" />
            </div>
        </section>
    );
}
