import styled from 'styled-components'

export const Container = styled.div`
  display: block;
  ${({ theme }) => theme.media.phone`
    height: 300px;
  `}
`
