import type { FC, ReactNode } from 'react';
import Head from 'next/head';

import Footer from 'components/Footer/Footer';
import Main from 'components/Main/Main';

export interface MainLayoutProps {
    children: ReactNode;
    title?: string;
    description?: string;
    ogImage?: string;
    ogName?: string;
    ogUrl?: string;
    twitterName?: string;
}

export const MainLayout: FC<MainLayoutProps> = ({
  title = 'Ai Journey',
  description = 'Midjourney AI blog',
  ogImage,
  ogName = 'Midjourney AI blog',
  ogUrl = 'https://ai-journey.ai',
  twitterName = '@ai-journey',
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={ogName} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:site" content={twitterName} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content={ogImage || `/og-image.png`} />
        <meta name="twitter:image" content={ogImage || `/og-image.png`} />
        <meta name="description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta property="og:description" content={description} />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Main>{children}</Main>
      <Footer/>
    </>
  );
};