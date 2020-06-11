import React, { useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'
import Toolbar from './components/Toolbar'
import Routes from './routes'

import GlobalStyle from './styles/global'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

function App() {
  const [theme, setTheme] = useState<DefaultTheme>(light)

  function changeTheme() {
    setTheme(theme?.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Toolbar changeTheme={changeTheme}/>
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
