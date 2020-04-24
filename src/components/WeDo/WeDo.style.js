import styled, { css } from 'styled-components'

export const extendIcon = css`
  /* position: relative;
  ${({ theme }) => theme.direction === 'ltr' ? 
    `left: 0;`
    : `right: 0;`}
  top: -10px;
  margin: 0 10px;
  ${({ theme }) => theme.media.phone`
    margin: ${theme.direction === 'ltr' ? 
      `0 10px 0 0`
      : `0 0 0 10px`};
    top: 0;
    right: 0;
    left: 0;
  `} */
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 77%;
  ${({ theme }) => theme.media.phone`
    width: 100%;
  `}
`

export const ServiceBlock = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme, selected }) => selected && theme.colors.primary};
  border-bottom: ${({ theme, lastRow }) =>
    !lastRow && `solid 1px${theme.colors.primary}`};
  border-right: ${({ theme, lastEelement }) =>
    theme.direction === 'ltr' &&
    !lastEelement &&
    `solid 1px${theme.colors.primary}`};
  border-left: ${({ theme, lastEelement }) =>
    theme.direction === 'rtl' &&
    !lastEelement &&
    `solid 1px${theme.colors.primary}`};
  color: ${({ theme }) => theme.colors.black};
  &&:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.primary};
    & .icon {
      &::before{
        color: ${({ theme }) => theme.colors.black};
      }
    }
  }
  ${({ theme, order }) => theme.media.phone`
    border:none;
    width:100%;
    text-align:center;
    display:block;
    order: ${order || 1};
    margin-bottom: 20px;
  `}
`

export const Row = styled.span`
  display: flex;
  justify-content: center;
  position: relative;
  ${({ theme, margin }) => theme.direction === 'ltr' ? 
    `margin-left: ${ margin || 5}%;`
    : `margin-right: ${ margin || 5}%;`}
  ${({ theme }) => theme.media.phone`
    align-items: center;
    margin: 0;
  `}

`

export const Service = styled.span`
  font-weight: 500;
  text-transform: uppercase;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.direction === 'ltr' && `
    -webkit-letter-spacing: 3px;
    -moz-letter-spacing: 3px;
    -ms-letter-spacing: 3px;
    letter-spacing: 3px;
  `}
  &&:hover {
  }
  ${({ theme }) => theme.media.tablet`
font-size: 15px;
`}
  ${({ theme }) => theme.media.phone`
font-size: 15px;
`}
`
