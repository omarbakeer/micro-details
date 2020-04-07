import styled from 'styled-components'

export const Section = styled.section`
    flex: 1;
    height: 100%;
    transition: flex 0.8s ease;
    ${({ active }) => active && 'flex: 25;'}
    background: ${({ color }) => color || 'black'};
    display: flex;
    ${({ theme, active }) => theme.media.phone`
      flex-direction: column;
      transition: all 0.8s ease;
      ${active && 'flex: 16;'}
    `}
`

export const SectionSidebar = styled.div`
  width: calc(100vw / 25);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
  ${({ theme }) => theme.media.phone`
    width: 100%;
    height: calc(100vh / 20);
    flex-direction: row;
    justify-content: center;
  `}
`

export const SidebarName = styled.div`
  margin-bottom: 100px;
  white-space: nowrap;
  transform: rotate(-90deg);
  transform-origin: left top;
  color: ${({ theme, primaryColor }) =>
    primaryColor ? theme.primary : 'black'};
  font-size: 36px;
  text-transform: uppercase;
  ${({ theme }) => theme.media.phone`
    margin-bottom: 0;
    transform: unset;
    font-size:26px;
  `}
`

export const ContentContainer = styled.div`
  overflow:auto;
  width: calc(100% - calc(100vw / 25));
  background: white;
  ${({ theme }) => theme.media.phone`
      width: 100%;
      height: calc(100% - calc(100vh / 20));
    `}
  padding: 50px;
`
export const Logo = styled.img``

export const LogoContainer = styled.div``

export const Text = styled.span`
  display:block;
  ${({ title }) =>
    title &&
    `  
    font-size: 32px;
    margin:30px 0;
    -webkit-letter-spacing: 12px;
    -moz-letter-spacing: 12px;
    -ms-letter-spacing: 12px;
    letter-spacing: 12px;
    font-weight:700;
  `}
  ${({ secondryTitle }) =>
    secondryTitle &&
    `
    color: #fff;  
    font-size: 20px;
    -webkit-letter-spacing: 5px;
    -moz-letter-spacing: 5px;
    -ms-letter-spacing: 5px;
    letter-spacing: 5px;
    font-weight:500;
    text-transform: uppercase;

  `}
  ${({ subTitle }) =>
    subTitle &&
    `  
    font-size: 18px;
    -webkit-letter-spacing: 3px;
    -moz-letter-spacing: 3px;
    -ms-letter-spacing: 3px;
    letter-spacing: 3px;
    font-weight:400;
    margin : 10px 0px;
 `}
 ${({ paragraph }) =>
   paragraph &&
   `  
    font-size: 14px;
    margin: 10px 0px;
  `}

  ${({ theme }) => theme.media.phone`
    ${(title) =>
      title &&
      `font-size:26px;
      -webkit-letter-spacing: 5px;
      -moz-letter-spacing:5px;
      -ms-letter-spacing55px;
      letter-spacing: 5px;
    `}
  ${(subTitle) =>
    subTitle &&
    `  
    font-size: 14px;
    -webkit-letter-spacing: 2px;
    -moz-letter-spacing: 2px;
    -ms-letter-spacing: 2px;
    letter-spacing: 2px;
  `}
  ${(paragraph) =>
    paragraph &&
    `  
      font-size: 14px;
      letter-spacing: 2px;
      -webkit-letter-spacing: 2px;
      -moz-letter-spacing: 2px;
      -ms-letter-spacing: 2px;
    `}
    ${({ secondryTitle }) =>
      secondryTitle &&
      `  
    font-size: 14px;
    -webkit-letter-spacing: 3px;
    -moz-letter-spacing: 3px;
    -ms-letter-spacing: 3px;
    letter-spacing: 3px;
    font-weight:500;
  `}
`}
`
