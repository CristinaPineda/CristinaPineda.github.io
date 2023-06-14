import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  flex-direction: column;
  margin: 2rem auto 0;
  width: 60%;

  .div-header {
    align-items: center;
    color: #FF1493;
    display: flex;
    flex-direction: column;

    img {
      border-radius: 2px 50px;
      border: 3px solid #eddb3c;
      width: 8em;
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
