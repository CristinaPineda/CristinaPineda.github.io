import React from "react";
import { useHistory } from "react-router";
import { Buttons } from "../styles/Nav";
import startModal from "../services/modal";

export default function ButtonProjects() {
  const goProjects = useHistory();

  const handleClickProjects = () => goProjects.push("/projects");
  const handleClickAbout = () => goProjects.push("/pageabout");
  const handleClickHome = () => goProjects.push("/");

    return (
      <>
          <Buttons className="style-btn" onClick={handleClickHome}>HOME</Buttons>
          <Buttons className="style-btn" onClick={handleClickProjects}>PROJECTS</Buttons>
          <Buttons className="style-btn" onClick={handleClickAbout}>ABOUT</Buttons>
          <Buttons className="style-btn" onClick={() => startModal("modal-content")}>CONTACT</Buttons>
      </>
    );
}
