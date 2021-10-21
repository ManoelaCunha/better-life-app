import styled from "styled-components";
export const Background = styled.div`
display: none;
  @media (min-width: 1400px) {
   position: absolute;
   display: block;
    right:0;
    top:100px;
    width: 550px;
    background: url("");
    background-size: 500px;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;

    img {
        width: 100%;
    }
  }
`;
