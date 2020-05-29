import React from 'react';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import ThemeProvider from './src/contexts/ThemeContext'

import Routes from './src/routes';

export default function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}