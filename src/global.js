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
    font-size: 14px;
    overflow-x: hidden;
  }
  h1{color: ${({ theme }) => theme.primaryText}}

  h2{color: ${({ theme }) => theme.primaryTitle}}

  .btn{
    color: ${({ theme }) => theme.primaryTitle};
    cursor:pointer;
    font-size: 1em;
    margin: 1em 0;
    padding: 0.25em 1em;
    border: 2px solid ${({ theme }) => theme.primaryElement};
    background-color: ${({ theme }) => theme.primaryElement};
    border-radius: 3px; 
  }

  .btn.secondary{
    margin: 1em;
    color: ${({ theme }) => theme.secondaryText};
    border: 2px solid ${({ theme }) => theme.secondaryButton};
    background-color: ${({ theme }) => theme.secondaryButton};
  }



  /**** Header
  ***/

   header{
    display: flex;
    padding: 0 25px;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.primaryElement};
  }

  .logo {
    margin-right: 10px;
  }

  .burger {
    display: none;
  }

  input[type="search"] {
    padding: 6px;
    margin-top: 8px;
    margin-right: 16px;
    border: none;
    font-size: 20px;
    outline: none;
    border-bottom: 1px solid rgb(168, 165, 165);
  }

  .ais-SearchBox-form {
    border-radius: 5px;
  }

  .ais-SearchBox-submit {
    background: none;
    border: none;
    cursor: pointer;
  }

  .ais-SearchBox-submitIcon {
    width: 20px;
    height: 20px;
  }

  .ais-SearchBox-reset,
  .ais-SearchBox-resetIcon {
    display: none;
  }

  /**** Main content
  ***/

  .wrapper {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    padding-top: 10px;
  }

  .results {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
  }

  .hit-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    max-width: 50rem;
    max-height: 200px;
    margin: 10px 15px;
    background: #fff;
    box-shadow: 5px 2px 12px rgb(0 0 0 / 17%);
    border-radius: 2px;
  }



  .separator {
    margin: 0 5px;
  }

  .img-col img {
    height: 200px;
  }

  .infos-col {
    flex-basis: 300px;
  }

  .infos-col > div {
    margin-bottom: 5px;
  }

  .delete-col {
    align-self: flex-end;
  }
  .pagination {
    margin: 0 auto;
    width: 250px;
  }

  .ais-Pagination .ais-Pagination-list {
    list-style-type: none;
  }

  .ais-Pagination .ais-Pagination-item {
    display: inline-block;
    border: 1px solid;
    border-radius: 4px;
    padding: 3px;
    margin: 1px;
    border-color: #ddd;
    background: transparent;
  }

  /**** Form
  ***/

  .form-add-restaurant > div {
    margin: 10px 0;
  }

  /**** Mobile
  ***/

  @media (max-width: 767px) {
    .burger {
      display: block;
    }
    .logo,
    .search-container {
      display: none;
    }
    .hit-container {
      font-size: 0.8em;
    }
    .img-col img {
      height: 180px;
      margin-right: 20px;
    }
    input[type="search"] {
      width: 140px
    }

  }

  
  `;
