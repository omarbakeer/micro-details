import styled from 'styled-components'

export const Container = styled.div`
  display: block;
  ${({ theme }) => theme.media.phone`
    height: 300px;
  `}
`
export const Title = styled.span`
  font-size: 32px;
  margin: 40px 0;
  display: block;
  ${({ theme }) =>
    theme.direction === 'ltr' &&
    `
  -webkit-letter-spacing: 12px;
  -moz-letter-spacing: 12px;
  -ms-letter-spacing: 12px;
  letter-spacing: 12px;
`}
  ${({ theme }) => theme.media.phone`
    display: none;
`}
`