import React from 'react'
import Routes from './routes'
import Toolbar from './components/Toolbar'
import ThemeProvider from './contexts/ThemeContext'

import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Toolbar />
        <Routes />
      </div>
    </ThemeProvider>
  )
}

export default App
