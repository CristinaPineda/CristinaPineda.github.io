import React from "react";
import { DiReact } from "react-icons/di";
import { FiCheck } from "react-icons/fi";
import { Foot } from "../styles/Foot";

export default function Footer() {
  return (
    <Foot>
      <div>
        <p>Cristina Pineda</p>
        <p>&copy; 2021</p>
      </div>
      <div>
        <p>Trabalhe comigo</p>
        <FiCheck size="1.5rem" />
      </div>
      <div>
        <p>Feito e atualizado com: React</p>
        <DiReact size="1.5rem" />
      </div>
    </Foot>
  );
}
