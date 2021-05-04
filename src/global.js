import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primaryText};
  }

  body {
    background: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryText};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    text-rendering: optimizeLegibility;
  }
  h1{color: ${({ theme }) => theme.primaryElement}}

  h2{color: ${({ theme }) => theme.primaryTitle}}

  header{
    display: flex;
    justify-content: space-around;
    align-items: center;

  }

  .btn{
    color: ${({ theme }) => theme.secondaryText};
    cursor:pointer;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid ${({ theme }) => theme.secondaryButton};
    border-radius: 3px; 
  }
  `;
