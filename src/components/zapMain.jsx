import logo from '../assets/logo.png';
import Perguntas from './Perguntas';
import usePerguntas from './mostrarPerguntas';
import styled from "styled-components";

export default function ZapMain() {
  const perguntas = [
    { number: "Pergunta 1", question: "Qual é o nome do protagonista em Elden Ring?", awnser: "Tarnished (Exilado)" },
    { number: "Pergunta 2", question: "Depois do tutorial, qual é o primeiro boss NÃO opcional que você enfrenta logo no início do jogo?", awnser: "Margit, o Agouro Caído" },
    { number: "Pergunta 3", question: "Qual é o nome da deusa que você deve seguir para se tornar o Elden Lord?", awnser: "Queen Marika, a Eterna" },
    { number: "Pergunta 4", question: "Qual é o nome da grande árvore que aparece em várias partes do jogo e é fundamental para a história?", awnser: "Eddtree" },
    { number: "Pergunta 5", question: "Em qual região você encontra a Academy of Raya Lucaria, que é uma das áreas chave do jogo?", awnser: "Liurnia" },
    { number: "Pergunta 6", question: "Qual boss você precisa matar para entrar na DLC do jogo?", awnser: "Mohg, Lorde do Sangue" },
    { number: "Pergunta 7", question: "Quem é o chefe final de Elden Ring?", awnser: "Elden Beast" },
    { number: "Pergunta 8", question: "Qual o boss mais dificil do jogo?", awnser: "Ou Radahn Prime ou Messmer. Apenas." }
  ];

  const { estados, avancar, contador, situacaoResposta, respostas } = usePerguntas();
  const finalizados = contador();
  const total = perguntas.length;

  return (
    <Pagina>
      <Topo>
        <Logo src={logo} alt="Logo" />
        <Titulo>Zap Recall</Titulo>
      </Topo>

      <Conteudo>
        <ListaPerguntas>
          {perguntas.map((pergunta, index) => (
            <Perguntas
              key={index}
              pergunta={pergunta}
              index={index}
              estados={estados}
              avancar={avancar}
              situacaoResposta={situacaoResposta}
              respostas={respostas}
            />
          ))}
        </ListaPerguntas>
      </Conteudo>

      <Concluidos>
        {finalizados}/{total} CONCLUÍDOS!
      </Concluidos>
    </Pagina>
  );
}

const Pagina = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #FB6B6B;
  overflow: hidden;
`;

const Topo = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 300%;
  color: white;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  image-rendering: auto;
  margin: 10px;
`;


const Titulo = styled.h1`
  margin-left: 10px;
`;

const Conteudo = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const ListaPerguntas = styled.ul`
  width: 50%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  ::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
`;

const Concluidos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
  background-color: white;
  font-size: 200%;
`;
