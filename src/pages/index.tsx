import type { GetStaticProps, NextPage } from "next";

import { apolloClient } from "lib/apolloClient";

import { homePageQuery } from "queries/HomePage";
import { HomeView } from "views/HomeView/HomeView";

export interface HomeProps {
  pageData: any;
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
