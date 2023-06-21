const { ApolloServer, gql } = require('apollo-server');

let links = [
  {
    id: 'link-0',
    description: 'GraphQLを学ぶ',
    url: 'abc.com',
  },
];
const typeDefs = gql`
  type Query {
    info: String!
    feed: [Link]!
  }

  type Link {
    id: ID!
    description: String!
    url: String!
  }
`;

const resolvers = {
  Query: {
    info: () => 'HackerNewsクローン',
    fedd: () => links,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => console.log(`${url}でサーバを起動中`));
