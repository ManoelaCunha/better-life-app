import styled from "styled-components";
import App from "../../App";

export const MenuContainer = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  font-size: 40px;
  background-color: #f2f9fe;
  box-shadow: -3px -4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1;

  .active {
    @media (max-width: 768px) {
      display: none;
    }
  }
  p {
    display: none;
  }
  Button {
    position: relative;
    top: -5px;
    transform: translateX(-50%);
    margin: 0;
    font-size: 28px;
  }
  svg {
    width: 40px;
    position: relative;
    top: 5px;
    margin: 0px 10px 0px 10px;
  }
  @media only screen and (max-width: 374px) {
    svg {
      width: 35px;
    }
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ecf0f1;
    position: fixed;
    top: 0;
    float: left;
    width: 200px;
    height: 100%;
    box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.5);

    Button {
      display: none;
    }

    span {
      display: flex;
      cursor: pointer;
    }
    p {
      display: flex;
      font-size: 14px;
      font-weight: 500;
      color: #444444;
      position: relative;
      top: 15px;
    }
    svg {
      position: relative;
      left: -10px;
    }
  }
`;

export const LogoutContainer = styled.div`
  margin-right: 20px;
  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 20px;

    svg {
      position: relative;
      left: -15px;
    }
    p {
      position: relative;
      left: -20px;
    }
  }
`;
export const IconsContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 35%;

  svg {
    width: 25px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100px;
    left: -5px;
    svg {
      width: 30px;
    }
    span {
      margin: 35px 0;

      img {
        width: 30px;
      }
    }
    p {
      position: relative;
      left: -5px;
    }
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: ${(modalIsOpen) => modalIsOpen ? -1 : 1};

  img {
    display: block;
    width: 200px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    background-color: transparent;
    width: fit-content;
    position: fixed;
    top: 10px;
    z-index: 1;
    img {
      display: block;
      width: 150px;
      margin: 0 auto;
    }
  }
`;
