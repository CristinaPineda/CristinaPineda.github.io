import React from 'react';
import ButtonProjects from '../components/ButtonProjects';
import CardProjects from '../components/CardProjects';
import '../styles/projects.css';

export default function Projects() {
  return(
    <div>
      <div className="btn-projects" >
        <ButtonProjects /> 
      </div>
      <CardProjects />
    </div>
  )
}
