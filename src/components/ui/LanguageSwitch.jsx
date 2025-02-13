import React, { useContext } from 'react'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { LanguageContext } from '../../context/LanguageContext';

const LanguageSwitch = () => {
  const { lang, changeLanguage } = useContext(LanguageContext)

  if (!lang) return null

  return (
    <>
      <label className='themeSwitcherThree relative inline-flex cursor-pointer select-none items-center'>
        {/* desktop switch */}
        <div className='shadow-card switches-bg hidden md:flex'>
          <span
            className={`fi fi-gb flex min-h-full w-full items-center justify-center rounded ${
              lang === "en" ? 'opacity-100' : 'opacity-25'
            }`}
            onClick={() => changeLanguage('en')}
          />
          <span
            className={`fi fi-pl flex h-full w-full items-center justify-center rounded ${
              lang === "pl" ? 'opacity-100' : 'opacity-25'
            }`}
            onClick={() => changeLanguage('pl')}
          />
        </div>
        {/* mobile switch */}
        <div className='shadow-card switches-bg flex md:hidden'>
          <span
            className={`fi ${lang === "en" ? "fi-gb" : "fi-pl"} flex h-6 w-6 items-center justify-center rounded`}
            onClick={() => changeLanguage(lang === 'en' ? 'pl' : 'en')}
          />
        </div>
      </label>
    </>
  )
}

export default LanguageSwitch