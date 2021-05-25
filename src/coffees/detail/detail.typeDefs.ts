import { gql } from "apollo-server-core";

export default gql`
  type Query {
    detail(id: Int): Coffee
  }
`;
