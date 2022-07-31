import { CacheProvider, Global, ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'

import { emotionCache } from 'lib/cache/emotion-cache'

import { theme } from 'theme'
import { FiraSans } from 'theme/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Global styles={FiraSans}/>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
