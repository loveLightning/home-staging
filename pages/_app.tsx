import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { AppTheme, GlobalStyles } from 'src/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={AppTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
