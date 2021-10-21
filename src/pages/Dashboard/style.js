import styled from "styled-components";

export const Container = styled.div`
  width: 95vw;
  margin: 0 auto;
  padding: 80px 0;
  max-width: 750px;


  @media screen and (min-width: 768px) {
    padding: 0px 0px 0px 105px;
    margin: 0 160px;
    display: flex;
    width: 750px;
    flex-direction: column;
    align-items: left;
  }

  h1 {
    margin-bottom: 20px;
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
  margin-bottom: 50px;
  padding: 1px;
  width: 185px;
  height: 50px;
  font-weight: 300;
  strong{
    font-weight: 500;
  }
`;

export const Box = styled.div`
  display: flex;
  padding: 5px;
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
