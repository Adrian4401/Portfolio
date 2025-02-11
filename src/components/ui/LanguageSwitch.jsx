import React, { useState } from 'react'
import "/node_modules/flag-icons/css/flag-icons.min.css";

const LanguageSwitch = () => {
  const [language, setLanguage] = useState("en")

  const handleCheckboxChange = (language) => {
    setLanguage((prev) => (prev === "en" ? "pl" : "en"))
  }

  return (
    <>
      <label className='themeSwitcherThree relative inline-flex cursor-pointer select-none items-center'>
        <input
          type='checkbox'
          checked={language === "pl"}
          onChange={handleCheckboxChange}
          className='sr-only'
        />
        <div className='shadow-card flex  w-[70px] items-center justify-between p-2 rounded-md bg-accent'>
          <span
            className={`fi fi-gb flex h-6 w-6 items-center justify-center rounded ${
              language === "en" ? '' : 'opacity-25'
            }`}
            id='english'
          />
          <span
            className={`fi fi-pl flex h-6 w-6 items-center justify-center rounded ${
              language === "pl" ? '' : 'opacity-25'
            }`}
            id='polish'
          />
        </div>
      </label>
    </>
  )
}

export default LanguageSwitch