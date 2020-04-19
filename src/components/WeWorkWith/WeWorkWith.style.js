import styled from 'styled-components'

export const ClientsContainer = styled.div`
  display: block;
  text-align: center;
  margin: auto;
`
export const ClientLogo = styled.img`
  margin: 10px;
  width: 85px;
  padding: 10px;
  vertical-align: middle;
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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Row = styled.div`
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
    selected ? theme.colors.black : '#c6c6c6'};
  background-clip: padding-box;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  transition: opacity 0.6s ease;
`
export const ItemIndicatorList = styled.ul`
  margin: auto;
  z-index: 15;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  padding-left: 0;
  margin-right: 15%;
  margin-left: 15%;
  list-style: none;
`
