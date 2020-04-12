import styled from 'styled-components'

export const Container = styled.div`
  display: block;
  ${({ theme }) => theme.media.phone`
    height: 300px;
  `}
`

export const Row = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
`

export const ServiceBlock = styled.div`
  width: 33%;
  margin: 0;
  padding: 50px 0px;
  display: inline-block;
  background: ${({ theme, selected }) => selected && theme.colors.primary};
  border-bottom: ${({ theme, lastRow }) =>
    !lastRow && `solid 2px${theme.colors.primary}`};
  border-right: ${({ theme, lastEelement }) =>
    theme.direction === 'ltr' &&
    !lastEelement &&
    `solid 2px${theme.colors.primary}`};
  border-left: ${({ theme, lastEelement }) =>
    theme.direction === 'rtl' &&
    !lastEelement &&
    `solid 2px${theme.colors.primary}`};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  &&:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors['black']};
  }
  ${({ theme }) => theme.media.phone`
  width: 50%;
  padding: 75px 0px;
  `}
`

export const Service = styled.span`
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black};
  &&:hover {
  }
  ${({ theme }) => theme.media.tablet`
  font-size: 14px;
  `}
  ${({ theme }) => theme.media.phone`
  font-size: 12px;
  `}
`

export const Wrapper = styled.div`
  display: block;
`
