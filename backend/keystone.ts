import "dotenv/config";
import { config, createSchema } from "@keystone-next/keystone/schema";

const databaseURL = process.env.DATABASE_URL;
const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360,
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_UR],
      credentials: true,
    },
  },
  db: {
    adapter: "mongoose",
    url: databaseURL,
    //Todo add data seeding here
  },
  //data types of keystone

  lists: createSchema({
    // Schema items go in here
  }),
  ui: {
    // Todo change this for roles
    isAccessAllowed: () => true,
  },
});
