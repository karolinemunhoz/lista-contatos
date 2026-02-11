import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background: #f3f4f6;
    color: #111827;
  }

  h1 {
    text-align: center;
    font-weight: 600;
    margin-bottom: 30px;
  }

  input {
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    width: 100%;
    margin-bottom: 10px;
    font-size: 14px;
  }

  button {
    padding: 10px 16px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-weight: 500;
    transition: 0.2s;
  }

  button:hover {
    opacity: 0.85;
  }
`;
