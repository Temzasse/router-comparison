import {
  ApolloClient,
  createQueryPreloader,
  InMemoryCache,
} from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://countries.trevorblades.com",
  cache: new InMemoryCache(),
});

export const preloadQuery = createQueryPreloader(apolloClient);
