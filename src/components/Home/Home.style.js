import styled from 'styled-components';

/***************************************************
****************** Home Commons ********************
****************************************************/

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Banner = styled.div`
  flex: 1%;
  display: flex;
`;

export const Slogan = styled.div`
  flex: 1;
  padding: auto;
  text-align: center;
`;

export const DescriptionsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Sentence = styled.div`

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
  border-bottom: 2px solid ${({ theme }) => theme.primary}
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