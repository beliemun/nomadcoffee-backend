import client from "../../client";

export default {
  Mutation: {
    createCoffee: (_: any, { name, price }) =>
      client.coffee.create({
        data: { name, price },
      }),
  },
};
