import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

const GlobalStyles = createGlobalStyle`
    ${normalize};

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body {
        background: ${({ theme }) => theme.colors.lightGrey};
        font-size: 1.6rem;
        cursor: default;
    }

    h1, h2, h3, h4, h5, h6, button {
        font-family: ${({ theme }) => theme.fonts.primary};
        font-weight: 700;
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }
`
export default GlobalStyles
