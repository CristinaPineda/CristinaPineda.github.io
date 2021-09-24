import React from 'react';
import '../styles/card.css';

export default function Formacao() {
  const courses = [
    {
      escola: 'Trybe',
      curso: 'Desenvolvimento Web',
    },
    {
      escola: 'HSMUcode',
      curso: 'Analista de dados',
    },
    {
      escola: 'Igti',
      curso: 'Analista de dados Python',
    },
    {
      escola: 'Igti',
      curso: 'Desenvolvedor Python',
    },
    {
      escola: 'Anhanguera',
      curso: 'Business intelligence, big data e analytics',
    },
    {
      escola: 'Mackenzie',
      curso: 'Gestão de projetos',
    },
  ];

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
