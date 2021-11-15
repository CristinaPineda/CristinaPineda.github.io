import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import "../styles/modal.css";

export default function Contact() {
  return (
    <div id="modal-content" className="modal-container">
      <div className="modal">
        <button className="close">x</button>
        <div className="links">
          <p>
            <FaGithub size="2rem" />
            <a href="https://github.com/CristinaPineda" target="blank">
              GitHub
            </a>
          </p>
          <p>
            <FaLinkedin size="2rem" />
            <a
              href="https://www.linkedin.com/in/cristina-pineda-41596044/"
              target="blank"
            >
              Linkedin
            </a>
          </p>
          <p>
            <FaWhatsapp size="2rem" />
            <span>(11)94720.1686</span>
          </p>
          <p>
            <MdAlternateEmail size="2rem" />
            <span>cristinadaspineda@yahoo.com.br</span>
          </p>
        </div>
      </div>
    </div>
  );
}
