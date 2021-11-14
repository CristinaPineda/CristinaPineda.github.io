import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #390aad;
  display: flex;
  margin: 0;
  justify-content: center;
  align-items: center;
  height: 5.5em;

  .btns {
    display: flex;
    width: 90%;
  }

  @media (min-width: 768px) {
    justify-content: flex-end;

    .btns {
      align-items: flex-end;
      margin: auto;
      width: 80%;
    }
  }
`;

export const Buttons = styled.button`
  background-color: #f87fc4;
  color: white;
  font-size: 1em;
  font-weight: 600;
  border: 2px solid #f87fc4;
  border-radius: 3px;
  padding: 0 1.3em;

  @media (min-width: 768px) {
    margin: 0 10px;
    font-size: 1.3em;
  }
`;
