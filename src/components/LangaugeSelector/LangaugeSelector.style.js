import styled from 'styled-components'

export const ButtonContainer = styled.div`
  position: absolute;
  right: 5px;
  top: 30px;
  background-color: #000;
  color: #fff;
  z-index: 2;
  cursor: pointer;
  display: flex;
  align-items: center;
  ${({ isMobile, theme }) => !isMobile && theme.media.phone`
    display: none;
  `}
  ${({ isMobile, theme }) => isMobile && theme.media.desktop`
    display: none;
  `}
  ${({ isMobile, theme }) => isMobile && theme.media.tablet`
    display: none;
  `}
  ${({ isMobile, theme }) => isMobile && theme.media.phone`
    top: 3px;
    right: 0;
  `}
`

export const Flag = styled.img`
  margin-right: 0;
  width: 40px;
  ${({ theme }) => theme.media.phone`
    width: 34px;
  `}
`

export const Button = styled.span`
  font-size: 12px;
  text-align: center;
  width: 42px;
  font-family: ${({ theme }) => theme.direction === 'rtl' ? 'Qanelas' : 'TheSansArabic'};
  ${({ isMobile, theme }) => isMobile && theme.media.phone`
    font-size: 12px;
    width: 40px;
  `}
`
