import { gql } from "apollo-server-core";

export default gql`
  type Coffee {
    id: Int!
    name: String!
    price: Int!
    createdAt: String!
    updatedAt: String!
  }
`;
