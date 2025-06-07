import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  flex-direction: column;
  margin: 6rem auto;
  width: 100%;
  align-items: flex-start;

  .div-header {
    align-items: flex-start;
    color: rgb(255 20 193);
    display: flex;
    justify-content : space-evenly;

    .div-hs {
      text-align: left;
      width: 60%;
   }

    img {
      border-radius: 50px 3px;
      border: 3px solid rgb(60 237 230);
      width: 20em;
    }
  }

  @media (min-width: 768px) {
    width: 80%;

    .div-header {
      flex-direction: row;

      img {
        margin-left: 3rem;
      }
    }
  }
`;
