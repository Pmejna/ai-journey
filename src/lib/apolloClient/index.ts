import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  concat,
  HttpLink,
} from "@apollo/client";

const localUrl = "/api/graphql";
const hasWindow = typeof window !== "undefined";

const createAuthMiddleware = () => {
  return new ApolloLink((operation, forward) => {
    operation.setContext(() => ({
      headers: {
        Authorization: `Bearer ${process.env[`CONTENTFUL_ACCESS_TOKEN`]}`,
      },
    }));

    return forward(operation);
  });
};

export const createApolloClient = () => {
  const spaceId = process.env[`CONTENTFUL_SPACE_ID`];
  const environment = process.env[`CONTENTFUL_MAIN_ENVIRONMENT`];

  const contentfulUrl = `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environment}`;
  const pageUrl = hasWindow ? localUrl : contentfulUrl;

  const httpLink = new HttpLink({ uri: pageUrl });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(createAuthMiddleware(), httpLink),
    defaultOptions: {
      query: {
        fetchPolicy: hasWindow ? "cache-first" : "no-cache",
      },
    },
  });
};

export const apolloClient = createApolloClient();
