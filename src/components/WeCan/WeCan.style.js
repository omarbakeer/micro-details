import styled from 'styled-components'

export const WeCanContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 77%;
  ${({ theme }) => theme.media.phone`
    width: 95%;
  `}
`

export const WeCanItem = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 30%;
  ${({ theme }) => theme.direction === 'ltr' ? 'margin-right: 3.3%;' : 'margin-left: 3.3%;'}
  margin-bottom: 10px;
  ${({ theme }) => theme.media.tablet`
  width: 35%;
  `}
  ${({ theme }) => theme.media.phone`
  width: 50%;
  `}
`

export const WeCanTitleWithIcon = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 15px;
  height: 35px;
  ${({ theme }) => theme.media.phone`
    text-align:center;
    margin-bottom: 16px;
  `}
`

export const Title = styled.h5`
  margin: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  font-weight: 300;
  line-height: 1;
  text-transform: uppercase;
  ${({ theme }) => theme.direction === 'ltr' && `
    -webkit-letter-spacing: 3px;
    -moz-letter-spacing: 3px;
    -ms-letter-spacing: 3px;
    letter-spacing: 3px;
  `}
`

export const ImgIcon = styled.img`
  width: ${({ width }) => width || 25}px;
  ${({ theme }) => theme.direction === 'ltr' ? 'margin-right: 10px;' : 'margin-left: 10px;'}
`

export const ContentText = styled.p`
  margin: 0;
  font-size: 15px;
  /* line-height: 1.4; */
  ${({ theme }) => theme.media.tablet`
  font-size: 14px;
  `}
  ${({ theme }) => theme.media.phone`
  font-size: 14px;
  `}
`
