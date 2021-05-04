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
    font-size: 14px
  }
  h1{color: ${({ theme }) => theme.primaryText}}

  h2{color: ${({ theme }) => theme.primaryTitle}}

  header{
    display: flex;
    padding: 0 25px;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.primaryElement};
  }

  .btn{
    color: ${({ theme }) => theme.primaryTitle};
    cursor:pointer;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid ${({ theme }) => theme.primaryElement};
    background-color: ${({ theme }) => theme.primaryElement};
    border-radius: 3px; 
  }

  .btn.secondary{
    color: ${({ theme }) => theme.secondaryText};
    border: 2px solid ${({ theme }) => theme.secondaryButton};
    background-color: ${({ theme }) => theme.secondaryButton};
  }

  
  `;
