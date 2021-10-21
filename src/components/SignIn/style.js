import styled, { keyframes } from "styled-components";
import LoginImg from "../../assets/img/loginImg.svg";
export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  overflow: hidden;
`;
export const Background = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    background: url(${LoginImg});
    background-size: auto;
    /* background-color: #72a1f9; */
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 700px;
`;
const leftAnimation = keyframes`
from {
        opacity: 0;
        transform: translateX(500px);
    }
    to {
        opacity: 1;
        transform: translateX(0px)
    }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${leftAnimation} 1.5s;
  form {
    margin: 100px 0;
    width: 340px;
    text-align: center;
    background: var(--white);
    padding: 40px;
    border-radius: 30px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
    button {
      margin: 20px auto;
    }
    p {
      margin-top: 25px;
      font-size: 12px;
    }
    h2 {
      margin-top: -15px;
      margin-bottom: 10px;
      font-size: 16px;
      font-weight: 300;
      span {
        font-weight: 500;
      }
    }
  }
  img {
    margin-top: 25px;
    margin-bottom: -55px;
    width: 250px;
    
  }
`;
