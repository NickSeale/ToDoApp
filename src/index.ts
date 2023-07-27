// ~~~~~~~~ Import Statements ~~~~~~~~~
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// ~~~~~~~~~~~~ Variables ~~~~~~~~~~~~
const tasks = []; // Stores tasks
let newId = 0; // Id counter
const PORT = 4000; // Host port

// ~~~~~~~~ Schema Definition ~~~~~~~~
const typeDefs = `#graphql

  # Tasks
  type Task {
    id: Int,
    isCompleted: Boolean,
    description: String!
  }

  # Query Definitions
  type Query {
    getAllTasks: [Task]
    getActiveTasks: [Task]
  }

  # Mutation Definitions
  type Mutation {
    markTaskComplete(id: Int!): Task
    createTask(description: String!): Task
    deleteTask(id: Int!): Task
  }
`;

// ~~~~~~~~~~~~ Resolvers ~~~~~~~~~~~~~
const resolvers = {
  Query: {
    getAllTasks() {
      return tasks;
    },

    getActiveTasks() {
      return tasks.filter((element) => !element.isCompleted);
    },
  },

  Mutation: {
    markTaskComplete(_: any, args: any) {
      const currentTask = tasks.find((element) => element.id === args.id);
      currentTask.isCompleted = true;
      return currentTask;
    },

    createTask(_parent: any, args: any) {
      newId += 1;
      const newTask = {
        id: newId,
        isCompleted: false,
        description: args.description,
      };
      tasks.push(newTask);
      return newTask;
    },

    deleteTask(_: any, args: any) {
      const currentTask = tasks.find((element) => element.id === args.id);
      tasks.splice(tasks.indexOf(currentTask), 1);
      return currentTask;
    },
  },
};

// ~~~~~~~~~~Server Definition ~~~~~~~~~~
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// ~~~~~~~~~~~ Initiating Server ~~~~~~~~
const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
});
