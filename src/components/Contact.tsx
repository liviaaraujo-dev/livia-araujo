
export default function Contact(){
    return(
        <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-medium text-white mb-10">Contato</h1>
        <input type="text" placeholder="Nome" className="bg-[#252422] w-[80%] mb-9 h-8 pl-6 rounded-md" />
        <input type="text" placeholder="Email" className="bg-[#252422] w-[80%] mb-9 h-8 pl-6 rounded-md"/>
        <input type="text" placeholder="Mensagem" className="bg-[#252422] w-[80%] h-[15rem] mb-9 pl-6 rounded-md"/>
    </div>       
    );
}
