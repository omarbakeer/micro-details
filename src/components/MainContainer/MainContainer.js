import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'
import { LanguageProvider, T } from 'locale'
import { GlobalStyle, Main } from './MainContainer.style'
import Footer from 'components/Footer'
import LanguageSelector from 'components/LangaugeSelector'
import Theme from 'utils/theme'
import Home from 'components/Home'
import About from 'components/About'
import Services from 'components/Services'
import Work from 'components/Work'
import ContactUs from 'components/ContactUs'

const MainContainer = () => {
  const [active, setActive] = useState(4)
  const [theme, setTheme] = useState({ ...Theme })
  let location = useLocation()

  useEffect(() => {
    // to handle iPhone full height problem
    // reference for this is @ https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, [])

  useEffect(() => {
    let direction = 'ltr'
    if (location.pathname.includes('ar')) direction = 'rtl'
    setTheme({ ...theme, direction })
  }, [location])

  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Main>
          <Helmet>
            <title>{location.pathname.includes('ar') ? 'تفاصيل دقيقة' : 'Micro Details'}</title>
          </Helmet>
          <LanguageSelector mobile />
          <Home isActive={active === 4} setActive={setActive} />
          <About isActive={active === 3} setActive={setActive} />
          <Services isActive={active === 2} setActive={setActive} />
          <Work isActive={active === 1} setActive={setActive} />
          <ContactUs isActive={active === 0} setActive={setActive} />
        </Main>
        <Footer />
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default MainContainer
