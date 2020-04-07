import styled from 'styled-components'

export const Section = styled.section`
    flex: 1;
    height: 100%;
    transition: flex 0.8s ease;
    ${({ active }) => active && 'flex: 25;'}
    background: ${({ color }) => color || 'black'};
    display: flex;
    ${({ theme, active }) => theme.media.phone`
      flex-direction: column;
      transition: all 0.8s ease;
      ${active && 'flex: 16;'}
    `}
`

export const SectionSidebar = styled.div`
  width: calc(100vw / 25);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor:pointer;
  ${({ theme }) => theme.media.phone`
    width: 100%;
    height: calc(100vh / 20);
    flex-direction: row;
    justify-content: center;
  `}
`

export const SidebarName = styled.div`
  margin-bottom: 100px;
  white-space: nowrap;
  transform: rotate(-90deg);
  transform-origin: left top;
  color: ${({ theme, primaryColor }) =>
    primaryColor ? theme.primary : 'black'};
  font-size:36px;
  text-transform:uppercase;
  ${({ theme }) => theme.media.phone`
    margin-bottom: 0;
    transform: unset;
    font-size:26px;

  `}
`

export const ContentContainer = styled.div`
  width: calc(100% - calc(100vw / 25));
  background: white;
  ${({ theme }) => theme.media.phone`
      width: 100%;
      height: calc(100% - calc(100vh / 20));
    `}
  padding: 50px;
`
