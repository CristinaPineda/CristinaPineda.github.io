import styled from "styled-components";

export const Foot = styled.footer`
  border-top: 3px solid #eddb3c;
  bottom: 0;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;

  div {
    align-items: center;
    color: #eddb3c;
    display: flex;
    justify-content: flex-start;
    margin: auto;
    width: 90%;

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
`;
