import styled from "styled-components";

export const Modal = styled.div`
  .modal-container {
    align-items: center;
    background-color: rgba(112, 128, 144, .6);
    color: white;
    display: none;
    height: 100vh;
    justify-content: center;
    left: 0px;
    position: fixed;
    top: 0px;
    width: 100vw;
    z-index: 2000;
  }

  .modal-container.open {
    display: flex;

    .modal {
      background-color: rgba(165, 42, 42, .8);
      border: 5px solid white;
      border-radius: 7px;
      color: white;
      display: flex;
      flex-direction: column;
      font-size: 20px;
      min-width: 250px;
      padding: 40px;
      position: relative;
      width: 60%;
    }
    
    .modal a {
      color: white;
    }
  }

  @media (max-width: 768px) {
    .modal {
      width: 50%;
      font-size: 17px;
      padding: 20px;
    }
  }

  @keyframes modal {
    from {
      opacity: 0;
      transform: translate3d(0, -60px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  
  .open .modal {
    animation: modal .3s;
  }
  
  .skills-ul {
    list-style-type: none;
    padding: 0;
  }
  
  .links {
    display: flex;
    flex-direction: column;
  }
  
  .links p {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .links a {
    margin-left: 8px ;
  }
  
  .links a:hover {
    color: yellow;
  }
  .close {
    background-color: rgba(165, 42, 42, .8);
    border: none;
    position: absolute;
    color: white;
    cursor: pointer;
    font-size: 28px;
    height: 50px;
    right: 0px;
    top: 0px;
    width: 50px;
  }
  
  .close:hover {
    color: yellow;
  }

`