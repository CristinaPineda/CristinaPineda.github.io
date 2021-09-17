import React from 'react';
import agile from '../images/agile.png';
import bootstrap from '../images/bootstrap.png';
import css from '../images/css.png';
import figma from '../images/figma.png';
import git from '../images/git.png';
import github from '../images/github.png';
import html from '../images/html.png';
import javascript from '../images/javascript.png';
import material from '../images/material.png';
import python from '../images/python.png';
import react from '../images/react.png';
import '../styles/skills.css';

export default function Skills() {
  return (
    <div className="skills">
      <div className="p-skill">
        <p>Skills</p>
      </div>
      <div className="icons span-icons">
        <div className="unit">
          <img src={ javascript } alt="icone javascript" />
          <span>JavaScript</span>
        </div>
        <div className="unit">
          <img src={ html } alt="icone html"/>
          <span>HTML</span>
        </div>
        <div className="unit">
          <img src={ css } alt="icone css" />
          <span>CSS</span>
        </div>
        <div className="unit">
          <img src={ react } alt="icone react" />
          <span>React</span>
        </div>
        <div className="unit">
          <img src={ bootstrap } alt="icone boostrap" />
          <span>Bootstrap</span>
        </div>
        <div className="unit">
          <img src={ material } alt="icone material" />
          <span>Material UI</span>
        </div>
        <div className="unit">
          <img src={ git } alt="icone git" />
          <span>Git</span>
        </div>
        <div className="unit">
          <img src={ github } alt="icone github" />
          <span>GitHub</span>
        </div>
        <div className="unit">
          <img src={ python } alt="icone python" />
          <span>Python</span>
        </div>
        <div className="unit">
          <img src={ figma } alt="icone figma" />
          <span>Figma</span>
        </div>
        <div className="unit">
          <img src={ agile } alt="icone agile" width="48px" />
          <span>Agile</span>
        </div>
      </div>
    </div>
  )
}
