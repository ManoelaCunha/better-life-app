import styled from "styled-components";

export const ButtonContainer = styled.div`
  margin: 10px auto;
  width: fit-content;

  button {
    width: ${(props) => (props.smaller ? "50px" : "210px")};
    height: 50px;
    border-radius: 30px;
    border: none;
    color: #ffffff;
    font-size: 18px;
    font-family: "Poppins", sans-serif;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      linear-gradient(274.42deg, #495c89 0%, #3c60b3 67.41%, #967aa1 124.45%);
    /* blue-shadow */
    box-shadow: 0px 10px 22px rgba(149, 173, 254, 0.3);
    transition: ease all 0.3s;

    &:hover {
      border-radius: 5px;
      transition: ease all 0.3s;
    }
    
  }

  @media screen and (min-width: 500px) {
    button {
      height: 50px;
      width: ${(props) => (props.smaller ? "50px" : "250px")};
    }
  }
  .disabledButton {
      width: 130px;
      height: 30px;
      background: gray;
    };

  .disabledButton:hover {
    border-radius: 30px;
    cursor: auto;
  }
`;
