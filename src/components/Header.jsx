import React from "react";
import cris from "../images/cris.jpeg";
import { HeaderStyle } from "../styles/Header";

export default function Header() {
  return (
    <HeaderStyle className="header">
      <div className="div-header">
        <img src={cris} alt="foto Cristina" width="200em" id="my-photo" />
        <h1>Cristina Pineda Web Developer /{">"}</h1>
      </div>
    </HeaderStyle>
  );
}
