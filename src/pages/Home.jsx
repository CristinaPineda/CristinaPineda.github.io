import React from 'react';
import Header from '../components/Header';
import ButtonProjects from '../components/ButtonProjects';
import About from '../components/About'
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
    </div>
  )
}
