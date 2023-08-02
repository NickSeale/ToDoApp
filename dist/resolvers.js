const tasks = [];
let newId = 0;
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
