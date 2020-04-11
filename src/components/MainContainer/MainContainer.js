import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { LanguageProvider } from 'locale'
import { GlobalStyle, Main } from './MainContainer.style'
import Footer from 'components/Footer'
import LanguageSelector from 'components/LangaugeSelector'
import Theme from 'utils/theme'
import Home from 'components/Home'
import About from 'components/About'
import Services from 'components/Services'
import Work from 'components/Work'
import ContactUs from 'components/ContactUs'
import RandomText from 'images/random-text.png'
import { BrowserRouter as Router } from 'react-router-dom'
import { T } from 'locale'
import {
  Section,
  SectionSidebar,
  SidebarName,
  ContentContainer,
  DesktopRandomTextImg,
} from '../CommonStyles'

const MainContainer = () => {
  const [active, setActive] = useState(4)
  return (
    <LanguageProvider>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Router>
          <LanguageSelector />
          <Main>
            <ContactUs isActive={active === 0} setActive={setActive} />
            <Section active={active === 1} color="black">
              <SectionSidebar onClick={() => setActive(1)}>
                <SidebarName />
                <SidebarName primaryColor>{T('weWorkWith')}</SidebarName>
              </SectionSidebar>
              {active === 1 && (
                <ContentContainer>
                  <Work />
                </ContentContainer>
              )}
            </Section>
            <Section active={active === 2} color="#fcd72f">
              <DesktopRandomTextImg src={RandomText} alt="micro details logo" />
              <SectionSidebar onClick={() => setActive(2)}>
                <SidebarName />
                <SidebarName>{T('services')}</SidebarName>
              </SectionSidebar>
              {active === 2 && (
                <ContentContainer>
                  <Services />
                </ContentContainer>
              )}
            </Section>
            <Section active={active === 3} color="black">
              <SectionSidebar onClick={() => setActive(3)}>
                <SidebarName />
                <SidebarName primaryColor>about us</SidebarName>
              </SectionSidebar>
              {active === 3 && (
                <ContentContainer>
                  <About />
                </ContentContainer>
              )}
            </Section>
            <Home isActive={active === 4} setActive={setActive} />
          </Main>
        </Router>
        <Footer />
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default MainContainer
