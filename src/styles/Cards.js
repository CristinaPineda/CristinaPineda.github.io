import styled from "styled-components";

const Cards = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  width: 80%;

  .card-project {
    align-items: center;
    background-color: lavender;
    border: 5px solid rgb(60 237 230);
    border-radius: 2px 50px;
    color: #02142b;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 15px;
    margin: 30px;
    width: 250px;

    p {
      color: darkgreen;
      font-weight: 600;
    }

    a {
      color: #02142b;
      text-decoration: none;
    }
  }

  .card-project:hover {
    border: 5px solid #02142b;
    box-shadow: cornflowerblue 0.2em 0.2em 0.4em;
  }
`;

export default Cards;