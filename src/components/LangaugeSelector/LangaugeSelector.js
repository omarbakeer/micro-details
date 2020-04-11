import React, { useContext, useState } from 'react'
import { Button, ButtonContainer, Flag } from './LangaugeSelector.style'
import Eng from 'images/eng-flag.png'
import Ar from 'images/saudi-flag.jpg'
import { T } from 'locale'
import { languageOptions } from 'locale'
import { LanguageContext } from 'locale'
import { useHistory } from 'react-router-dom'

const LanguageSelector = () => {
  const history = useHistory()
  const languageContext = useContext(LanguageContext)
  const [language, seLangauge] = useState(languageContext.language)

  const toggleLangauge = () => {
    const selectedLanguage = languageOptions.find(
      (item) => item.id !== language.id
    )
    if (selectedLanguage.id === 'ar') {
      history.push('/ar')
    } else {
      history.push('/')
    }
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
