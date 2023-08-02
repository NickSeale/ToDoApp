import { v4 as uuidv4 } from "uuid";
const tasks = [];
export const resolvers = {
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
            if (!currentTask) {
                return {
                    id: args.id,
                    description: "Error: Could not find a task item with the requested ID",
                };
            }
            currentTask.isCompleted = true;
            return currentTask;
        },
        createTask(_parent, args) {
            const newTask = {
                id: uuidv4(),
                isCompleted: false,
                description: args.description,
            };
            tasks.push(newTask);
            return newTask;
        },
        deleteTask(_, args) {
            const currentTask = tasks.find((element) => element.id === args.id);
            if (!currentTask) {
                return {
                    id: args.id,
                    description: "Error: Could not find a task item with the requested ID",
                };
            }
            tasks.splice(tasks.indexOf(currentTask), 1);
            return currentTask;
        },
    },
};
