import styled from "styled-components";

export const Container = styled.div`
  width: 95vw;
  margin: 0 auto;
  padding: 80px 0;
  max-width: 1200px;
  @media screen and (min-width: 768px) {
    padding: 0px 0px 0px 180px;

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
  height: 50px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonContainerDashboard = styled.div`
    display: none;
    button {
        border: none;
    }
    @media screen and (min-width: 768px) {
      display: block;
    }
`;