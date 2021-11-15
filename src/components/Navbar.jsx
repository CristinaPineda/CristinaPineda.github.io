import React from "react";
import { Nav } from "../styles/Nav";
import ButtonProjects from "../components/ButtonProjects";
import { IoIosRocket } from "react-icons/io";

export default function Navbar() {
  return (
    <Nav>
      <IoIosRocket className="rocket" size="2.5rem" />
      <ButtonProjects />
    </Nav>
  );
}
