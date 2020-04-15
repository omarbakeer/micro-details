import styled, { keyframes } from 'styled-components'

const display = keyframes`
  from {
    opacity: 0.75;
  }
  to {
    opacity: 0;
  }
  `

export const ClientsContainer = styled.div`
  display: block;
  text-align: center;
  margin: auto;
`
export const ClientLogo = styled.img`
  margin: 10px;
  width: 85px;
  padding: 10px;
  ${({ theme }) => theme.media.phone`
  width: 60px;
`}
`
export const ImageWrapper = styled.div`
  width: 20%;
  ${({ theme }) => theme.media.phone`
  width : 25%;

`}
  ${({ theme }) => theme.media.phone`
  width : 33%;
`}
`
export const Button = styled.div`
  height: 20px;
  margin: auto 0;
  ${({ theme }) => theme.media.phone`
  width : 15px;
  display:none;
`}
`

export const Container = styled.div`
  display: flex;
`
export const ItemIndicator = styled.li`
  box-sizing: content-box;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: red;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.black : theme.colors.lightGray};
  background-clip: padding-box;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  transition: opacity 0.6s ease;
`
export const ItemIndicatorList = styled.ul`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    margin:auto;
    z-index: 15;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    padding-left: 0;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
}

`
