import React, { useState, createContext } from 'react'

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  function changeTheme(theme) {
    setTheme(theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider