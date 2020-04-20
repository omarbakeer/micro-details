import styled, { keyframes, css } from 'styled-components'
import bannerBackground from 'images/banner-rectangle.png'

/* The typing effect */
const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`

/* The typewriter cursor effect */
 const blinkCaret = keyframes` 
  from, to { border-color: transparent }
  50% { border-color: #fcd72f; }
`

/***************************************************
 ****************** Home Commons ********************
 ****************************************************/

export const Banner = styled.div`
  display: flex;
  margin-bottom: 35px;
  height: 250px;
`

export const Slogan = styled.div`
  width: 40%;
  padding: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bannerBackground});
  background-size: contain;
  background-position-x: ${({ theme }) => theme.direction === 'ltr' ? 
  '90%' : '0'};
  background-repeat: no-repeat;
  /* margin-right: 5%; */
`

export const SloganText = styled.h1`
  width: min-content;
  font-size: 35px;
  line-height: 45px;
  text-align: left;
  margin: 0;
  font-weight: 400;
  ${({ theme }) =>
    theme.direction === 'ltr' &&
    `
    -webkit-letter-spacing: 8px;
    -moz-letter-spacing: 8px;
    -ms-letter-spacing: 8px;
    letter-spacing: 8px;
  `}
`

export const NoWrapp = styled.span`
  white-space: nowrap;
`

export const DescriptionsContainer = styled.div`
  padding: 0 3%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Sentence = styled.div`
  font-size: 16px;
  margin: 10px 0px;
  font-weight: 300;
  ${({ underLine }) => underLine && 'text-decoration: underline;'}
  ${({ theme }) =>
    theme.direction === 'ltr' &&
    `
    -webkit-letter-spacing: 2.5px;
    -moz-letter-spacing: 2.5px;
    -ms-letter-spacing: 2.5px;
    letter-spacing: 2.5px;
  `}
`

export const SpecialStyle = styled.span`
  ${({ bold }) => bold && 'font-weight: 500;'}
  ${({ vBold }) => vBold && 'font-weight: 600;'}
  ${({ italic }) => italic && 'font-style: italic;'}
  ${({ uppercase }) => uppercase && 'text-transform:uppercase;'}


`

export const HomeDetails = styled.div`
  display: flex;
  ${({ theme }) => theme.media.phone`
    flex-direction: column;
    align-items: center;
  `}
`

export const HomeMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 16%;
  margin:  ${({ theme }) => theme.direction === 'ltr' ? '0 50px 0 0' : '0 50px 0 50px'};
  ${({ theme }) => theme.media.phone`
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin: 0;
    margin-bottom: 40px;
  `}
`

export const MenuItem = styled.div`
  /* max-width: 70%; */
  background-color: #f8f8f8;
  padding: 20px 10px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: all 0.5s linear;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.primary : theme.colors.lightGray};

  ${({ theme }) => theme.media.phone`
    max-width: unset;
    width: 50%;
    box-sizing: border-box;
    text-align: right;
  `}
  ${({ theme, rightBorder }) => rightBorder && theme.media.phone`
    ${theme.direction === 'ltr' ? 
      `border-right: solid 2px ${theme.colors.primary};` 
      : `border-left: solid 2px ${theme.colors.primary};`}
  `}
`

export const Row = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
`

export const ClientsContainer = styled.div`
  ${({ theme }) => theme.media.desktop`
    display: flex;
    align-items: center;
    width:70%;
  `}
`


export const extendTextStyle = css`
  width: 0;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  ${({ theme }) => theme.direction === 'ltr' ? 'border-right: 2px solid transparent;' :'border-left: 2px solid transparent;' } /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  ${({ theme }) => theme.direction !== 'ltr' ? '' : `
    -webkit-letter-spacing: 1px;
    -moz-letter-spacing: 1px;
    -ms-letter-spacing: 1px;
    letter-spacing: 1px;
  `}
  animation: ${typing} 3.5s steps(40, end) , ${blinkCaret} .75s step-end 4;
  animation-delay: ${({ delay }) => delay || 0}s;
  -webkit-animation-fill-mode: forwards; /* Chrome 16+, Safari 4+ */
  -moz-animation-fill-mode: forwards;    /* FF 5+ */
  -o-animation-fill-mode: forwards;      /* Not implemented yet */
  -ms-animation-fill-mode: forwards;     /* IE 10+ */
  animation-fill-mode: forwards;         /* When the spec is finished */
`