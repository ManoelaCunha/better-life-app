import styled from "styled-components"

export const ButtonContainer = styled.div`
  margin: 10px auto;
  width: fit-content;

  button {
    width: 230px;
    height: 50px;
    border-radius: 30px;
    border: none;
    color: #ffffff;
    text-transform: capitalize;
    font-size: 18px;
    font-family: "Poppins", sans-serif;
    background: rgb(21, 48, 110);
    background: -moz-linear-gradient(180deg, rgba(21, 48, 110, 1) 27%, rgba(32, 58, 119, 1) 57%, rgba(41, 77, 159, 1) 84%);
    background: -webkit-linear-gradient(180deg, rgba(21, 48, 110, 1) 27%, rgba(32, 58, 119, 1) 57%, rgba(41, 77, 159, 1) 84%);
    background: linear-gradient(180deg, rgba(21, 48, 110, 1) 27%, rgba(32, 58, 119, 1) 57%, rgba(41, 77, 159, 1) 84%);
    transition: ease all 0.3s;

    &:hover {
      border-radius: 5px;
      transition: ease all 0.3s;
    }
  }

  @media screen and (min-width: 500px) {
    button {
      width: 280px;
    }
  }
`
