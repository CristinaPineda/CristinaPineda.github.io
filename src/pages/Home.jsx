import React from 'react';
import Header from '../components/Header';
import ButtonProjects from '../components/ButtonProjects';
import '../styles/home.css';

export default function Home() {
  return(
    <div>
      <div className="btn-projects" >
        <ButtonProjects /> 
      </div>
      <Header />
    </div>
  )
}
