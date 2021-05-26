import client from "../../client";
import * as bcrypt from "bcrypt";

export default {
  Mutation: {
    createUser: async (
      _: any,
      { userName, email, password, name, location, avatarURL, githubUsername }
    ) => {
      try {
        const existingUser = await client.user.findFirst({
          where: { OR: [{ userName }, { email }] },
        });
        if (existingUser) {
          throw new Error();
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        return client.user
          .create({
            data: {
              userName,
              email,
              password: hashedPassword,
              name,
              location,
              avatarURL,
              githubUsername,
            },
          })
          .then(() => ({ ok: true }));
      } catch {
        return {
          ok: false,
          error: "This username or email is already taken",
        };
      }
    },
  },
};
