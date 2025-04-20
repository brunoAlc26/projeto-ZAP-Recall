import { useState } from 'react';

export default function usePerguntas() {
  const [estados, setEstados] = useState({});

  function avancar(index, novoEstado = null) {
    setEstados((prev) => {
      const atual = prev[index] || 'numero';

      if (novoEstado) {
        return { ...prev, [index]: novoEstado };
      }

      const proximo = atual === 'numero'
        ? 'pergunta'
        : atual === 'pergunta'
        ? 'resposta'
        : 'finalizado';

      return { ...prev, [index]: proximo };
    });
  }

  const [respostas, setRespostas] = useState({});

  function situacaoResposta(index, tipo) {
    setRespostas((prev) => ({
      ...prev,
      [index]: tipo,
    }));
  
    avancar(index, 'finalizado');
  }
  

  function contador() {
    return Object.values(estados).filter(e => e === 'finalizado').length;
  }

  return { estados, avancar, contador, situacaoResposta, respostas };
}