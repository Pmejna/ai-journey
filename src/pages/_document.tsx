import type { DocumentContext, DocumentInitialProps } from "next/document";
import Document, { Html, Main, Head, NextScript } from "next/document";
import { Global } from "@emotion/react";

import { extractCritical, EMOTION_CACHE_KEY } from "lib/cache/emotion-cache";

import { FiraSans, Lato } from "theme/global";

export default class PageDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    const { html, ids, css } = extractCritical(initialProps.html);

    return {
      ...initialProps,
      html,
      styles: [
        initialProps.styles,
        <style
          key="emotion-css"
          data-emotion={`${EMOTION_CACHE_KEY} ${ids.join(" ")}`}
          dangerouslySetInnerHTML={{ __html: css }}
        />,
      ],
    };
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/public/fonts/FiraSans/FiraSans-Bold.ttf"
            as="font"
            type="font/truetype"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/public/fonts/Lato/Lato-Regular.ttf"
            as="font"
            type="font/truetype"
            crossOrigin="anonymous"
          />
          <Global styles={FiraSans} />
          <Global styles={Lato} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
