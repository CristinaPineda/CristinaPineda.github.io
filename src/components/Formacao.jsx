import React from "react";
import courses from "../services/course";
import { Courses } from "../styles/Courses";

export default function Formacao() {
  return (
    <Courses>
      <h3>Formação</h3>
      <div className="card">
        {courses.map((item) => (
          <div key={item.curso} className="div-card">
            <p>{item.escola}</p>
            <h4>{item.curso}</h4>
          </div>
        ))}
      </div>
    </Courses>
  );
}
