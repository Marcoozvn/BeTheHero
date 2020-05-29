import React, { useState, useContext } from 'react'
import DarkModeToggle from "react-dark-mode-toggle"
import { ThemeContext } from '../../contexts/ThemeContext'

import './styles.css'

export default function Toolbar() {
  const { theme, changeTheme } = useContext(ThemeContext)
  const [selected, setSelected] = useState(theme === 'dark' ? true : false)

  function handleToogle() {
    if (!selected) {
      changeTheme('dark')
    } else {
      changeTheme('light')
    }
    setSelected(!selected)
  }

  return (
    <div className={`toolbar ${theme}`}>
      <DarkModeToggle onChange={handleToogle} checked={selected} size={60}/>
    </div>
  )
}