import React, { useState } from "react";
import { useHistory } from "react-router";
import { Nav } from "../styles/Nav";
import ButtonProjects from "../components/ButtonProjects";
import { FaBars, FaTimes } from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";

export default function Navbar() {
  const goProjects = useHistory();

  const [isOpen, setIsOpen] = useState(false);

  const handleClickHome = () => goProjects.push("/");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav isOpen={isOpen}>
      <GrHomeRounded className="rocket" size="1.9rem" onClick={handleClickHome} />
      <div className="hamburger-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes size="1.5em" /> : <FaBars size="1.5em" />}
      </div>
      <div className="btns-mobile">
        <ButtonProjects />
      </div>
      <div className="btns-desktop">
        <ButtonProjects />
      </div>
    </Nav>
  );
}