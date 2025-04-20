import setaPlay from '../assets/seta_play.png';
import setaVirar from '../assets/seta_virar.png';

import iconeCerto from '../assets/icone_certo.png';
import iconeQuase from '../assets/icone_quase.png';
import iconeErrado from '../assets/icone_erro.png';
import styled from 'styled-components';

export default function Perguntas({ pergunta, index, estados, avancar, situacaoResposta, respostas }) {
  const estado = estados[index] || 'numero';
  const respostaDada = respostas[index];

  function escolherIcone() {
    if (respostaDada === 'certa') return iconeCerto;
    if (respostaDada === 'quase') return iconeQuase;
    if (respostaDada === 'errada') return iconeErrado;
    return iconeErrado;
  }

  return (
    <Pergunta virar={estado === 'pergunta' || estado === 'resposta'}>
      {estado === 'resposta' && (
        <DivResposta>
          <Neutro1>
            <Texto>{pergunta.awnser}</Texto>
          </Neutro1>
          <Neutro2>
            <BotaoResposta cor="red" onClick={() => situacaoResposta(index, 'errada')}>Não Lembrei</BotaoResposta>
            <BotaoResposta cor="orange" onClick={() => situacaoResposta(index, 'quase')}>Quase não lembrei</BotaoResposta>
            <BotaoResposta cor="green" onClick={() => situacaoResposta(index, 'certa')}>Zap!</BotaoResposta>
          </Neutro2>
        </DivResposta>
      )}

      {estado === 'numero' && (
        <>
          <Texto>{pergunta.number}</Texto>
          <Imagem>
            <Botao src={setaPlay} alt="Botão" onClick={() => avancar(index)} />
          </Imagem>
        </>
      )}

      {estado === 'pergunta' && (
        <DivResposta>
          <Neutro1>
            <Texto>{pergunta.question}</Texto>
          </Neutro1>
          <Neutro2>
            <div></div>
            <Imagem>
              <Botao src={setaVirar} alt="Virar" onClick={() => avancar(index)} />
            </Imagem>
          </Neutro2>
        </DivResposta>
      )}

      {estado === 'finalizado' && (
        <>
          <Texto
            className="riscado"
            style={{
              color:
                respostaDada === 'certa'
                  ? 'green'
                  : respostaDada === 'quase'
                  ? 'orange'
                  : 'red',
              textDecoration: 'line-through'
            }}
          >
            {pergunta.number}
          </Texto>
          <Imagem>
            <Botao src={escolherIcone()} alt="Resultado" />
          </Imagem>
        </>
      )}
    </Pergunta>
  );
}

const Pergunta = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2%;
  padding: 30px;
  height: ${({ virar }) => (virar ? '200px' : '80px')};
  background-color: ${({ virar }) => (virar ? '#FFFFD4' : 'white')};
  border-radius: 8px;
  flex-direction: ${({ virar }) => (virar ? 'column' : 'row')};
  min-height: ${({ virar }) => (virar ? '200px' : 'initial')};
`;

const Texto = styled.div`
  font-size: 25px;
  margin-left: 15px;
`;

const Imagem = styled.div`
  .botao {
    height: 50px;
    margin-right: 15px;
  }
`;

const Botao = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 15px;
  cursor: pointer;
`;

const DivResposta = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const Neutro1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100px;
  border-radius: 4px;
`;

const Neutro2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  border-radius: 4px;
`;

const BotaoResposta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 50px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  background-color: ${({ cor }) => cor};
  cursor: pointer;
`;
