import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #3b74f2;
    --green: #217a00;
    --middle-green: #33cc95;
    --light-green: #c7ffa6;
    --grey: #a5a5a5;
    --white: #ffffff;

    --text-title: #000000;
    --text-body: #000000;

    --divider: #c4c4c4;
    --background: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }

    scroll-behavior: smooth;
    height: 100%;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 0;
    position: relative;
    border-radius: 0.75rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`