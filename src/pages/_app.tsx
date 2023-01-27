import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/globals-styles'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
