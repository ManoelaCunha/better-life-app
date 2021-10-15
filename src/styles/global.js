import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body{
        min-width: 320px;
        width: 100%;
        height: 100%;
        font-family: "Poppins", sans-serif;
    }
    h1,h2,h3,h4,h5{
        font-family: 'Montserrat', sans-serif;
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

`
