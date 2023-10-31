import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Nunito Sans', sans-serif;;
    font-size: 24px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  html {
    height: 100%;
  }
`;

export const FurnituresMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Loading = styled.div`
  display: flex;
  background-color: #ff385c;
  justify-content: center;
  color: white;
  font-size: 32px;
  font-weight: bolder;
`;
