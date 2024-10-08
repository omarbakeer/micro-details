import styled from 'styled-components'

export const WeAreContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 77%;
  /* margin-left: 10px; */
  ${({ theme }) => theme.media.phone`
    flex-direction: column;
    align-items: center;
  `}
`

export const WeAreItem = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 28%;
  margin-right: 5.3%;
  margin-bottom: 10px;
  ${({ theme }) => theme.media.tablet`
  width: 35%;
  `}
  ${({ theme }) => theme.media.phone`
  align-items: center;
  width: 100%;
  margin-right: 0;
  margin-bottom: 25px;
  `}
`

export const Title = styled.h5`
  width: min-content;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  font-weight: 300;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 15px;
  ${({ theme }) => theme.direction === 'ltr' && `
    -webkit-letter-spacing: 3px;
    -moz-letter-spacing: 3px;
    -ms-letter-spacing: 3px;
    letter-spacing: 3px;
  `}
`

export const ImgIcon = styled.img`
  width: ${({ size }) => size || 55}px;
  margin-bottom: 15px;
`

export const ContentText = styled.p`
  margin: 0;
  font-size: 15px;
  /* line-height: 1.4; */
  text-align: justify;
  ${({ theme }) => theme.media.tablet`
  font-size: 14px;
  `}
  ${({ theme }) => theme.media.phone`
  font-size: 14px;
  text-align: center;
  `}
`
