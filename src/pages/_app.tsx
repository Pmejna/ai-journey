import { CacheProvider, Global, ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'

import { emotionCache } from 'lib/cache/emotion-cache'

import { theme } from 'theme'
import { FiraSans, global, normalize } from 'theme/global'
import { MainLayout } from 'layouts/MainLayout/MainLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Global styles={FiraSans}/>
        <Global styles={normalize}/>
        <Global styles={global}/>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
