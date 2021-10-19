import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    :root {
        --background-color: #F2F9FE;
    }
    body{
        background-color: #ffffff;
        font-family: 'Poppins', sans-serif;
        min-width: 320px;
        width: 100%;
        height: 100%;
        font-family: "Poppins", sans-serif;
    }
    h1,h2,h3,h4,h5{
        font-family: 'Montserrat', sans-serif;
    }
    body, input, button {
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
    }
    button{
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
    ul{
        list-style: none;
    }

`;
