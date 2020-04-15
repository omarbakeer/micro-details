import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
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

const MainContainer = () => {
  const [active, setActive] = useState(2)
  const [theme, setTheme] = useState({ ...Theme })
  let location = useLocation()

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
