import styled, { keyframes } from "styled-components";

// 1. Defina a animação para o movimento do gradiente
const moverGradiente = keyframes`
  0% {
    transform: translateX(-50%); /* Inicia mais à esquerda para "entrar" na tela pela esquerda */
  }
  100% {
    transform: translateX(0%); /* Termina na posição inicial (0%), criando o efeito de movimento para a direita */
  }
`;

export const Nav = styled.nav`
  align-items: center;
  /* background-color: #001299; */
  color: #fff;
  display: flex;
  height: 5.5em;
  margin: 0;

  /*
   * Importante: Remova as propriedades de borda normais, pois o pseudo-elemento
   * será responsável pela linha animada.
   */
  /* border-bottom: 3px; */
  /* border-color: blue; */

  /* 2. Configure o posicionamento para o pseudo-elemento */
  position: relative;
  overflow: hidden; /* Isso esconde as partes do gradiente que "extravasam" */

  .rocket {
    margin-left: 20px;
    color:  rgba(0, 212, 255, 1);
  }

  .btns {
    display: flex;
    justify-content: flex-end;
    width: 90%;
    margin-right: 20px;
  }

  /* 3. Crie e estilize o pseudo-elemento ::after para ser a linha animada */
  &::after {
    content: ''; /* Necessário para que o pseudo-elemento seja renderizado */
    position: absolute;
    bottom: 0; /* Alinha na parte inferior da Nav */
    left: 0;
    width: 200%; /* Duas vezes a largura da Nav para o efeito de rolagem */
    height: 3px; /* A espessura da sua linha animada */
    background: linear-gradient(to left, rgba(224, 16, 207, 1), rgba(9, 9, 121, 1), rgba(0, 212, 255, 1),rgba(224, 16, 207, 1));
    /*
     * Repetimos as cores (azul, rosa, verde, azul, rosa, verde) para garantir
     * que a animação crie um loop contínuo e suave.
     */
    background-size: 50% 100%; /* Cada ciclo completo de cores ocupa 50% da largura do pseudo-elemento */
    animation: ${moverGradiente} 5s linear infinite; /* Aplica a animação: 6s de duração, velocidade linear, loop infinito */
    z-index: 1; /* Garante que a linha apareça acima do fundo da Nav, se houver */
  }

  @media (min-width: 768px) {
    .rocket {
      margin-left: 50px;
    }

    .btns {
      flex-direction: row;
      margin: auto;
      width: 80%;
    }
  }
`;

export const Buttons = styled.div`
  /* background-color: transparent; */ /* Use 'transparent' ou omita se não quiser cor de fundo */
  /* border-radius: 3px; */
  /* border: 2px solid #eddb3c; */
  /* color: #001299; */
  font-size: 1em;
  padding: 0 2.8em;
  margin: 0 10px;
`;