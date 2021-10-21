import styled from "styled-components";

export const ActivityContainer = styled.div`
  h4 {
    margin-top: 10px;
  }
  li {
    height: 80px;
  }
`;

export const CardGroupDetailBody = styled.div`
  background: linear-gradient(
    274.42deg,
    rgba(146, 163, 253, 0.2) 0%,
    rgba(157, 206, 255, 0.2) 124.45%
  );
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  border-radius: 16px;
  width: 100%;
  padding: 15px;
  p {
    margin-top: 5px;
    color: #7b6f72;
  }

  Button {
    width: 100px;
    font-size: 12px;
    margin: 0;
    height: 25px;
  }

  h3 {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  li {
    margin: 5px 0 5px 20px;
  }
  .closeActivity {
    font-size: 24px;
    float: right;
    position: relative;
    top: -30px;
    right: 30px;
    cursor: pointer;
    color: #40518c;
  }
  .alignButton {
    display:flex;
      button {
        margin-left: 5px;
      }
}

  hr {
    opacity: 0.5;
    margin: 10px 0;
  }

`;


export const GoalContainer = styled.div`
  h4 {
    margin-top: 10px;
  }
  li {
    height: 60px;
  }
`;

export const MembersContainer = styled.div`
  text-transform: capitalize;
  p {
    margin-left: 10px;
  }
`;

export const GoalContainerTitle = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  h3 {
    margin: 10px 0;
  }
`;

export const ActivityContainerTitle = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  h3 {
    margin: 10px 0;
  }
`;