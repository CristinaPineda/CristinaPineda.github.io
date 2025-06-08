import styled, { keyframes } from 'styled-components';

const textGradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Load = styled.div`
  height: 30rem;
  font-size: 1em;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;

  background: linear-gradient(to left, rgba(224, 16, 207, 1), rgba(9, 9, 121, 1), rgba(0, 212, 255, 1),rgba(224, 16, 207, 1));
  background-size: 400% 400%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${textGradientAnimation} 8s ease infinite;


  @media (min-width: 768px) {
    height: 38rem;
    font-size: 1em;
  }
`;

export default Load;