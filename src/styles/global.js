import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    :root {
        --background-color: #ffff;
    }
    body{
        background-color: var(--background-color);
        font-family: 'Poppins', sans-serif;
        min-width: 320px;
        width: 100%;
        height: 100%;
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
