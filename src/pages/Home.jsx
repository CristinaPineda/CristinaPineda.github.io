import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Contact from '../components/Contact';
import Formacao from '../components/Formacao';
import Footer from '../components/Footer';
import '../styles/home.css';

export default function Home() {
  return(
    <div>
      <div className="nav" >
        <Navbar /> 
      </div>
      <Header />
      <div className="btn-about">
        <About />
      </div>
      <div id="modal-content" className="modal-container">
        <Contact />
      </div>
      <div>
        <Formacao />
      </div>
      <Footer/>
    </div>
  )
}
