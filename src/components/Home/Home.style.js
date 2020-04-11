import styled from 'styled-components';
import bannerBackground from 'images/banner-rectangle.png';
/***************************************************
****************** Home Commons ********************
****************************************************/

export const Banner = styled.div`
  display: flex;
  margin-bottom: 40px;
  height: 65%;
`;

export const Slogan = styled.div`
  width: 40%;
  padding: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bannerBackground});
  background-size: contain;
  background-position-x: 90%;
  background-repeat: no-repeat;
  /* margin-right: 5%; */
`;

export const SloganText = styled.h1`
  width: min-content;
  font-size: 35px;
  letter-spacing: 8px;
  text-align: left;
  margin: 0;
  font-weight: 400;
`;

export const NoWrapp = styled.span`
  white-space: nowrap;
`;

export const DescriptionsContainer = styled.div`
  padding: 0 3%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Sentence = styled.div`
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 2.5px;
  ${({ underLine }) => underLine && 'text-decoration: underline;'}
`;

export const SpecialStyle = styled.span`
  ${({ bold }) => bold && 'font-weight: 500;'}
  ${({ vBold }) => vBold && 'font-weight: 600;'}
  ${({ italic }) => italic && 'font-style: italic;'}
`;

export const HomeDetails = styled.div`
  display: flex;
`;

export const HomeMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 18%;
`;

export const MenuItem = styled.div`
  max-width: 70%;
  padding: 20px 10px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: all 0.5s linear;
  ${({ selected, theme }) => selected && `
    background-color: ${theme.colors.primary};
  `}
`;
