import { style } from "@material-ui/system";
import styled from "styled-components"

export const CardContainer = styled.div`
  margin: 10px auto;
  width: 300px;
  background: linear-gradient(274.42deg, rgba(146, 163, 253, 0.2) 0%, rgba(157, 206, 255, 0.2) 124.45%);
  border-radius: 16px;
  padding: 15px;
  font-size: 12px;
  display:flex;
  p { 
      margin: 5px 0 0 20px;
  }
`;

export const TextContainer = styled.div`
    width:200px;

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
