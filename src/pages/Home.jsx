import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Contact from '../components/Contact';
import Formacao from '../components/Formacao';
import Footer from '../components/Footer';

export default function Home() {
  return(
    <>
      <Navbar /> 
      <Header />
      <About />
      <Formacao />
      <Footer/>
      <div id="modal-content" className="modal-container">
        <Contact />
      </div>
    </>
  )
}
