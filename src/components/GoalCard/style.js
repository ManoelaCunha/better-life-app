import styled from "styled-components";

export const CardContainer = styled.div`
  margin: 10px auto;
  width: 100%;
  background: linear-gradient(
    274.42deg,
    rgba(146, 163, 253, 0.2) 0%,
    rgba(157, 206, 255, 0.2) 124.45%
  );

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 15px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  p {
    margin: 5px 0 0 0px;
    color: #7b6f72;
  }
  #closeIcon {
    width: 10px;
    font-size: 20px;
    margin-right: 10px;
    margin-top: -10px;
  }
  #closeIcon:hover {
    color: #ad000d;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
    background: linear-gradient(274.42deg, #92a3fd 0%, #9dceff 124.45%);
    p {
      color: #fff;
    }
    h4 {
      color: #fff;
    }
  }
`;

export const TextContainer = styled.div`
  width: 50%;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const IconButtonContainer = styled.button`
  font-size: 20px;
  border: none;
  width: fit-content;
  height: fit-content;
  background: none;
  width: 10px;
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
      font-size: 14px;
    }
  }
`;
