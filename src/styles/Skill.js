import styled, { keyframes } from "styled-components";


// 2. Animação para o li se mover para a esquerda (ajustada para loop contínuo)
const moverLiEsquerda = keyframes`
  0% {
    transform: translateX(-50%); /* Posição inicial */
  }
  100% {
    transform: translateX(0); /* Move a ul 50% de sua largura para a esquerda */
  }
`;

export const Skill = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  overflow: hidden; /* Importante para cortar os li's quando saírem da tela */
  position: relative;

  ul {
    display: flex;
    flex-wrap: nowrap; /* Impede que os li's quebrem linha */
    justify-content: flex-start; /* Alinha os itens ao início */
    padding: 10px;
    
    /* ESSENCIAL: Defina o tamanho da ul para ser DUAS VEZES a largura do seu conteúdo */
    width: auto; /* Remove width: fit-content para permitir flexibilidade */
    min-width: 100%;

    /* Ajuste o background-size para que a ul tenha o dobro da largura necessária para um ciclo */
    /* Isso geralmente é feito no HTML duplicando os itens, mas aqui no CSS podemos dar um hint */
    /* O mais importante é que a ul **contenha duas cópias do seu conteúdo** */

    animation: ${moverLiEsquerda} 20s linear infinite; /* A duração (10s) deve ser ajustada para a velocidade desejada */
  }
    /* Pausa a animação ao passar o mouse */
    &:hover {
      animation-play-state: paused;
    }

    li {
      list-style: none;
      margin: 18px;
      padding: 1px;
      color: #fff;
      font-weight: bold;
      white-space: nowrap; /* Impede que o texto dentro do li quebre linha */
      flex-shrink: 0; /* Impede que os li's encolham */

  }

  @media (min-width: 768px) {
    justify-content: center;

  }
`;