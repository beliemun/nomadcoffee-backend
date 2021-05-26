import { gql } from "apollo-server-core";

export default gql`
  type User {
    id: Int!
    userName: String!
    email: String!
    name: String
    location: String
    avatarURL: String
    githubUsername: String
  }
`;
