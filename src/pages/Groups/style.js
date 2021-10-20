import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  margin: 0 auto 100px;

  @media screen and (min-width: 768px) {
    width: 750px;
    margin: 0 250px;
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
  margin-bottom: 20px;
  width: 185px;
  font-weight: 300;
  strong{
    font-weight: 500;
  }

  @media screen and (min-width: 768px) {
    margin-top: 20px;
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

export const SelectDiv = styled.div`
  display: flex;
  select {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      linear-gradient(274.42deg, #495c89 0%, #3c60b3 67.41%, #967aa1 124.45%);
    color: #fff;
    padding: 5px 10px;
    border: none;
    border-radius: 20px;
    appearance: none;
text-align: center;
    option {
      background: #495c89;
      border-radius: 20px
    }
  }
`;