import client from "../../client";

export default {
  Query: {
    detail: (_: any, { id }) => client.coffee.findUnique({ where: { id } }),
  },
};
