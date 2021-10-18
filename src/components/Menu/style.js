import styled from "styled-components"

export const MenuContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 40px;
  padding: 0px 20px 5px;

  img {
    display: none;
  }
  p {
    display: none;
  }
  Button {
    position: relative;
    top: -10px;
    transform: translateX(-50%);
    margin: 0;
    font-size: 28px;
  }
  svg {
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
    background-color: #f2f9fe;
    position: fixed;
    top: 0;
    float: left;
    width: 200px;

    Button {
      display: none;
    }
    img {
      display: block;
      width: 200px;
      position: absolute;
      top: 10px;
    }
    span {
      display: flex;
    }
    p {
      display: flex;
      font-size: 14px;
      font-weight: 500;
      color: #444444;
      position: relative;
      top: 10px;
    }
    svg {
      position: relative;
      left: -10px;
      cursor: pointer;
    }
  }
`

export const LogoutContainer = styled.div`
  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 20px;

    svg {
      position: relative;
      left: -25px;
    }
    p {
      position: relative;
      left: -20px;
      top: 10px;
    }
  }
`
export const IconsContainer = styled.div`
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 100px;
    span {
      margin: 35px 0;
    }
  }
`
