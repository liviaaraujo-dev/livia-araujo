
export default function Contact(){
    return(
        <div className="flex flex-col justify-center items-center pb-16 bg-white dark:bg-black text-[#4B5563] dark:text-[#D1D5DB]">
            <h2 className="text-3xl text-center lg:text-5xl font-bold text-black dark:text-white lg:text-start mt-8">
        Contato
      </h2>
            <div className="w-[100%] flex flex-col justify-center items-center md:flex-row mt-12 md:gap-4 md:w-[70%]">
                <input type="text" placeholder="Nome" className="bg-[#252422] w-[80%] mb-9 h-8 pl-6 rounded-md md:w-[40%]" />
                <input type="text" placeholder="Email" className="bg-[#252422] w-[80%] mb-9 h-8 pl-6 rounded-md md:w-[40%]"/>

            </div>
            <input type="text" placeholder="Mensagem" className="bg-[#252422] w-[80%] h-[15rem] mb-9 pl-6 rounded-md md:w-[58%]"/>
            <div className="flex md:items-start md:justify-start w-[100%] md:w-[60%]  justify-center">
                <button
                className="bg-[#BA00EF] rounded-md py-2 w-4/5 flex items-center justify-center dark:text-white mt-8 font-medium text-xl sm:w-[88%] lg:w-[10rem] lg:mt-1 lg:h-10 lg:ml-4"
                >
                Enviar
                </button>
            </div> 
        </div>       
    );
}
