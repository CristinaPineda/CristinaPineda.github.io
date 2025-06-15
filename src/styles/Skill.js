import styled, { keyframes } from "styled-components";

// Definindo as cores
const colors = {
  blue: '#0200fe',    // Azul puro
  cyan: '#00FFFF',    // Ciano puro
  pink: '#ea1fc0',    // Rosa claro
  purple: '#8533FF',  // Roxo
};

// Animação keyframes para a mudança de cor
const colorOscillation = keyframes`
  0% {
    color: ${colors.blue};
  }
  25% {
    color: ${colors.cyan};
  }
  50% {
    color: ${colors.pink};
  }
  75% {
    color: ${colors.purple};
  }
  100% {
    color: ${colors.blue};
  }
`;

export const Skill = styled.div`
  display: flex;
  margin: auto;
  width: 95%;
  overflow: hidden;
  position: relative;
  min-height: 100px;
  align-items: center;

  ul {
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    justify-content: space-around;
    list-style: none;
    padding: 0;
    width: 100%;
  }

  li {
    padding: 0.8rem 0.2rem;
  }

  @media (min-width: 768px) {
    ul {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      list-style: none;
      padding: 0;
      margin: 0;
      width: 100%;
  }
  }
`;


export const ListItem = styled.li`
  flex-shrink: 0;
  padding: 0 1rem;
  font-weight: bold;
  white-space: nowrap;
  min-width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;

  animation: ${colorOscillation} 4s linear infinite;

  animation-delay: ${props => props.animationDelay};
`;