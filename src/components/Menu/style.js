import styled from "styled-components"
import App from "../../App"

export const MenuContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
  font-size: 40px;
  padding-bottom: 5px;

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
    width: 150px;

    Button {
      display: none;
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
  margin-right: 20px;
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
  margin-left: 20px;
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 100px;
    left: -5px;
    svg {
      width: 30px;
    }
    span {
      margin: 35px 0;
    }
    p {
      position: relative;
      left: -5px;
    }
  }
`
export const ImageContainer = styled.div`
  width: 100%;
  background-color: #f2f9fe;
  margin: 0;

  img {
    display: block;
    width: 260px;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    img {
      display: block;
      width: 150px;
      position: absolute;
      top: 10px;
      margin: 0 auto;
    }
  }
`
