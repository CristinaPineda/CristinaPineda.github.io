import React from 'react';
import todo from '../images/todo.png';
// import pixel from '../images/pixel.png';

export default function CardProjects() {
  return(
      <div>
          <h3>To do list</h3>
          <p>Crie listas de forma dinamica</p>
          <p>Acesse a aplicação</p>
          <p>Link do repositório</p>
            <img src={ todo } alt="todo" width="250px" />
      </div>
  )
}
