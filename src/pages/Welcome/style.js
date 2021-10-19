import styled from "styled-components";

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
 h2 {
     font-weight: 400;
     font-size: 20px;
 }
  img {
    max-width: 350px;
    margin-bottom: 5px;
  }
  span {
    font-size: 13px;
    color: #3b3b3b;
    width: 250px;
    margin-bottom: 10px;
    opacity: 0.8;
  }
  div {
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex: 1;
      display: flex;
      flex-direction: row;
      margin-top: 10px;
    }
    button {
      margin: 0 10px;
    }
    span {
      margin-bottom: 2rem;
      font-size: 10px;
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
