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


  h2 {
    color: ${({ theme }) => theme.primaryTitle}; 
    font-size: 1.5em;
  }

  h3 {
    font-size: 1.4em;
  }

  h4 {
    font-size: 1.3em;
  }

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
    width: 280px;
    padding: 6px;
    margin-top: 8px;
    margin-right: 16px;
    border: none;
    font-size: 1.2em;
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
  
  .ais-RefinementList-item{
    margin-bottom: 3px;
  }

  .ais-RefinementList-labelText {
    margin-left: 10px;
    color: ${({ theme }) => theme.infoText};
  }
  
  .ais-RefinementList-count {
    padding: 0.1rem 0.4rem;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.infoText};
    background-color: ${({ theme }) => theme.infoElement};
    border-radius: 8px;
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
    width: 50rem;
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

  /**** GMaps
  ***/

  .ais-GeoSearch-map, .ais-GeoSearch{
    height: 100%;
  }

  .ais-GeoSearch{
    position: relative;
  }

  .ais-GeoSearch-control{
      position: absolute;
      top: 0.8rem;
      left: 3.75rem;
  }

  .ais-GeoSearch-label {
      display: block;
      padding: 0.3rem 0.5rem;
      font-size: 0.8rem;
      background-color: #fff;
      border-radius: 5px;
      transition: background-color 0.2s ease-out;
      box-shadow: rgb(0 0 0 / 10%) 0 1px 1px;
      outline: none;
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
    .filter-container {
      display: none;
    }

    .hit-container {
      font-size: 0.8em;
      width: inherit;
      max-width: 50rem;
    }

    .img-col img {
      height: 180px;
      margin-right: 20px;
    }

    input[type="search"] {
      width: 160px;
      font-size: 1em;
    }
  }

`;
