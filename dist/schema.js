export default `#graphql

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
