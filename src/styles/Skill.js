import styled from "styled-components";

export const Skill = styled.div`
  display: flex;
  width: 70%;
  margin: auto;

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    justify-content: center;


    li {
      list-style: none;
      margin: 10px;
      color: white;
    }
  }

  @media (min-width: 768px) {
    justify-content: center;
  }

}
`