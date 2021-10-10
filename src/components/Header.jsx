import React from 'react';
import cris from '../images/cris.jpeg';
import Skills from './Skills';
import '../styles/header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="image">
        <img src={ cris } alt="foto Cristina" width="220em" id="my-photo" />
        <h1>
          Cristina Pineda Web Developer /{'>'}
        </h1>
      </div>
      <Skills />
    </header>
  )
}
