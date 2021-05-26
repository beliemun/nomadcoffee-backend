import client from "../../client";

export default {
  Query: {
    seeProfile: (_: any, { id }) => client.user.findUnique({ where: { id } }),
  },
};
