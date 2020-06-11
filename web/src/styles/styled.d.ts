import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      textPrimary: string,
      textSecondary: string,
      textInput: string,
      background: string,
      cardBackground: string,
      registerCardBackground: string,
      inputBackground: string,
      boxShadow: string
    }
  }
}