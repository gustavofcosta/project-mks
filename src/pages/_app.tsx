import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/globals-styles'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { Provider } from 'react-redux'
import { store } from '@/store'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}
