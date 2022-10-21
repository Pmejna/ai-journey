import { CacheProvider, Global, ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";

import { ApolloProvider } from "@apollo/client";

import { emotionCache } from "lib/cache/emotion-cache";
import { apolloClient } from "lib/apolloClient";

import { theme } from "theme";
import { FiraSans, global, normalize } from "theme/global";

import { MainLayout } from "layouts/MainLayout/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <Global styles={FiraSans} />
          <Global styles={normalize} />
          <Global styles={global} />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ThemeProvider>
      </CacheProvider>
    </ApolloProvider>
  );
}

export default MyApp;
