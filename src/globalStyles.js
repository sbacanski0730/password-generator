import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: 'Roboto Mono', monospace;
    }

    a,button,input{
        font-family: inherit;
    }
`;

export default GlobalStyles;
