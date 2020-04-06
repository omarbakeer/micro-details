import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
      margin: 0;
      overflow: hidden;
      ${({ theme }) => theme.media.phone`
        overflow: unset;
      `}
      font-family: Qanelas;
  }
`;

export const Main = styled.main`
  width: 100vw;
  height: calc(100vh - 150px);
  display: flex;
  flex-direction: row;
  ${({ theme }) => theme.media.phone`
    flex-direction: column;
    height: 100vh
  `}
`;
