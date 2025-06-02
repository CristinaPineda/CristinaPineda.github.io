import React from "react";
import { Nav } from "../styles/Nav";
import ButtonProjects from "../components/ButtonProjects";
//import { IoIosRocket } from "react-icons/io";
import { GiTechnoHeart } from "react-icons/gi";

export default function Navbar() {
  return (
    <Nav>
      <GiTechnoHeart className="rocket" size="2.5rem"/>
      <ButtonProjects />
    </Nav>
  );
}
