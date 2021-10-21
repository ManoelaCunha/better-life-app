import styled from "styled-components";

export const CloseModal = styled.button`
  background-color: transparent;
  border: none;
  color: #314c88;
  font-size: 26px;
  position: absolute;
  z-index: 1;
  right: 20px;
  top: 15px;
`;

export const ModalContent = styled.div`
  padding: 30px 10px;
  h2 {
    margin-bottom: 20px;
    color: #314c88;
  }
`;
