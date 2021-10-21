import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    :root {
        --white: #ffffff;
        --background-color:#dfe6e9;
    }
    body{
        background-color: var(---background-color);
        font-family: 'Poppins', sans-serif;
        min-width: 320px;
        width: 100%;
        height: 100%;
        font-family: "Poppins", sans-serif;
        letter-spacing: 0.8px;
    }
    h1,h2,h3,h4,h5{
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        color: #2d3436;
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
