import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;

  }

  body {
    background-color: ${({ theme }) => theme.colors["gray-600"]};
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  a, button {
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  input {
    border: none;
  }
`;
