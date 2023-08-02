// ~~~~~~~~ Import Statements ~~~~~~~~~
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import  typeDefs  from "./modules/schema.js";
import { resolvers } from "./modules/resolvers.js";

// ~~~~~~~~~~~~ Variables ~~~~~~~~~~~~
const PORT = 4000; // Host port

// ~~~~~~~~~~Server Definition ~~~~~~~~~~
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// ~~~~~~~~~~~ Initiating Server ~~~~~~~~
const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
});
