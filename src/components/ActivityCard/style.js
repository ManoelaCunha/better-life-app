import styled from "styled-components";

export const ListContainer = styled.li`
  .ActivityTitleContainer {
    button {
      background: #fff;
      color: #000;
      margin: 5px 0;
    }
  }

  @media screen and (min-width: 500px) {
    .ActivityTitleContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 400px;
    }
  }
`;
