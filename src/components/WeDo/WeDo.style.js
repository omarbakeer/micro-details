import styled from 'styled-components'

export const Container = styled.div`
  display: block;
`

export const Row = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  ${({ theme }) => theme.media.phone`
    text-align:center;
    display:block;
    `}
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
    !lastEelement && `solid 2px${theme.colors.primary}`};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  &&:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.primary};
  }
  ${({ theme }) => theme.media.phone`
    border:none;
    width:100%;
    text-align:center;
    display:block;
    `}
`

export const Service = styled.span`
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black};

  &&:hover {
  }
  ${({ theme }) => theme.media.tablet`
font-size: 15px;
`}
  ${({ theme }) => theme.media.phone`
font-size: 15px;
`}
`
