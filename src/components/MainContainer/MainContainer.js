import React, { useState, useEffect } from 'react'
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
import { useLocation } from 'react-router-dom'
import { T } from 'locale'
import {
  Section,
  SectionSidebar,
  SidebarName,
  ContentContainer,
} from '../CommonStyles'

const MainContainer = () => {
  const [active, setActive] = useState(3)
  const [theme, setTheme] = useState({ ...Theme })
  let location = useLocation();

  useEffect(() => {
    let direction = 'ltr'
    if (location.pathname.includes('ar')) direction = 'rtl'
    setTheme({...theme, direction })
  }, [location])
  
  return (
    <LanguageProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Main>
            <LanguageSelector mobile />
            <Home isActive={active === 4} setActive={setActive} />
            <Section active={active === 3}>
              <SectionSidebar onClick={() => setActive(3)}>
                <SidebarName primaryColor>about us</SidebarName>
              </SectionSidebar>
              {active === 3 && (
                <>
                  <LanguageSelector />
                  <ContentContainer>
                    <About />
                  </ContentContainer>
                </>
              )}
            </Section>
            <Section active={active === 2}>
              <SectionSidebar primaryColor onClick={() => setActive(2)}>
                <SidebarName>{T('services')}</SidebarName>
              </SectionSidebar>
              {active === 2 && (
                <>
                  <LanguageSelector />
                  <ContentContainer>
                    <Services />
                  </ContentContainer>
                </>
              )}
            </Section>
            <Section active={active === 1}>
              <SectionSidebar onClick={() => setActive(1)}>
                <SidebarName primaryColor>{T('weWorkWith')}</SidebarName>
              </SectionSidebar>
              {active === 1 && (
                <>
                  <LanguageSelector />
                  <ContentContainer>
                    <Work />
                  </ContentContainer>
                </>
              )}
            </Section>
            <ContactUs isActive={active === 0} setActive={setActive} />
          </Main>
          <Footer />
        </ThemeProvider>
    </LanguageProvider>
  )
}

export default MainContainer
