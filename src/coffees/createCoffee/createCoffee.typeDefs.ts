import { gql } from "apollo-server-core";

export default gql`
  type Mutation {
    createCoffee(name: String, price: Int): Coffee
  }
`;
