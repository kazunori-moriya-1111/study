import { ApolloClient, InMemoryCache } from "@apollo/client";

// GraphQLサーバーのエンドポイントを指定
const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

export default client;
