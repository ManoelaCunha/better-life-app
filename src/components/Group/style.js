import styled from "styled-components";

export const Card = styled.div`
  width: 300px;
  margin: 20px auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: linear-gradient(
    274.42deg,
    rgba(146, 163, 253, 0.2) 0%,
    rgba(157, 206, 255, 0.2) 124.45%
  );
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 750px;
    min-height: 190px;
    margin: 20px auto;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: linear-gradient(274.42deg, #92a3fd 0%, #9dceff 124.45%);
  }

  h2 {
    padding: 20px;
    width: 300px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 18px;
    color: #1d1617;
    line-height: 1em;
    word-wrap: break-word;

    @media screen and (min-width: 768px) {
      padding: 10px 20px;
      font-size: 36px;
      width: 600px;
      color: #ffffff;
    }
  }

  p {
    padding: 5px 20px;
    width: 300px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #7b6f72;
    line-height: 1em;
    word-wrap: break-word;

    @media screen and (min-width: 768px) {
      font-size: 14px;
      width: 600px;
      color: #ffffff;
    }
  }
`;

export const Box = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    margin: 20px;
    width: 92px;
    height: 92px;
    border-radius: 100%;
    background: #ffffff;
    opacity: 0.5;
  }

  img {
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
      width: 92px;
      height: 90px;
    }
  }
`;
