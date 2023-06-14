import styled from "styled-components";

export const Courses = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;

  h3 {
    color: #fff;
  }

  .card {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
    width: 80%;

    .div-card {
      align-items: center;
      background-color: #fff;
      border: 3px solid #FF1493;
      border-radius: 10px;
      color: #02142b;
      height: 120px;
      margin: 5px;
      width: 180px;
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 100px;
  }
`;
