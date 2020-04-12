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
`

export const Button = styled.span`
  font-size: 16px;
  text-align: center;
  font-weight: 700;
  padding: 5px;
  width: 50px;
  ${({ isMobile, theme }) => isMobile && theme.media.phone`
    font-size: 12px;
    padding: 5px 0;
    width: 40px;
  `}
`
