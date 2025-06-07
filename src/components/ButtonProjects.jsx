import React from "react";
import { useHistory } from "react-router";
import { Buttons } from "../styles/Nav";
import startModal from "../services/modal";

export default function ButtonProjects() {
  const goProjects = useHistory();

  const handleClickProjects = () => goProjects.push("/projects");
  const handleClickAbout = () => goProjects.push("/pageabout");
  const handleClickHome = () => goProjects.push("/");

  const goHome = () => {
    return (
      <div className="btns">
        <div>
          <Buttons onClick={handleClickHome}>HOME</Buttons>
        </div>
        <div>
          <Buttons onClick={handleClickProjects}>PROJECTS</Buttons>
        </div>
        <div>
          <Buttons onClick={handleClickAbout}>ABOUT</Buttons>
        </div>
        <div>
          <Buttons onClick={() => startModal("modal-content")}>CONTACT</Buttons>
        </div>
      </div>
    );
  };

  const renderButton = () => {
      return goHome();
  };

  return renderButton();
}
