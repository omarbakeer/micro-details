import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, Main } from './MainContainer.style';
import Footer from 'components/Footer';
import Theme from 'utils/theme';
import Logo from 'images/Logo.png';
import Home from 'components/Home'
import {
  Section,
  SectionSidebar,
  SidebarName,
  ContentContainer
} from '../CommonStyles';

const MainContainer = props => {
  const [active, setActive] = useState(4);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Main>
        {/* <Collapsible data={data}/> */}
        <Section active={active === 0} color="#fcd72f">
          <SectionSidebar onClick={() => setActive(0)}>
            <SidebarName />
            <SidebarName>hello world</SidebarName>
          </SectionSidebar>
          {active === 0 && (
            <ContentContainer>
              <h1>Hi Bakier</h1>
              <img src={Logo}/>
            </ContentContainer>
          )}
        </Section>
        <Section active={active === 1} color="black">
          <SectionSidebar onClick={() => setActive(1)}>
            <SidebarName />
            <SidebarName>hello world</SidebarName>
          </SectionSidebar>
          {active === 1 && (
            <ContentContainer>
              <h1>Hi Bakier</h1>
            </ContentContainer>
          )}
        </Section>
        <Section active={active === 2} color="#fcd72f">
          <SectionSidebar onClick={() => setActive(2)}>
            <SidebarName />
            <SidebarName>hello world</SidebarName>
          </SectionSidebar>
          {active === 2 && (
            <ContentContainer>
              <h1>Hi Bakier</h1>
            </ContentContainer>
          )}
        </Section>
        <Section active={active === 3} color="black">
          <SectionSidebar onClick={() => setActive(3)}>
            <SidebarName />
            <SidebarName>hello world</SidebarName>
          </SectionSidebar>
          {active === 3 && (
            <ContentContainer>
              <h1>Hi Bakier</h1>
            </ContentContainer>
          )}
        </Section>
        <Home isActive={active === 4} setActive={setActive} />
      </Main>
      <Footer />
    </ThemeProvider>
  );
};

export default MainContainer;
