import styled, { keyframes } from "styled-components";

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

  .signUpTitle {
    margin: 20px 0 45px;
  }

  .buttonContainer {
    padding-top: 15px;
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
    background: linear-gradient(274.42deg, #92a3fd 0%, #9dceff 124.45%);
    height: 900px;
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
    margin: 50px 0;
    width: 340px;
    text-align: center;
    background: var(--whiteCity);
    padding: 40px;
    border-radius: 30px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);

    p {
      font-size: 12px;
    }
  }
  img {
    margin-top: -25px;
    width: 250px;
    opacity: 0.8;
  }
`;
