import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: block;
  /* padding: 20px; */
  ${({ theme }) => theme.media.phone`
    height: 300px;
  `}
`

export const Wrapper = styled.div`
  display: block;
`

export const Title = styled.span`
  font-size: ${({ secondary }) => secondary ? 24 : 35}px;
  margin: ${({ secondary }) => secondary ? '40px 0 33px' : '40px 0 60px'};;
  text-transform: capitalize;
  display: block;

  ${({ theme }) =>
    theme.direction === 'ltr' &&
    `
  -webkit-letter-spacing: 12px;
  -moz-letter-spacing: 12px;
  -ms-letter-spacing: 12px;
  letter-spacing: 12px;
`}
  ${({ theme, mainTitle }) => theme.media.phone`
    ${mainTitle ? `display: none;` : `
    font-size:18px;
    text-align:center;
    margin: 20px 0;
  `}
`}
`

export const iconSize = css`
  ${({ theme }) => theme.media.phone`
    &::before {
      font-size: 20px;
    }
  `}
`

export const extendIcon = css`
  /* position: relative;
  ${({ theme }) => theme.direction === 'ltr' ? 
    `left: 0;`
    : `right: 0;`}
  top: -10px;
  margin: 0 10px;
  ${({ theme }) => theme.media.phone`
    margin: ${theme.direction === 'ltr' ? 
      `0 5px 0 0`
      : `0 0 0 5px`};
    top: -10px;
    right: 0;
    left: 0;
    ${iconSize}
  `} */
`

export const Sections = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  ${({ theme }) => theme.media.phone`
    width: 100%;
    margin-top: 20px;
  `}
`

export const ServiceBlock = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
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
  ${({ selected, theme }) => selected && `
    & .icon {
      &::before{
        color: ${theme.colors.black};
      }
    }
  `}
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
    border: none;
    width: 50%;
    box-sizing: border-box;
    padding: ${theme.direction === 'ltr' ? '20px 0 20px 5px':'20px 5px 20px 0'};
    text-align: first;
    order: ${order || 1};
    ${order % 2 === 1 && `border-${theme.direction === 'ltr' ? 'right':'left'}: 1px solid ${theme.colors.primary};`}
    ${order < 5 && `border-bottom: 1px solid ${theme.colors.primary};`}
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
font-size: 14px;
`}
${({ theme }) => theme.direction === 'ltr' && theme.media.phone`
    -webkit-letter-spacing: 1px;
    -moz-letter-spacing: 1px;
    -ms-letter-spacing: 1px;
    letter-spacing: 1px;
  `}
`
