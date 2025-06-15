import styled, { keyframes } from "styled-components";

const moverGradiente = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
`;

export const Buttons = styled.div`
  font-size: 1em;
  padding: 0 1em;
  margin: 0;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: normal;

  &::after {
    content: '→';
    position: absolute;
    right: 10px;
    font-size: 1em;
    opacity: 0;
    transform: translateX(-10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  &:hover {
    font-weight: bold;
  }

  &:hover::after {
    opacity: 1;
    transform: translateX(0);
  }

  @media (min-width: 768px) {
    padding: 0 2.8em;
    margin: 0 10px;
  }
`;

// Novo componente estilizado para conter a linha animada
export const AnimatedLineContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%; /* Ocupa a largura da Nav */
  height: 3px; /* A altura da linha */
  overflow: hidden; /* **AQUI ESTÁ A MUDANÇA PRINCIPAL:** Agora o overflow: hidden está aqui! */
  z-index: 1; /* Garante que esteja acima do conteúdo da Nav se necessário */

  /* A pseudo-classe ::after será a linha animada real dentro deste container */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200%; /* Continua sendo 200% para a animação */
    height: 100%; /* Ocupa 100% da altura do AnimatedLineContainer (3px) */
    background: linear-gradient(to left, rgba(224, 16, 207, 1), rgba(9, 9, 121, 1), rgba(0, 212, 255, 1), rgba(224, 16, 207, 1));
    background-size: 50% 100%;
    animation: ${moverGradiente} 5s linear infinite;
  }
`;


export const Nav = styled.nav`
  align-items: center;
  color: #fff;
  display: flex;
  height: 5.5em;
  margin: 0;
  position: relative;
  /* >>> REMOVEMOS overflow: hidden; daqui! <<< */
  justify-content: space-between;

  .rocket {
    margin-left: 20px;
    color: rgba(0, 212, 255, 1);
  }

  .hamburger-icon {
    color: rgb(0, 212, 255);
    display: block;
    cursor: pointer;
    margin-right: 20px;
    z-index: 100;
  }

  .btns-desktop {
    display: none;
  }

  .btns-mobile {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 5.5em; /* Começa logo abaixo da Nav */
    left: 0;
    color: rgb(0, 212, 255);
    width: 100%;
    background-color: rgba(1, 51, 120, 0.9);
    padding: 20px 0;
    z-index: 99; /* Garante que o menu esteja acima de outros conteúdos da página */
  }

  .btns-mobile ${Buttons} {
    margin: 10px 0;
    padding: 10px 20px;
    width: 100%;
    text-align: center;
  }

  /* A pseudo-classe ::after da Nav não será mais a linha animada,
     ela foi movida para AnimatedLineContainer. */
  /* Removemos este bloco:
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200%;
    height: 3px;
    background: linear-gradient(to left, rgba(224, 16, 207, 1), rgba(9, 9, 121, 1), rgba(0, 212, 255, 1),rgba(224, 16, 207, 1));
    background-size: 50% 100%;
    animation: ${moverGradiente} 5s linear infinite;
    z-index: 1;
  }
  */

  @media (min-width: 768px) {
    /* Não precisa de overflow: hidden; aqui */
    .rocket {
      margin-left: 50px;
    }

    .hamburger-icon {
      display: none;
    }

    .btns-desktop {
      display: flex;
      flex-direction: row;
      margin: auto;
      width: 80%;
      justify-content: flex-end;
      margin-right: 20px;
    }

    .btns-mobile {
      display: none;
    }
  }
`;