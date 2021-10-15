import styled from "styled-components"

export const MenuContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 40px;
  padding: 0px 20px 5px;

  Button {
    position: relative;
    top: -5px;
    transform: translateX(-50%);
    margin: 0;
    font-size: 28px;
  }
  svg {
    margin: 0px 10px 0px 10px;
  }
`
