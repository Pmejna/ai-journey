import type { GetStaticProps, NextPage } from "next";

import { apolloClient } from "lib/apolloClient";

import type { HomePage } from "schema/generated";

import { homePageQuery } from "queries/HomePage";

import { HomeView } from "views/HomeView/HomeView";

export type HomePageData = Required<HomePage>;
export interface HomeProps {
  pageData: HomePageData;
}

const Home: NextPage<HomeProps> = ({ pageData }) => {
  return <HomeView pageData={pageData} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await apolloClient
    .query({
      query: homePageQuery,
    })
    .then((res) => res);

  const pageData = data.homePage;
  return {
    props: {
      pageData,
    },
  };
};

export default Home;
