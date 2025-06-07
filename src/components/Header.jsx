import React from "react";
import cris from "../images/cris.jpeg";
import About from "../components/About";
import avatar from "../images/avatar.jpg";
import { HeaderStyle } from "../styles/Header";
import fundo from "../images/fundo.png";

export default function Header() {
  return (
    <HeaderStyle className="header">
      <div className="div-header">
        <div className="div-hs">
          <h3>software engineer</h3>
          <h1>Cristina Pineda  /{">"}</h1>
          <About />
        </div>
        <div>
          <img src={avatar} alt="foto Cristina" width="200em" id="my-photo" />
        </div>
      </div>
    </HeaderStyle>
  );
}
