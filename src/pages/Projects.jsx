import React from 'react';
import Navbar from '../components/Navbar';
import CardProjects from '../components/CardProjects';
import Footer from '../components/Footer';
import '../styles/projects.css';

export default function Projects() {
  return(
    <div>
      <Navbar /> 
      <CardProjects />
      <Footer />
    </div>
  )
}
