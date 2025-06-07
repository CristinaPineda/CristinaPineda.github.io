import React from 'react';
import styled from "styled-components";
import Navbar from '../components/Navbar';
import CardProjects from '../components/CardProjects';
import Footer from '../components/Footer';

import background from "../images/9019808.jpg";

const HomeWrapper = styled.div`
  background-image: url(${background}); /* Define a imagem de fundo */
  background-size: cover; /* Faz a imagem cobrir todo o espaço, cortando se necessário */
  background-position: center; /* Centraliza a imagem na tela */
  background-repeat: no-repeat; /* Evita que a imagem se repita */
  background-attachment: fixed; /* Fixa a imagem de fundo enquanto o conteúdo rola */
  min-height: 100vh; /* Garante que o container ocupe no mínimo a altura total da tela */
  width: 100%; /* Garante que o container ocupe a largura total */
`;

export default function Projects() {
  return(
    <HomeWrapper>
      <Navbar /> 
      <CardProjects />
    </HomeWrapper>
  )
}
