# LUSH To-Do App
A technical assessment for LUSH cosmetics completed in July 2023

## Functionality
The app has 4 functions:
1. Creating a to-do task
2. Viewing active to-do’s
3. Marking a to-do as complete
4. Deleting to-do’s

## Technologies
The server was written in TypeScript using the Apollo GraphQL server

## Installation
1. Clone the repository
2. Navigate to the project directory: `cd ToDoApp`
3. Install modules: `npm i`
4. Start the server: `npm start`
5. Navigate your browser to the localhost server. The default is `http://localhost:4000/`

## Usage
### Get All Tasks
```
query {
  getAllTasks {
    id
    isCompleted
    description    
  }}
  ```

### Get Active Tasks
```
query{
  getActiveTasks {
    id
    isCompleted
    description
  }
}
```

### Create Task
In the Operation section:
```
mutation($description: String!){
  createTask(description: $description) {
    id
    isCompleted
    description
  }
}
```

In the Variables section:
```
{
    "description": "Write your task here"
}
```

### Mark a Task Complete
In the Operation section:
```
mutation($id: Int){
  markTaskComplete(id:$id) {
    id
    isCompleted
    description
  }
}
```

In the Variables section:
```
{
    "id":2
}
```

Replace with the task id to be marked complete

### Delete Task
In the Operation section:
```
mutation($id:Int){
  deleteTask(id:$id) {
    id
    isCompleted
    description
  }
}
```

In the Variables section:
```
{
    "id":2
}
```

Replace with the task id to be deleted

## Connect with me

 <a href="https://www.linkedin.com/in/nseale/">
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />
 </a>