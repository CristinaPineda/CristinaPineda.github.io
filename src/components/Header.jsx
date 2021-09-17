import React from 'react';
import cris from '../images/cris.jpeg';
import Skills from './Skills';
import '../styles/header.css';

export default function Header() {
  return (
    <header className="header">
      <img src={ cris } alt="fots Cristina" width="150rem" id="my-photo" />
      <h1>
        Cristina Pineda Web Developer /{'>'}
      </h1>
      <Skills />
    </header>
  )
}
