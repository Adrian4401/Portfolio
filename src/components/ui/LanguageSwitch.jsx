import React, { useContext } from 'react'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { LanguageContext } from '../../context/LanguageContext';

const LanguageSwitch = () => {
  const { lang, changeLanguage } = useContext(LanguageContext)

  if (!lang) return null

  return (
    <>
      <label className='themeSwitcherThree relative inline-flex cursor-pointer select-none items-center'>
        <input
          type='checkbox'
          checked={lang === "pl"}
          onChange={() => changeLanguage(lang === 'en' ? 'pl' : 'en')}
          className='sr-only'
        />
        <div className='shadow-card flex w-[70px] h-[40px] items-center justify-between p-2 rounded-md bg-accent'>
          <span
            className={`fi fi-gb flex min-h-full w-full items-center justify-center rounded ${
              lang === "en" ? 'opacity-100' : 'opacity-25'
            }`}
            id='english'
          />
          <span
            className={`fi fi-pl flex h-full w-full items-center justify-center rounded ${
              lang === "pl" ? 'opacity-100' : 'opacity-25'
            }`}
            id='polish'
          />
        </div>
      </label>
    </>
  )
}

export default LanguageSwitch