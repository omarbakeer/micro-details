import styled from 'styled-components';

export const Footer = styled.footer`
  height: 150px;
  width: 100vw;
  display: flex;
  /* grid-template-columns: 20% 20% 20% 20% 20%; */
  background: ${({ theme }) => theme.primary};
  position:fixed;

  ${({ theme }) => theme.media.phone`
    display: none;
  `}
`;

export const Filler = styled.div`
  flex: 1;
  background: ${({ color, theme }) => color || theme.primary};
`;

export const Division = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;
