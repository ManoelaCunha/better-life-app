import styled from "styled-components"

export const CardContainer = styled.div`
  margin: 10px auto;
  width: 100%;
  background: linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 15px;
  font-size: 12px;
  display:flex;
  justify-content: space-between;
  p { 
      margin: 5px 0 0 20px;
  }

`;

export const TextContainer = styled.div`
  width:50%;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const IconButtonContainer = styled.button`
  font-size:20px;
  border: none;
  width:fit-content;
  height:fit-content;
  background: none;

`;

export const ButtonContainer = styled.div`
  width: 50px;
`;

export const ChartContainer = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  span {
        position: absolute;
  }
  @media screen and (min-width: 768px) {
   span {
      font-size: 16px
   }
  }
`;
