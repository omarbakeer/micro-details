import styled from 'styled-components';
import bannerBackground from 'images/banner-rectangle.png';
/***************************************************
****************** Home Commons ********************
****************************************************/

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Banner = styled.div`
  flex: 1;
  display: flex;
  margin-bottom: 20px;
`;

export const Slogan = styled.div`
  flex: 2;
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
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Sentence = styled.div`
  font-size: 18px;
  letter-spacing: 2.5px;
`;

export const HomeDetails = styled.div`
  flex: 1;
  display: flex;
`;

export const HomeMenu = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.div`
  max-width: 60%;
  padding: 20px 10px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary}
`;

/***************************************************
****************** We Can Content ******************
***************************************************/

export const WeCanContainer = styled.div`
  flex: 3;
  display: flex;
  flex-wrap: wrap;
`

export const WeCanItem = styled.div`
  flex-grow: 1;
  width: 33%;
`