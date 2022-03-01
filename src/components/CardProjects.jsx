import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import news from "../images/news.jpeg";
import Cards from "../styles/Cards";
// testando

export default function CardProjects() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    async function getProject() {
      const endpoint = "https://api-projects-cris.herokuapp.com/portfolio/project";
      const itens = await fetch(endpoint);
      const data = await itens.json();
      return setProject(data);
    }
    getProject();
  }, [setProject]);

  const nextProject = () => {
    return (
      <div className="card-project">
        <h2>Em breve</h2>
        <p>Novo projeto em construção!</p>
        <img src={news} alt="news" />
      </div>
    );
  };

  const cards = () => {
    return (
      <Cards>
        {project.map((item) => (
          <div key={item._id} className="card-project">
            <h2>{item.titleProject}</h2>
            <p>{item.descriptionProject}</p>
            <a href={item.linkApp}>Acesse a aplicação</a>
            <a href={item.linkRepository}>Link do repositório</a>
            <img
              src={item.imageProject}
              alt={item.titleProject}
              width="250px"
              height="200px"
            />
          </div>
        ))}
        {nextProject()}
      </Cards>
    );
  };

  const renderCards = () => {
    if (project.length === 0) {
      return <Loading />;
    }
    return cards();
  };

  return renderCards();
}
