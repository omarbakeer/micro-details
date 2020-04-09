import styled from 'styled-components'

export const Container = styled.div`
  display:block;
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
  width: 30%;

`
export const ParagraphContainer = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  margin-left: 20px;
  padding: 10px;
  width: 40%;
  height: 70px;
  ${({ theme }) => theme.media.tablet`
  height: 150px;
`}
  ${({ theme }) => theme.media.phone`
  width: 80%;
  height: 40px;

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
