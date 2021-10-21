import styled, { keyframes } from "styled-components";
import imgSign from "../../assets/img/signupImg.svg";
export const SubContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  max-width: 700px;

  .google {
    width: 50px;
    height: 50px;
    margin: 12px;
    cursor: pointer;
  }

  .orStyle {
    margin-top: 22px;
  }

  .googleSignUp {
    margin: 10px auto 30px;
  }

  .signUpTitle {
    margin: 20px 0 45px;
  }

  .buttonContainer {
    padding: 10px;
  }

  .mobileFooter {
    margin-bottom: 25 px;
  }

  @media (min-width: 768px) {
    width: 662px;
    border-radius: 40px;
  }
`;

export const Logo = styled.div`
  .logoImage {
    display: none;
  }

  @media (min-width: 768px) {
    .logoImage {
      display: block;
      width: 250px;
      opacity: 0.8;
      margin: 0 auto;
    }
  }
`;
export const Image = styled.div`
  @media (min-width: 768px) {
    background: url(${imgSign});
    height: 900px;
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
    flex: 1;
  }
`;
export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
const leftAnimation = keyframes`
    from {
        opacity: 0;
        transform: translateX(-500px);

    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${leftAnimation} 1.5s;

  form {
    margin: 100px auto;

    margin: 50px auto;

    margin: 50px auto;

    width: 320px;
    text-align: center;
    background: var(--white);
    padding: 40px;
    border-radius: 30px;

    @media (min-width: 768px) {
      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
    }

    h2 {
      font-size: 16px;
      font-weight: 400;
      margin-bottom: -30px;
      span {
        font-weight: 600;
      }
    }
  }
  img {
    margin-top: 25px;
    margin-bottom: -55px;
    width: 250px;
  }
  p {
    font-size: 12px;
  }
`;
