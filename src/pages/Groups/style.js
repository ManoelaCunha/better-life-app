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
  margin-top: 20px;
  width: 185px;
  height: 100px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
