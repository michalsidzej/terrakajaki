import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;900&display=swap');

  @font-face{
    font-family: 'Montserrat', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;900&display=swap');
    font-weight: 400, 600, 900;
  }
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4 {
    font-weight: 600;
  }
  
  button, textarea, input, select  {
    font: inherit;
  }

  ul[class],
  ol[class] {
    padding: 0;
    list-style: none;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  a:not([class]) {
  text-decoration-skip-ink: auto;
  }
  img {
  max-width: 100%;
  display: block;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }
`;

export default GlobalStyle;
