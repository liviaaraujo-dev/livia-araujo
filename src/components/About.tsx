import foto2 from "../assets/imgs/foto12.jpeg";


export function About() {
    return (
        <section id="about" className="flex flex-col justify-center items-center pb-36 bg-white dark:bg-black text-[#4B5563] dark:text-[#D1D5DB]">
            <h2 className="text-3xl text-center lg:text-5xl font-bold text-black dark:text-white lg:text-start mt-8">Sobre</h2>
            <div className="w-[80%] lg:flex lg:flex-row lg:items-start lg:justify-end lg:mt-8">

                <div className="flex justify-center mt-8 lg:w-[50%]">
                    <img src={foto2} alt=""  className=" h-[70%] lg:w-[70%]"/>
                </div>

                <div className="mt-4 flex flex-col text-lg gap-4 lg:w-[50%] lg:mt-8">
                    {/* <h3 className="text-xl font-semibold">Curious about me? Here you have it:</h3> */}
                    <p>Iniciei meus estudos na área de tecnologia no curso técnico de redes de computadores integrado com ensino médio,  senti uma forte identificação com a área, especialmente na parte de programação; descobri não apenas uma profissão, mas uma paixão. A programação tornou-se mais do que uma habilidade para mim, é uma forma de expressar criatividade, resolver problemas e criar sistemas inovadores.</p>
                    <p>Então começei me aprofundar na programacao por conta própria, e hoje sou desenvolvedora de software com 1 ano de experiência, já atuei como front-end e mobile.</p>               
                    <p> Mergulhei de cabeça em desafios que me impulsionaram a aprender e crescer constantemente. A busca por criar sistemas robustos e eficientes tornou-se uma meta constante, impulsionada pelo desejo de contribuir para a construção de soluções que realmente impactem positivamente as pessoas e organizações.</p>
                    <p>Uma última coisa, estou disponível para trabalho freelancer, então fique à vontade para entrar em contato e dizer olá!</p>
                </div>

            </div>
        </section>
    );
}