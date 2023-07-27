import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
const tasks = [];
let newId = 0;
const PORT = 4000;
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
        markTaskComplete(_, args) {
            const currentTask = tasks.find((element) => element.id === args.id);
            currentTask.isCompleted = true;
            return currentTask;
        },
        createTask(_parent, args) {
            newId += 1;
            const newTask = {
                id: newId,
                isCompleted: false,
                description: args.description,
            };
            tasks.push(newTask);
            return newTask;
        },
        deleteTask(_, args) {
            const currentTask = tasks.find((element) => element.id === args.id);
            tasks.splice(tasks.indexOf(currentTask), 1);
            return currentTask;
        },
    },
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
});
