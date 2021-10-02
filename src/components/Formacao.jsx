import React from 'react';
import courses from '../services/course';
import '../styles/card.css';

export default function Formacao() {
  return (
    <>
      <p className="formacao">Formação</p>
      <div className="card">
        { courses.map((item) => (
          <div key={item.curso} className="div-card">
            <p >{item.escola}</p>
            <h4>{item.curso}</h4>
          </div>
        ))}
      </div>
    </>
  );
}
