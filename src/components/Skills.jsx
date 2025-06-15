import React from "react";
import skillData from "../services/skills";
import { Skill, ListItem } from "../styles/Skill"; 

const getRandomDelay = () => `-${Math.random() * 4}s`;

export default function Skills() {
  return (
    <Skill>
      <ul>
        {skillData.map((item, index) => (
          <ListItem
            className="size"
            key={`${item.name}-${index}-1`}
            animationDelay={getRandomDelay()}
          >
            {item.simbol}
          </ListItem>
        ))}
      </ul>
    </Skill>
  );
}