import React, { useContext, useState } from 'react'
import { Button, ButtonContainer, Flag } from './LangaugeSelector.style'
import Eng from 'images/eng-flag.png'
import Ar from 'images/saudi-flag.jpg'
import { T } from 'locale'
import { languageOptions } from 'locale'
import { LanguageContext } from 'locale'

const LanguageSelector = () => {
  const languageContext = useContext(LanguageContext)
  const [language, seLangauge] = useState(languageContext.language)

  const toggleLangauge = () => {
    const selectedLanguage = languageOptions.find(
      (item) => item.id !== language.id
    )
    seLangauge(selectedLanguage)
    languageContext.setLanguage(selectedLanguage)
  }

  return (
    <ButtonContainer>
      <Button onClick={() => toggleLangauge()}>{T('langauge')}</Button>
    </ButtonContainer>
  )
}
export default LanguageSelector
