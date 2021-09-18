import React from 'react';
import githubblue from '../images/githubblue.png';
import linkedin from '../images/linkedin.png';
import zap from '../images/zap.png';

export default function Contact() {
  return (
    <div class="modal" >
      <button class="close">x</button>
      <div class="links">
        <p>
          <img alt="cris-git" src={ githubblue } width="48px"/>
          <a href="https://github.com/CristinaPineda" target="blank">GitHub</a>
        </p>
        <p>
          <img alt="cris-link" src={ linkedin }/>
          <a href="https://www.linkedin.com/in/cristina-pineda-41596044/" target="blank">Linkedin</a>
        </p>
        <p>
          <img alt="cris-zap" src={ zap }/>
          (11)94720.1686
        </p>
        <p>
          <img alt="cris-mail" src="https://img.icons8.com/fluency/48/000000/email-open.png"/>
          Email: cristinadaspineda@yahoo.com.br
        </p>
      </div>
    </div>
  )
} 