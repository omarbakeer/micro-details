import styled, { css } from 'styled-components'

export const extendIcon = css`
  margin: 0 25px;
  ${({ theme }) => theme.media.phone`
    font-size: 50px;
  `}
`

export const extendText = css`
  margin: 10px 0 25px;
  ${({ theme }) => theme.media.phone`
    ${theme.direction === 'ltr' && `
      -webkit-letter-spacing: 2px;
      -moz-letter-spacing: 2px;
      -ms-letter-spacing: 2px;
      letter-spacing: 2px;
    `}
  `}
`

export const extendTextZeroMargins = css`
  margin: 0;
`

export const marginToAlignText = css`
  margin: 0 20px;
`

export const Container = styled.div`
  display: block;
  /* padding: 20px; */
  ${({ theme }) => theme.media.phone`
    width: 95%;
    margin: 0 auto;
  `}
`

export const MissionAndVisionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  position: relative;
  ${({ theme }) => theme.media.phone`
  display: block;
`}
`

export const TitleContainer = styled.div`
  background: ${({ theme }) => theme.colors.black};
  padding: 10px 10px 0 10px;
  width: 50%;
  display: flex;
  /* justify-content: center; */
  ${({ theme }) => theme.media.phone`
      width: 30%;
  `}
`
export const ParagraphContainer = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  ${({ theme }) =>
    theme.direction === 'ltr' ? `margin-left: 20px;` : `margin-right: 20px;`}
  ${({ theme }) => theme.direction === 'rtl' && `height: 75px;`}
  padding: 10px;
  width: 300px;

  ${({ theme }) => theme.media.tablet`
`}
  ${({ theme }) => theme.media.phone`
  width: 80%;
  height: auto;

`}
`
export const Wrapper = styled.div`
  display: block;
  ${({ target }) =>
    target &&
    `height:80px;
`}
  ${({ vision }) =>
    vision &&
    `height:110px;
`}
`
export const Title = styled.span`
  text-transform: capitalize;
  display: block;
  ${({ theme }) =>
    theme.direction === 'ltr' &&
    `
    -webkit-letter-spacing: 12px;
    -moz-letter-spacing: 12px;
    -ms-letter-spacing: 12px;
    letter-spacing: 12px;
    `}
    ${({ secondry, theme }) =>
      secondry
        ? `
      font-size: 25px;
      margin: 40px 0 25px;
      ${
        theme.direction === 'ltr' &&
        `-webkit-letter-spacing: 5px;
    -moz-letter-spacing: 5px;
    -ms-letter-spacing: 5px;
    letter-spacing: 5px;`
      }
    `
        : `
      font-size: 35px;
      margin: 40px 0 45px;
    `}
  ${({ theme }) => theme.media.phone`
    font-size: 25px;
    text-align: center;
    margin: 60px 0 20px;

    ${theme.direction === 'ltr' && `
      -webkit-letter-spacing: 5px;
      -moz-letter-spacing: 5px;
      -ms-letter-spacing: 5px;
      letter-spacing: 5px;
    `}

  `}
  ${({ theme, secondry }) => secondry && theme.media.phone`
    font-size: 20px;
    text-align: center;
    margin: 45px 0 20px;
  `}
`

export const SpecialStyle = styled.span`
  ${({ bold }) => bold && 'font-weight: 500;'}
  ${({ vBold }) => vBold && 'font-weight: 600;'}
  ${({ italic }) => italic && 'font-style: italic;'}
  ${({ uppercase }) => uppercase && 'text-transform:uppercase;'}
  ${({ theme, arabic }) => theme.direction === 'rtl' && arabic && `
    display:block;
    font-size: 16px;
    margin: 10px 0px;
    font-weight: unset;
    font-weight: unset;
    font-style: unset;
    text-transform: unset;
  `}
`

export const lineHeightAndLetterSpacing = css`
  ${({ theme }) => theme.direction === 'ltr' && theme.media.phone`
    line-height: 1.3;
    -webkit-letter-spacing: 0;
    -moz-letter-spacing: 0;
    -ms-letter-spacing: 0;
    letter-spacing: 0;
  `}
`