import React from 'react';
import todo from '../images/todo.png';
import pixel from '../images/pixel.png';
import tictactoe from '../images/tictactoe.png';
import bootstrapImg from '../images/bootstrapImg.png';
import news from '../images/news.jpeg';

export default function CardProjects() {
  return(
      <div className="projects">
        <div className="card-project">
          <h2>Pixels Art</h2>
          <p>Divirta-se criando desenhos ponto a ponto</p>
          <a href="https://cristinapineda.github.io/pixelsArt/" target="blank">Acesse a aplicação</a>
          <a href="https://github.com/CristinaPineda/pixelsArt" target="blank">Link do repositório</a>
          <img src={ pixel } alt="pixels art" width="250px" height="200px"/>
        </div>
        <div className="card-project">
          <h2>To do list</h2>
          <p>Crie listas de forma dinamica</p>
          <a href="https://cristinapineda.github.io/to-do-list-redux/" target="blank">Acesse a aplicação</a>
          <a href="https://github.com/CristinaPineda/to-do-list-redux" target="blank">Link do repositório</a>
          <img src={ todo } alt="todo" width="250px" height="200px"/>
        </div>
        <div className="card-project">
          <h2>Tic tac toe</h2>
          <p>Clássico jogo em React</p>
          <a href="https://tic-tac-toe-react-cris.herokuapp.com/" target="blank">Acesse a aplicação</a>
          <a href="https://github.com/CristinaPineda/tic-tac-toe-react" target="blank">Link do repositório</a>
          <img src={ tictactoe } alt="tic tac toe" width="250px" height="200px"/>
        </div>
        <div className="card-project">
          <h2>Boostrap project</h2>
          <p>
            Página de uma empresa de arquitetura estruturada com base no Boostrap
          </p>
          <a href="https://cristinapineda.github.io/boostrap-project/" target="blank">Acesse a aplicação</a>
          <a href="https://github.com/CristinaPineda/boostrap-project" target="blank">Link do repositório</a>
          <img src={ bootstrapImg } alt="boostrap" width="250px" height="200px"/>
        </div>
        <div className="card-project">
          <h2>Em breve</h2>
          <p>Novo projeto em construção!</p>
          <img src={ news } alt="news" />
        </div>
      </div>
  )
}
