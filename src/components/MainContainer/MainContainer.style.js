import styled, { createGlobalStyle } from 'styled-components';
import yellowBkg from 'images/yellow-bkg.png'

export const GlobalStyle = createGlobalStyle`
  html, body {
      margin: 0;
      overflow: hidden;
      font-family: Qanelas;
      background: url(${yellowBkg});
      background-size: 400px;
      ${({ theme }) => theme.media.phone`
        overflow: unset;
        background-size: 240px;
      `}
      
  }
`;

export const Main = styled.main`
  width: 100vw;
  height: calc(100vh - 150px);
  display: flex;
  flex-direction: row-reverse;
  ${({ theme }) => theme.media.phone`
    flex-direction: column;
    height: 100vh
  `}
`;
