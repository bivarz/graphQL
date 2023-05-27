const gql = require("graphql-tag");

const typesDefs = gql`
  "A tack is a group of Modules taht teaches about specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    lenght: Int
    modulesCount: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String!
  }

  type Query {
    tracksForHome: [Track!]
  }
`;
module.exports = typesDefs;
