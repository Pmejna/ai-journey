import type { GetStaticProps, NextPage } from "next";

import { StyledTitle } from "components/TestComponent/TestComponents.styles";

import { apolloClient } from "lib/apolloClient";

const Home: NextPage<{ pageData: any }> = () => {
  return <StyledTitle>Test</StyledTitle>;
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: homePageQuery,
  });

  const { pageData } = data.homePage;
  return {
    props: {
      pageData,
    },
    revalidate: 600,
  };
};

export default Home;
