import React from 'react';
import Header from '../components/Header';
import ButtonProjects from '../components/ButtonProjects';
import About from '../components/About';
import Contact from '../components/Contact';
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
      <div id="modal-content" class="modal-container">
        <Contact />
      </div>
    </div>
  )
}
