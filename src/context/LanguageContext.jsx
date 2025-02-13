import React, { useState } from "react"
import en from '../locales/en'
import pl from '../locales/pl'

export const LanguageContext = React.createContext()

export const LanguageProvider = ({ children }) => {
    const getDefaultLanguage = () => localStorage.getItem('language') || 'en'

    const [lang, setLang] = useState(getDefaultLanguage)

    const translations = { en, pl }
    const t = translations[lang] || en

    const changeLanguage = async (language) => {
        setLang(language)
        try {
            await localStorage.setItem('language', language)
            console.log('Language changed.')
        } catch (err) {
            console.log('Error while saving language in localstorage: ' + err)
        }
    }


    return (
        <LanguageContext.Provider value={{ lang, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}