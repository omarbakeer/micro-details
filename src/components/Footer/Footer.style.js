import styled, { css } from 'styled-components';

export const extendIcon = css`
  margin: 0 5px 0 0;
`;

export const Footer = styled.footer`
/* TODO height: 160px */
  height: 150px;
  width: 100vw;
  display: flex;
  position:fixed;
  direction: ${({ theme }) => theme.direction};
  flex-direction: ${({ theme }) => theme.direction === 'ltr' ? 'row' : 'row-reverse'};
  ${({ theme }) => theme.media.phone`
    display: none;
  `}
`;

export const Filler = styled.div`
  width: 3.5vw;
  background: ${({ color, theme }) => color ? theme.colors[color] : 'transparent'};
  position:relative;
`;

export const Division = styled.div`
  flex: ${({ flex }) => flex || 5};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 0;
  background: ${({ theme }) => theme.colors.primary};
  ${({ SocialDivision, theme }) => SocialDivision && theme.direction === 'ltr' ? `
    align-items: flex-end;
  ` : `
    align-items: flex-start;
  `}
`;

export const TitleWithIcon = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin-bottom: ${({ mb }) => mb || 10}px;
`;

export const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

export const Address = styled.div`
  ${({ theme }) => theme.direction === 'ltr' ? 'padding-left: 25px;' : 'padding-right: 25px;'}
  width: 90%;
  box-sizing: border-box;
  font-size: 14px;
`;

export const Link = styled.a`
  font-size: 14px;
  direction: ltr;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: underline;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  margin: ${({ theme }) => theme.direction === 'ltr' ? '0 20px 16px 0' : '0 25px 16px 0'};
`;

export const SocialMediaLink = styled.a`
  margin: 0 5px;
`;

export const CopyRights = styled.p`
  margin: 0 30px 0 0;
  font-size: 14px;
`;