import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import foto1 from '../assets/foto1.png';
import { Typewriter } from 'react-simple-typewriter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export function Home() {
    return (
        <section
            className="pt-40 flex flex-col-reverse items-center justify-center text-lg font-sans bg-white pb-36 dark:bg-black text-[#4B5563] dark:text-[#D1D5DB] lg:flex-row lg:justify-start lg:px-24"
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
                <p className='mt-3'>Sou um desenvolvedor full stack (React.js & Node.js) com foco em criar (e ocasionalmente projetar) experiências digitais excepcionais que sejam rápidas, acessíveis, visualmente atraentes e responsivas. Mesmo que eu tenha criado aplicações web por mais de 7 anos, eu ainda amo como se fosse algo novo.</p>
                <span className="flex gap-2 mt-8">
                    <FmdGoodOutlinedIcon />
                    <p>Brasil</p>
                </span>
                <div className='flex items-center gap-4 mt-2'>
                    <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>

                    Disponível para novos projetos
                </div>

                <div className="flex gap-4 mt-12">
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

            <div className='flex items-center justify-center lg:w-[40%] lg:mt-4 lg:ml-20'>
                <img src={foto1} alt="" className="h-[20rem] lg:h-[30rem]" />
            </div>
        </section>
    );
}
