import styled from 'styled-components'

export const Container = styled.div`
  display: block;
  ${({ theme }) => theme.media.phone`
    height: 300px;
  `}
`
export const ClientsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const ClientLogo = styled.img`
  margin: 10px;
  vertical-align:middle;
`
export const ImageWrapper = styled.div`
  width : 20%;
  ${({ theme }) => theme.media.phone`
  width : 25%;

`}
  ${({ theme }) => theme.media.phone`
  width : 33%;
`}
`
