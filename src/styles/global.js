import { createGlobalStyle } from "styled-components";

export const px2vw = (size, width = 1440) => `${(size / width) * 100}vw`;

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      font-size: ${px2vw(24)};

      @media (min-width: 768px) {
        font-size: ${px2vw(1)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(1)};
      }
    }
`;

export default Global;
