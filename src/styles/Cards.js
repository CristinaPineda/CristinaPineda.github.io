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

    h2 {
      margin: 0.83em 0 0 0;
    }

    p {
      color: #0200fe;
      font-weight: 600;
    }

    a {
      color: #02142b;
      text-decoration: none;
      margin-bottom: 0.83em;
      background-color: #3eebe5;
      padding: 0.4em 0.9em;
      border-radius: 10px;
    }

    a:hover {
      color: #3eebe5;
      background-color: #0200fe;

    }
  }

  .card-project:hover {
    border: 5px solid #02142b;
    box-shadow: cornflowerblue 0.2em 0.2em 0.4em;
  }
`;

export default Cards;