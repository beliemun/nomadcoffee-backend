import { gql } from "apollo-server-core";

export default gql`
  type CreateUserResult {
    ok: Boolean!
    error: String
  }

  type Mutation {
    createUser(
      userName: String!
      email: String!
      password: String!
      name: String
      location: String
      avatarURL: String
      githubUsername: String
    ): CreateUserResult
  }
`;
