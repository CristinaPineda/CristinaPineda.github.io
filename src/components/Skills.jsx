import React from "react";
import skill from "../services/skills";
import { Skill } from "../styles/Skill";

export default function Skills() {
  return (
    <Skill>
      <ul>
        {skill.map((item) => (
          <div key={item.name}>
            <li className="size">{item.simbol}</li>
          </div>
        ))}
                {skill.map((item) => (
          <div key={item.name}>
            <li className="size">{item.simbol}</li>
          </div>
        ))}
      </ul>
    </Skill>
  );
}
