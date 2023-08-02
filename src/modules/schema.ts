// ~~~~~~~~ Schema Definition ~~~~~~~~
export default `#graphql

  # Tasks
  type Task {
    id: String,
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
    markTaskComplete(id: String): Task
    createTask(description: String!): Task
    deleteTask(id: String): Task
  }
`;
