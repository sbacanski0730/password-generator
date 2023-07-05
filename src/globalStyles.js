import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;1,100;1,400;1,600&display=swap');

    html {
        box-sizing: border-box;
    }

    *,*::before,*::after{
        box-sizing: inherit;
    }

    body {
        font-family: 'Roboto Mono', monospace;
        margin: 0;
        padding: 0;
    }
    a,button{
        font-family: inherit;
    }
`;

export default GlobalStyles;
