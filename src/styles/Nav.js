import styled from "styled-components";

export const Nav = styled.nav`
  align-items: center;
  background-color: #001299;
  color: #eddb3c;
  display: flex;
  height: 5.5em;
  margin: 0;

  .rocket {
    margin-left: 20px;
  }

  .btns {
    display: flex;
    justify-content: center;
    width: 90%;
  }

  @media (min-width: 768px) {
    .rocket {
      margin-left: 50px;
    }

    .btns {
      flex-direction: row;
      justify-content: flex-end;
      margin: auto;
      width: 80%;
    }
  }
`;

export const Buttons = styled.button`
  background-color: #eddb3c;
  border-radius: 3px;
  border: 2px solid #eddb3c;
  color: #001299;
  font-size: 1em;
  padding: 0 1.3em;
  margin: 0 10px;

  @media (min-width: 768px) {
    font-size: 1.3em;
  }
`;
