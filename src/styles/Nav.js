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
  /* Estilos mobile-first para Buttons (sem media query aqui) */
  font-size: 1em; /* Tamanho base para mobile */
  padding: 0 1em; /* Ajustado para mobile, pode ser mais compacto */
  margin: 0; /* Ajustado para mobile */
  position: relative;
  cursor: pointer;
  display: flex; /* Adicionado display flex para Buttons no mobile */
  align-items: center;
  justify-content: center;
  font-weight: normal;

  /* Os estilos de hover para Buttons estavam dentro da media query,
     coloque-os aqui para que funcionem em mobile também se desejar,
     ou os mantenha na media query se for só para desktop. */
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
    /* .style-btn:hover { color: red; } // Removido, pois você está estilizando o próprio Buttons */
  }

  &:hover::after {
    opacity: 1;
    transform: translateX(0);
  }

  @media (min-width: 768px) {
    /* Estilos específicos de desktop para Buttons */
    padding: 0 2.8em; /* Padding maior para desktop */
    margin: 0 10px; /* Margem entre botões para desktop */
  }
`;

export const Nav = styled.nav`
  align-items: center;
  color: #fff;
  display: flex;
  height: 5.5em;
  margin: 0;
  position: relative;
  /* Remova 'overflow: hidden;' do estilo base (mobile) da Nav */
  /* Ele será aplicado apenas no desktop abaixo */
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

  /* O display é controlado pela prop isOpen */
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

  /* A linha de gradiente ainda precisa de z-index e position relative na Nav */
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

  @media (min-width: 768px) {
    /* **AQUI ESTÁ A MUDANÇA MAIS IMPORTANTE:** */
    /* Aplicamos overflow: hidden; apenas para desktop,
       onde o menu mobile não é visível e a Nav precisa dele para a animação. */
    overflow: hidden;

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