export default function listaPeguntas(pergunta, index){
    return(
        <div className="perguntas">
        <ul className="lista_perguntas">
          {perguntas.map((pergunta, index) => (
            <Perguntas pergunta={pergunta} index={index}/>
          ))}
        </ul>
      </div>

    );
}