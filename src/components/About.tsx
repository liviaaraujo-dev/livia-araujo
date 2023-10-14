import foto2 from "../assets/imgs/foto12.jpeg";


export function About() {
    return (
        <section className="flex flex-col justify-center items-center pb-36 bg-white dark:bg-black text-[#4B5563] dark:text-[#D1D5DB]">
            <h2 className="text-3xl text-center lg:text-5xl font-bold text-black dark:text-white lg:text-start mt-8">Sobre</h2>
            <div className="w-[80%] lg:flex lg:flex-row lg:items-start lg:justify-end lg:mt-8">

                <div className="flex justify-center mt-8 lg:w-[50%]">
                    <img src={foto2} alt=""  className=" h-[70%] lg:w-[70%]"/>
                </div>

                <div className="mt-4 flex flex-col text-lg gap-4 lg:w-[50%] lg:mt-8">
                    <h3 className="text-xl font-semibold">Curious about me? Here you have it:</h3>
                    <p>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
                    <p>I began my journey as a web developer in 2015, and since then, I've continued rney as a web developer in 2015, and since then, I've continued  to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
                    <p>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
                </div>

            </div>
        </section>
    );
}