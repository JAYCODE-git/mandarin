import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${normalize}

    :root {
    --color-primary: #F26E22;
    --color-dark: #767676;
    --color-light: #C4C4C4;
    --color-white: #fff;
    --color-black: #000;

    --font-size-micro: 0.75rem;
    --font-size-xxs: 1rem;
    --font-size-xs: 1.125rem;
    --font-size-s: 1.375rem;
    --font-size-m: 1.5rem;
    --font-size-l: 1.875rem;
    --font-size-xl: 2.25rem;
    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    li {
    list-style: none;
    }

    a {
    text-decoration: none;
    }

    h1 {
        margin: 0;
    }

    button {
    cursor: pointer;
    font:inherit;
    }

    input:-webkit-autofill { -webkit-box-shadow: 0 0 0 30px #fff inset ; -webkit-text-fill-color: #000; }
    input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active { transition: background-color 5000s ease-in-out 0s; }
`

export default GlobalStyle;