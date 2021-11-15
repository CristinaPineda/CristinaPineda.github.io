import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  width: 60%;

  .div-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

    img {
      width: 8em;
      border: 3px solid #f87fc4;
      border-radius: 2px 50px;
    }
  }

  @media (min-width: 768px) {
    width: 80%;

    .div-header {
      flex-direction: row;
      margin: auto;

      img {
        margin-right: 3rem;
      }
    }
  }
`;
