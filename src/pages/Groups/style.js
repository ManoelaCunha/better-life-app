import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 750px;
    margin: 0 auto;
  }

  h1 {
    margin: 20px 5px;
    width: 164px;
    height: 18px;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    color: #000000;

    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }
`;

export const Text = styled.p`
  margin-top: 115px;
  margin-left: 10px;
  width: 185px;
  height: 80px;

  @media screen and (min-width: 768px) {
    margin-top: 20px;
    height: 100px;
  }
`;

export const Box = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
