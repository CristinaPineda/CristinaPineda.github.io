import styled from "styled-components";

export const Aboutme = styled.div`
  color: rgb(60 237 230);
  font-size: 1rem;
  font-weight: 400;
  padding: 10px;
  text-align: center;
  letter-spacing: 3px;
  width: 100%;

  p {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 75%;

    p {
      text-align: left;
      font-size: 1.2rem;
    }
  }
`;
