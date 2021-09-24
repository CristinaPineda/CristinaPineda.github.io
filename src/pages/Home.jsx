import React from 'react';
import Header from '../components/Header';
import ButtonProjects from '../components/ButtonProjects';
import About from '../components/About';
import Contact from '../components/Contact';
import Formacao from '../components/Formacao';
import '../styles/home.css';

export default function Home() {
  return(
    <div>
      <div className="btn-projects" >
        <ButtonProjects /> 
      </div>
      <Header />
      <div className="btn-about">
        <About />
      </div>
      <div id="modal-content" className="modal-container">
        <Contact />
      </div>
      <Formacao />
    </div>
  )
}
