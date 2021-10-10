import React from 'react';
import '../styles/footer.css';
import { DiReact } from 'react-icons/di'
import { FiCheck } from 'react-icons/fi';


export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div>
          <p>Cristina Pineda &copy; 2021</p>
        </div>
        <div className="icon">
          <p>Trabalhe comigo</p>
          <FiCheck size="30px" />  
        </div>
        <div className="icon">
          <p>Feito e constantemente atualizado com: React</p>
          <DiReact size="30px"/>
        </div>
      </footer>
    </div>
  )
}
