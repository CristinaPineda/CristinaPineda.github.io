import React from "react";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import { Buttons } from "../styles/Nav";
import startModal from "../services/modal";

export default function ButtonProjects() {
  const goProjects = useHistory();

  const handleClick = () => {
    goProjects.push("/projects");
  };

  const handleClickHome = () => {
    goProjects.push("/");
  };

  const { pathname } = useLocation();
  const renderButton = () => {
    if (pathname.includes("/projects")) {
      return (
        <div className="btns">
          <Buttons onClick={handleClickHome}>Home</Buttons>
        </div>
      );
    } else {
      return (
        <div className="btns">
          <div>
            <Buttons onClick={handleClick}>Projetos</Buttons>
          </div>
          <div>
            <Buttons onClick={() => startModal("modal-content")}>
              Contato
            </Buttons>
          </div>
        </div>
      );
    }
  };

  return renderButton();
}
