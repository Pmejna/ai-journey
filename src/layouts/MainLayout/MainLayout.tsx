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
  description = 'AI art blog',
  ogImage,
  ogName = 'AI art blog',
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