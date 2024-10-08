import React, { useState, createContext, useContext } from 'react'
import en from './en'
import ar from './ar'

export const dictionaryList = {
  en,
  ar,
}

export const languageOptions = [
  { id: 'en', text: 'English' },
  { id: 'ar', text: 'Arabic' },
]

// create the language context with default selected language
export const LanguageContext = createContext({
  language: languageOptions[0],
  dictionary: dictionaryList[languageOptions[0].id],
})

// it provides the language context to app
export function LanguageProvider(props) {
  const languageContext = useContext(LanguageContext)
  const [language, setLanguage] = useState(languageContext.language)
  const [dictionary, setDictionary] = useState(languageContext.dictionary)

  const provider = {
    language,
    dictionary,
    setLanguage: (selectedLanguage) => {
      setLanguage(selectedLanguage)
      setDictionary(dictionaryList[selectedLanguage.id])
    },
  }

  return (
    <LanguageContext.Provider value={provider}>
      {props.children}
    </LanguageContext.Provider>
  )
}

// get text according to id & current language
export const T = (id) => {
  const languageContext = useContext(LanguageContext)
  return languageContext.dictionary[id]
}
