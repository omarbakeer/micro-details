import styled, { css } from 'styled-components'

export const extendIcon = css`
  margin: 0;
  ${({ theme }) => theme.direction === 'ltr' ? 'margin-right: 10px;' : 'margin-left: 10px;'}
`;


export const MainTitle = styled.div`
  font-size: 35px;
  margin: 40px 0 50px;
  ${({ theme }) =>
    theme.direction === 'ltr' && `
      -webkit-letter-spacing: 12px;
      -moz-letter-spacing: 12px;
      -ms-letter-spacing: 12px;
      letter-spacing: 12px;
    `}
  ${({ theme }) => theme.media.phone`
    display: none;
  `}
`

export const BasicRow = styled.div`
  display: flex;
  width: 100%;
  ${({ theme, reversedOnMobile }) => theme.media.phone`
    flex-direction: ${reversedOnMobile ? 'column-reverse' : 'column'};
    align-items: center;
  `}
`;

export const Col = styled.div`
  flex: ${({ flex }) => flex || 1};
  display: flex;
  flex-direction: column;
  ${({ theme, styleMapOnMobile }) => theme.media.phone`
    align-items: center;
    flex: unset;
    width: 100%;
    ${styleMapOnMobile && `
      height: 300px;
      margin: 20px 0;
    `}
  `}
`;

export const Title = styled.h3`
  margin: 0;
  margin-bottom: 24px;
  font-size: 22px;
  font-weight: 500;
  text-decoration: underline;
  width: fit-content;
  ${({ theme, highLight }) => highLight && theme.direction ==='rtl' && `background-color: ${theme.colors.primary};`}
  ${({ theme }) => theme.direction !== 'ltr' ? '' : `
    -webkit-letter-spacing: 5px;
    -moz-letter-spacing: 5px;
    -ms-letter-spacing: 5px;
    letter-spacing: 5px;
  `}
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  /* width: 90%; */
  margin-bottom: 14px;
`;

export const Link = styled.a`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  direction: ltr;
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: underline;
  }
`;

export const Address = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
  cursor: pointer;
  justify-content: flex-start;
  ${({ active, theme}) => active && `border: 3px solid ${theme.colors.primary};`}
  ${({ theme }) => theme.media.phone`
    padding: 10px 10px;
    align-items: center;
    text-align: center;
  `}
`;

export const AddressTitle = styled.h5`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
  ${({ theme }) => theme.direction !== 'ltr' ? '' : `
    -webkit-letter-spacing: 1.5px;
    -moz-letter-spacing: 1.5px;
    -ms-letter-spacing: 1.5px;
    letter-spacing: 1.5px;
  `}
`;

export const AddressDetails = styled.p`
  margin: 0;
  font-size: 12px;
  ${({ theme }) => theme.direction !== 'ltr' ? '' : `
    -webkit-letter-spacing: 1.5px;
    -moz-letter-spacing: 1.5px;
    -ms-letter-spacing: 1.5px;
    letter-spacing: 1.5px;
  `}
`;

const inputStyle = css`
  margin: 0;
  border: 0;
  padding: 10px 0;
  margin-bottom: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  width: 80%;
  outline: none;
  ${({ theme }) => theme.media.phone`
    width: 95%;
  `}
  font-family: ${({ theme }) => theme.direction === 'ltr' ? 'Qanelas, Arial': 'TheSansArabic'};
  font-size: 16px;
  &::placeholder{
    font-family: ${({ theme }) => theme.direction === 'ltr' ? 'Qanelas, Arial': 'TheSansArabic'} ;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.darkgrey};
    line-height: 100%;
    ${({ theme }) => theme.media.phone`
      text-align: center;
    `}
  }
`;

export const InputField = styled.input`
  ${inputStyle}
`;

export const TextArea = styled.textarea`
  ${inputStyle}
  resize: none;
  height: 120px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${({ theme }) => theme.media.phone`
    align-items: center;
  `}
`;

export const Button = styled.button`
  border: none;
  background: black;
  color: white;
  width: 35%;
  margin-top: 14px;
  font-family: ${({ theme }) => theme.direction === 'ltr' ? 'Qanelas, Arial': 'TheSansArabic'};
  padding: 10px 0;
  font-size: 18px;
  cursor: pointer;
  outline: none;
`;

export const Marker = styled.div`
  position: absolute;
  top: -30px;
  left: -14px;
  border-radius: 50% 50% 50% 0;
  border: 4px solid ${({ theme }) => theme.colors.primary};
  width: 30px;
  height: 30px;
  transform: rotate(-45deg);
  &:after {
    position: absolute;
    content: "";
    width: 15px;
    height: 15px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    margin-left: -7px;
    margin-top: -8px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SpecialStyle = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
`

export const MessageSent = styled.span`
  margin: 14px 0;
`