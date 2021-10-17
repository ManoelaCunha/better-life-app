import { style } from "@material-ui/system";
import styled from "styled-components"

export const CardContainer = styled.div`
  margin: 10px auto;
  width: 300px;
  background: linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 15px;
  font-size: 12px;
  display:flex;
  p { 
      margin: 5px 0 0 20px;
  }
  @media screen and (min-width: 768px) {
    width: 600px; 
    font-size: 18px;
  }

`;

export const TextContainer = styled.div`
    width:200px;
    @media screen and (min-width: 768px) {
    width: 400px
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
