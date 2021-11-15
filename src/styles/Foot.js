import styled from "styled-components";

export const Foot = styled.footer`
  display: flex;
  flex-direction: column;
  margin: auto;
  bottom: 0;
  width: 100%;
  border-top: 3px solid #eddb3c;

  div {
    display: flex;
    width: 90%;
    margin: auto;
    color: #eddb3c;
    align-items: center;
    justify-content: flex-start;

    p {
      margin-right: 5px; 
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;

    div {
      justify-content: center;
    }
  }

`