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
  // animation-name: ${display};
  // animation-duration: 2s;
  text-align:center;
`
export const ClientLogo = styled.img`
  margin: 10px;
  width: 85px;
  padding :10px;


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
export const Button =styled.div`
height:20px;
margin:auto 0;
`

export const Container =styled.div`
display:flex;

`