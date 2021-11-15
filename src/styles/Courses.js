import styled from "styled-components";

export const Courses = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    color: #390aad;
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
      border: 3px solid #f7ab94;
      border-radius: 10px;
      color: #390aad;
      width: 180px;
      height: 120px;
      margin: 5px;
    }
  }
`;
