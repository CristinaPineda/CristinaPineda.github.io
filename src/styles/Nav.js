import styled, { keyframes } from "styled-components";

const moverGradiente = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
`;

export const Nav = styled.nav`
  align-items: center;
  color: #fff;
  display: flex;
  height: 5.5em;
  margin: 0;
  position: relative;
  overflow: hidden;

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

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200%;
    height: 3px;
    background: linear-gradient(to left, rgba(224, 16, 207, 1), rgba(9, 9, 121, 1), rgba(0, 212, 255, 1),rgba(224, 16, 207, 1));
    /*
     * Repetimos as cores (azul, rosa, verde, azul, rosa, verde) para garantir
     * que a animação crie um loop contínuo e suave.
     */
    background-size: 50% 100%;
    animation: ${moverGradiente} 5s linear infinite;
    z-index: 1;
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
  font-size: 1em;
  padding: 0 2.8em;
  margin: 0 10px;
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
`;