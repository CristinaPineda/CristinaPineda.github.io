import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  margin: auto;
  width: 90%;
  justify-content: center;
  align-items: center;
  height: 5em;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`

export const Buttons = styled.button`
  color: white;
  border: 2px solid #f87fc4;
`