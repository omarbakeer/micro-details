import styled from 'styled-components'

export const Container = styled.div`
  display: block;
  padding: 20px;
  ${({ theme }) => theme.media.phone`
    height: 300px;
  `}
`

export const Illustration = styled.img`
  ${({ target }) =>
    target &&
    `height:80px;
  `}
  ${({ vision }) =>
    vision &&
    `height:80px;
    `}
    ${({ theme }) => theme.media.phone`
      height:50px;

`}
`

export const MissionAndVisionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin : 20px; 0px;
  position: relative;
  ${({ theme }) => theme.media.phone`
  display: block;
`}
`

export const TitleContainer = styled.div`
  background: ${({ theme }) => theme.colors.black};
  padding: 10px 10px 0 10px;
  width: 35%;
`
export const ParagraphContainer = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  margin-left: 20px;
  padding: 10px;
  width: 250px;
  ${({ theme }) =>
    theme.direction === 'rtl'
      ? `
  height: 150px;
`: 'height:100px'}
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
  font-size: 32px;
  margin: 40px 0;
  font-weight: 700;
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
  ${({ theme }) => theme.media.phone`
  font-size:18px;
  text-align:center;
  margin: 20px 0;

`}
`
