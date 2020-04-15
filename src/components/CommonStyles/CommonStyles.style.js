import styled, { css } from 'styled-components'

export const mobileCenteredText = css`
  ${({ theme }) => theme.media.phone`
text-align: center;

`}
`
export const Section = styled.section`
  width: 3.5vw;
  position: relative;
  height: 100%;
  transition: all 0.8s ease;
  ${({ active }) => active && 'width: 86vw;'}
  display: flex;
  ${({ theme, active }) => theme.media.phone`
      width: 100%;
      height: 5vh;
      flex-direction: column;
      transition: all 0.8s ease;
      ${active && 'height: 80vh;'}
    `}
`

export const SectionSidebar = styled.div`
  width: 3.5vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background: ${({ theme, primaryColor }) =>
    !primaryColor && theme.colors.black};
  ${({ theme }) => theme.media.phone`
    width: 100%;
    height: 5vh;
    flex-direction: row;
    justify-content: center;
  `}
`

export const SidebarName = styled.div`
  transform: translateX(-100%) rotate(-90deg);
  transform-origin: right top;
  position: absolute;
  top: calc(100vh - 500px);
  width: 350px;
  text-align: center;
  height: 3.5vw;
  line-height: 3.5vw;
  color: ${({ theme, primaryColor }) =>
    primaryColor ? theme.colors.primary : theme.colors.black};
  background: ${({ theme, primaryColor }) =>
    primaryColor ? theme.colors.black : theme.colors.primary};
  font-size: 36px;
  text-transform: uppercase;
  ${({ theme }) => theme.media.phone`
      position: relative;
      transform: none;
      transform-origin: unset;
      top: unset;
      width: 60%;
      text-align: center;
      font-size: 24px;
      padding: 0;
      margin: auto;
      position: unset;
      height: 100%;
      line-height: 5vh;
  }
    `}
`

export const ContentContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  width: 82.5vw;
  height: 100%;
  background: white;
  padding: ${({ padding }) => padding || '80px 80px'};
  position: relative;
  box-sizing: border-box;
  ${({ theme }) =>
    theme.direction === 'rtl' &&
    `
  direction:rtl;
 `}
  ${({ theme }) => theme.media.phone`
      width: 100%;
      height: calc(100% - calc(100vh / 20));
      position: unset;
      padding: 5px;
    `}
`

export const Logo = styled.img`
  height: 145px;
  ${({ theme }) => theme.media.phone`
    height: 120px;
  `}
`

export const LogoContainer = styled.div`
  top: 0;
  left: 3.6%;
  position: absolute;
  z-index: 1;
  ${({ theme }) => theme.media.phone`
    position: fixed;
  `}
`

export const Text = styled.span`
  display:block;
  color: ${({ theme, color }) => theme.colors[color || 'black']};
  ${({ underLine }) => underLine && 'text-decoration: underline;'}
  max-width: ${({ maxWidth }) => maxWidth};
  ${({ extendStyle }) => extendStyle || ''}
  ${({ title, theme }) =>
    title &&
    `
    font-size: 32px;
    margin:30px 0;
    font-weight:500;
    text-transform:capitalize;
    ${
      theme.direction === 'ltr' &&
      `
      -webkit-letter-spacing: 12px;
      -moz-letter-spacing: 12px;
      -ms-letter-spacing: 12px;
      letter-spacing: 12px;
    `
    }
  `}
  ${({ secondryTitle, theme }) =>
    secondryTitle &&
    `
    font-size: 20px;
    font-weight:400;
    text-transform: uppercase;
    ${
      theme.direction === 'ltr' &&
      `
      -webkit-letter-spacing: 5px;
      -moz-letter-spacing: 5px;
      -ms-letter-spacing: 5px;
      letter-spacing: 5px;
    `
    }
  `}
  ${({ subTitle, theme }) =>
    subTitle &&
    `  
    font-size: 18px;
    font-weight:400;
    margin : 10px 0px;
    ${
      theme.direction === 'ltr' &&
      `
      -webkit-letter-spacing: 3px;
      -moz-letter-spacing: 3px;
      -ms-letter-spacing: 3px;
      letter-spacing: 3px;
    `
    }
 `}
 ${({ paragraph }) =>
   paragraph &&
   `  
    font-size: 16px;
    margin: 10px 0px;
  `}

  ${({ theme }) => theme.media.phone`
    ${(title) =>
      title &&
      `
      ${
        theme.direction === 'ltr' &&
        `
        -webkit-letter-spacing: 5px;
        -moz-letter-spacing: 5px;
        -ms-letter-spacing: 5px;
        letter-spacing: 5px;
      `
      }
    `}
    ${(subTitle) =>
      subTitle &&
      `
      font-size: 14px;
      ${
        theme.direction === 'ltr' &&
        `
        -webkit-letter-spacing: 2px;
        -moz-letter-spacing: 2px;
        -ms-letter-spacing: 2px;
        letter-spacing: 2px;
      `
      }
    `}
    ${(paragraph) =>
      paragraph &&
      `
        font-size: 14px;
        ${
          theme.direction === 'ltr' &&
          `
          -webkit-letter-spacing: 2px;
          -moz-letter-spacing: 2px;
          -ms-letter-spacing: 2px;
          letter-spacing: 2px;
        `
        }
      `}
    ${({ secondryTitle }) =>
      secondryTitle &&
      `  
      font-size: 14px;
      ${
        theme.direction === 'ltr' &&
        `
        -webkit-letter-spacing: 3px;
        -moz-letter-spacing: 3px;
        -ms-letter-spacing: 3px;
        letter-spacing: 3px;
      `
      }
    `}
  `}
`

export const Icon = styled.span`
  font-family: icofont;
  margin: 0 5px;
  &:before {
    ${({ theme, dontFlipOnRtl }) =>
      !dontFlipOnRtl &&
      theme.direction === 'rtl' &&
      `
      transform: scaleX(-1);
    `}
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
