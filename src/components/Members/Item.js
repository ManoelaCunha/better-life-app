import styled from "styled-components";
export default styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 450px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
  width: 300px;
  background-color:#dfe6e9;
 
  text-align: center;
  margin: 0 5px;
  border-radius: 5px;

  :hover{
    transition: 0.5s;
    transform: translatey(3px);
    background-color: #fefefe;
  }

  div {
   
    display: flex;
    justify-content:space-between;
    align-items: center;
    width: 40%;
  }

  h3 {
    margin-top: 20px;
    font-size: 18px;
    color: #2c3e50;
    text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
  }
  p {
    font-size: 16px;
    color: #2c3e50;
    margin-top: 20px;
    text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);
  }
  img {
    width: 50%;
    border-radius: 50%;
  }
  a:link, a:visited, a:active {
    color: #2c3e50;
  }
  svg {
    font-size: 40px;
  }
  a:hover{
    transition: 0.5s;
    
    transform: translateY(-5px)
  }
`;
