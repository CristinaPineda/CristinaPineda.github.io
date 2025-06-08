import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  flex-direction: column;
  margin: 4rem auto;
  width: 90%;
  align-items: flex-start;
  
  .div-header {
    flex-wrap: wrap;
    align-items: flex-start;
    color: rgb(255 20 193);
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;
    align-items: center;

    .div-hs {
      text-align: left;
      width: 90%;

      h3 {
        text-align: center;
      }

      h1 {
        text-align: center;
      }
    }

    img {
      border-radius: 50px 3px;
      border: 3px solid rgb(60 237 230);
      width: 9em;
    }
  }

  @media (min-width: 768px) {
    width: 70%;

    .div-header {


      img {

      }
    }
  }
`;
