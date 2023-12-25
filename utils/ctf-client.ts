import { ApolloClient, InMemoryCache } from '@apollo/client';





const cache = new InMemoryCache();
export default new ApolloClient({
  uri: 'https://graphql.contentful.com/content/v1/spaces/zgbs11bm62wq',
  cache,
  credentials: 'same-origin',
  headers: {
    Authorization: `Bearer Qp_jaAUaoQ_S0jo_qUwlEuJETKHEhbyb5CbQ-33aWnE`,
  },
});