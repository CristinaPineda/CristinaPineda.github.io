import styled from "styled-components";

export const Skill = styled.div`
  display: flex;
  margin: auto;
  width: 70%;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;


    li {
      color: white;
      list-style: none;
      margin: 10px;
    }
  }

  @media (min-width: 768px) {
    justify-content: center;
  }

}
`;
