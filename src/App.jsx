import AppRoutes from "./routes";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #f8f9fa;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }

  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #231F20;
    color: white;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    min-width: 140px;
  
    &:hover {
      background-color: #DED9D3;
      color: #231F20;
    }
  }

  input, textarea {
    font-family: 'Roboto', sans-serif;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  img {
    width: 90px;
    height: auto;
  }

  @media (max-width: 768px) {
    body {
      font-size: 0.75rem;
    }
    
    button {
      padding: 0.5rem 0.75rem;
      font-size: 0.75rem;
      min-width: 90px;
    }
  }

`;


const App = () => (
  <div>
    <GlobalStyle />
    <AppRoutes />
  </div>
);

export default App;