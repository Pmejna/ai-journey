import { gql } from "@apollo/client";

export const homePageQuery = gql`
  query {
    homePage(id: "6kgaAcG9534sZE55TdZPMr") {
      headingText
    }
  }
`;
