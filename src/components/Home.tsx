import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import foto1 from '../assets/imgs/foto1.png';
import { Typewriter } from 'react-simple-typewriter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export function Home() {
    return (
        <section
            className="pt-28 lg:pt-40 flex flex-col-reverse items-center justify-center text-lg font-sans bg-white pb-36 dark:bg-black text-[#4B5563] dark:text-[#D1D5DB] lg:flex-row lg:justify-start lg:px-24"
        >
            <div className='w-4/5 lg:w-2/4'>
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
                    <a href="https://github.com/liviaaraujo-dev">
                        <GitHubIcon style={{ fontSize: 32 }} />
                    </a>
                    <a href="">
                        <LinkedInIcon style={{ fontSize: 35 }} />

                    </a>
                    <a href="https://instagram.com/liviaaraujo._?igshid=OGQ5ZDc2ODk2ZA==">
                        <InstagramIcon style={{ fontSize: 35 }} />

                    </a>
                </div>
            </div>

            <div className='flex items-center justify-center lg:w-[40%]  lg:ml-20'>
                <img src={foto1} alt="" className="h-[26rem] lg:h-[36rem]" />
            </div>
        </section>
    );
}
