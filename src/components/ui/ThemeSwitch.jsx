import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

import { MdDarkMode, MdLightMode } from "react-icons/md";


const ThemeSwitch = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <>
      <label className='themeSwitcherThree relative inline-flex cursor-pointer select-none items-center'>
        {/* desktop switch */}
        <div className='shadow-card switches-bg hidden md:flex'>
          <span
            className={`flex h-6 w-6 items-center justify-center rounded text-white ${
              theme === 'dark' ? 'bg-gradient opacity-100' : 'opacity-50'
            }`}
            onClick={() => toggleTheme('dark')}
          >
            <MdDarkMode />
          </span>
          <span
            className={`flex h-6 w-6 items-center justify-center rounded text-white ${
              theme === 'light' ? 'bg-gradient opacity-100' : 'opacity-50'
            }`}
            onClick={() => toggleTheme('light')}
          >
            <MdLightMode />
          </span>
        </div>
        {/* mobile switch */}
        <div className='shadow-card switches-bg flex md:hidden'>
          <span
            className={`flex h-6 w-6 items-center justify-center rounded text-white`}
            onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' && (
              <MdLightMode className='text-primary' />
            )}
            {theme === 'dark' && (
              <MdDarkMode />
            )}
          </span>
        </div>
      </label>
    </>
  )
}

export default ThemeSwitch