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
  height: 100px;
  width: 33%;
  margin: 0;
  padding: 0;
  display: inline-block;
  background: ${({ theme, selected }) => selected && theme.colors.primary};
  border-bottom: ${({ theme, lastRow }) =>
    !lastRow && `solid 2px${theme.colors.primary}`};
  border-right: ${({ theme, lastEelement }) =>
    !lastEelement && `solid 2px${theme.colors.primary}`};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  &&:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.primary};
  }
  ${({ theme }) => theme.media.phone`
  width: 35%;
  height: 170px;


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

export const ShowOnDesktop = styled.div`
  ${({ theme }) => theme.media.phone`
    display: none;
`}
`

export const HideOnDeskTop = styled.div`
  ${({ theme }) => theme.media.desktop`
  display:none;
    `}
    ${({ theme }) => theme.media.tablet`
    display:none;
      `}
`
