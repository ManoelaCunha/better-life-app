import styled from "styled-components";
import ImgHome from "../../assets/img/Vector.png";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  max-height: 150px auto;

  img {
    max-width: 300px;
    margin-bottom: 1rem;
  }
  span {
    font-size: 1rem;
    color: #8b8b8b;
    width: 300px;
  }
  div {
    display: flex;
    flex-direction: column;
    
    @media (min-width: 1100px) {
      flex: 1;
      display: flex;
      flex-direction: row;
      margin-top: 1.5rem;
    }
    button + button {
      margin-left: 1rem;
    }
    span {
      margin-bottom: 2rem;
      font-size: 2rem;
      flex-wrap: wrap;
      color: #fff;
    }
  }
`;
export const ImageHome = styled.img`
  display: none;
  @media (min-width: 1100px) {
    display: block;
    height: 50vh;
  }
`;
