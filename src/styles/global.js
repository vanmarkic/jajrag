import { createGlobalStyle } from "styled-components";

export const px2vw = (size, width = 1440) => `${(size / width) * 100}vw`;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      --doc-height: 100%;
      font-size: ${px2vw(24)};

      @media (min-width: 768px) {
        font-size: ${px2vw(30)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(36)};
      }
    }
  html,
  body {
    font-family: "Open Sans";
    padding: 0;
    margin: 0;
    height: 100vh; /* fallback for Js load */
    height: var(--doc-height);
    overscroll-behavior: none; 
  }

  .image {
    /* min-width: 200px; */
    flex: 0 0 calc(50%-10px);
    /* height: 100%;
    aspect-ratio: ;
    object-fit: cover;
    */
    @media (min-aspect-ratio: 1/1) {
      flex: 0 0 calc(50%-10px);
    } 


  }
`;

export default GlobalStyle;
