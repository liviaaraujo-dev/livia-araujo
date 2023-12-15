import foto2 from "../assets/imgs/foto3.png";

export function About() {
    return (
        <section id="about" className="flex flex-col justify-center items-center pb-36 bg-white dark:bg-black text-[#4B5563] dark:text-[#D1D5DB]">
            <h2 className="text-3xl text-center lg:text-5xl font-bold text-black dark:text-white lg:text-start mt-8">Sobre</h2>
            <div className="w-[80%] lg:flex lg:flex-row lg:items-start lg:justify-end lg:mt-8">

                <div className="flex justify-center mt-8 lg:w-[50%]">
                    <img src={foto2} alt=""  className=" h-60% lg:w-[45%]"/>
                </div>

                <div className="mt-4 flex flex-col text-lg gap-4 lg:w-[50%] lg:mt-8">
                    <p>Iniciei meus estudos na programação por conta própria, descobri não apenas uma profissão, mas uma paixão.</p>
                    <p>Trabalho há 1 ano na área, já atuei com desenvolvimento front-end e de aplicativos móveis; e também com cloud computing.</p>
                    <p>Possuo uma forte base em linguagens de programação como JavaScript, TypeScript e Dart, além de experiência em frameworks modernos como Flutter e React.</p>
                    <p>Além das habilidades técnicas, me comunico bem, sou colaborador comprometido, trabalho bem em equipe, adoro novos desafios e estou sempre procurando aprender algo novo.</p>
                    <p>Uma última coisa, estou disponível também para trabalho freelancer, então fique à vontade para entrar em contato e dizer olá!</p>
                </div>

            </div>
        </section>
    );
}