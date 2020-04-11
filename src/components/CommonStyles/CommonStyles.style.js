import styled from 'styled-components'

export const Section = styled.section`
    flex: 1;
    position:relative;
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

export const DesktopRandomTextImg = styled.img`
  position: absolute;
  height: 40%;
  ${({ footer }) =>
    footer &&
    `
    height: 80%;
    bottom: 0; `}
    ${({ theme }) => theme.media.phone`
      display:none;
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
  // margin-bottom: 100px;
  white-space: nowrap;
  transform: rotate(-90deg);
  transform-origin: left top;
  color: ${({ theme, primaryColor }) =>
    primaryColor ? theme.colors.primary : theme.colors.black};
  font-size: 36px;
  text-transform: uppercase;
  ${({ theme }) => theme.media.phone`
    margin-bottom: 0;
    transform: unset;
    font-size:26px;
  `}
`

export const ContentContainer = styled.div`
  overflow: auto;
  width: calc(100% - calc(100vw / 25));
  background: white;
  padding: 80px 80px;
  position: relative;
  box-sizing: border-box;
  ${({ theme }) => theme.media.phone`
      width: 100%;
      height: calc(100% - calc(100vh / 20));
      position: unset;
      padding: 5px;
    `}
`
export const Logo = styled.img`
  height: 120px;
`

export const LogoContainer = styled.div`
  top: 0;
  left: 2%;
  position: absolute;
  ${({ theme }) => theme.media.phone`
  position: fixed;

`}
`

export const Text = styled.span`
  display:block;
  color: ${({ theme, color }) => theme.colors[color || 'black']};

  ${({ title }) =>
    title &&
    `  
    font-size: 32px;
    margin:30px 0;
    -webkit-letter-spacing: 12px;
    -moz-letter-spacing: 12px;
    -ms-letter-spacing: 12px;
    letter-spacing: 12px;
    font-weight:500;
  `}
  ${({ secondryTitle }) =>
    secondryTitle &&
    `
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

export const Icon = styled.span`
  font-family: icofont;
  margin: 0 5px;
  &:before {
    content: "\\${({ icon }) => icon || ''}";
    font-size: ${({ size }) => size || 16}px;
    color: ${({ theme, color }) => theme.colors[color || 'black']};
    /* transform: ${({ rotate, theme }) =>
      rotate && theme.direction === 'ltr' ? 'rotate(90deg)' : 'unset'}; */
    display: inline-block;
  }
  transform: ${({ flip }) => (flip && 'scaleX(-1)') || 'unset'};
  ${({ extendStyle }) => extendStyle || ''}
`

export const ShowOnDesktop = styled.div`
  ${({ theme }) => theme.media.phone`
    display: none;
`}
`
export const HideOnDeskTop = styled.div`
  ${({ theme }) => theme.media.desktop`
  display:none;
    `}
  ${({ theme }) => theme.media.tablet`
    display:none;
      `}
`
