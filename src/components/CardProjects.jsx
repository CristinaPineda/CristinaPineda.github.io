import React from 'react';
import todo from '../images/todo.png';
import pixel from '../images/pixel.png';

export default function CardProjects() {
  return(
      <div className="projects">
        <div className="card-project">
          <h2>Pixels Art</h2>
          <p>Divirta-se criando desenhos ponto a ponto</p>
          <a href="https://cristinapineda.github.io/pixelsArt/" target="blank">Acesse a aplicação</a>
          <a href="https://github.com/CristinaPineda/pixelsArt" target="blank">Link do repositório</a>
          <img src={ pixel } alt="todo" width="250px" />
        </div>
        <div className="card-project">
          <h2>To do list</h2>
          <p>Crie listas de forma dinamica</p>
          <a href="https://cristinapineda.github.io/to-do-list-redux/" target="blank">Acesse a aplicação</a>
          <a href="https://github.com/CristinaPineda/to-do-list-redux" target="blank">Link do repositório</a>
          <img src={ todo } alt="todo" width="250px" height="210px" />
        </div>
      </div>
  )
}
