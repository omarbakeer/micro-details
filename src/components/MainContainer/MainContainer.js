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
import { BrowserRouter as Router } from 'react-router-dom'
import { T } from 'locale'
import {
  Section,
  SectionSidebar,
  SidebarName,
  ContentContainer,
} from '../CommonStyles'

const MainContainer = () => {
  const [active, setActive] = useState(0)
  return (
    <LanguageProvider>
      <Router>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <LanguageSelector />
          <Main>
            <ContactUs isActive={active === 0} setActive={setActive} />
            <Section active={active === 1}>
              <SectionSidebar onClick={() => setActive(1)}>
                <SidebarName primaryColor>{T('weWorkWith')}</SidebarName>
              </SectionSidebar>
              {active === 1 && (
                <ContentContainer>
                  <Work />
                </ContentContainer>
              )}
            </Section>
            <Section active={active === 2}>
              <SectionSidebar primaryColor onClick={() => setActive(2)}>
                <SidebarName>{T('services')}</SidebarName>
              </SectionSidebar>
              {active === 2 && (
                <ContentContainer>
                  <Services />
                </ContentContainer>
              )}
            </Section>
            <Section active={active === 3}>
              <SectionSidebar onClick={() => setActive(3)}>
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
          <Footer />
        </ThemeProvider>
      </Router>
    </LanguageProvider>
  )
}

export default MainContainer
