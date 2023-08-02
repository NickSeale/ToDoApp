# LUSH To-Do App
A technical assessment for LUSH cosmetics completed in July 2023.

## Functionality
The app has 4 functions:
1. Creating a to-do task
2. Viewing active to-do’s
3. Marking a to-do as complete
4. Deleting to-do’s

## Technologies
The server was written in TypeScript using the Apollo GraphQL server.

## Installation
1. Clone the repository: `git clone https://github.com/NickSeale/ToDoApp.git`
2. Navigate to the project directory: `cd ToDoApp`
3. Install modules: `npm i`
4. Start the server: `npm start`
5. Navigate your browser to the localhost server. The default is `http://localhost:4000/`

## Usage
The server can be tested with Apollo Server Sandbox by navigating your browsert to the default port listed above:
![image](https://github.com/NickSeale/ToDoApp/assets/10787366/4d7296f4-b2d9-4ea0-94d5-e21596e8cb1e)
Below are query and mutation operations for the To Do server. Each request example has the necessary Operations and Variables to complete the call

### 1. Get All Tasks
**Operations:**
```javascript
query {
  getAllTasks {
    id
    isCompleted
    description    
  }
}
```

### 2. Get Active Tasks
**Operations:**
```javascript
query{
  getActiveTasks {
    id
    isCompleted
    description
  }
}
```

### 3. Create a Task
**Operations:**
```javascript
mutation($description: String!){
  createTask(description: $description) {
    id
    isCompleted
    description
  }
}
```

**Variables:**
```javascript
{
    "description": "Write your task here"
}
```

### 4. Mark a Task Complete
**Operations:**
```javascript
mutation($id: Int){
  markTaskComplete(id:$id) {
    id
    isCompleted
    description
  }
}
```

**Variables:**
```javascript
{
    "id":2
}
```

Replace with the task `id` to be marked complete

### 5. Delete a Task
**Operations:**
```javascript
mutation($id:Int){
  deleteTask(id:$id) {
    id
    isCompleted
    description
  }
}
```

**Variables:**
```javascript
{
    "id":2
}
```

Replace with the task `id` to be deleted

## Connect with me
 <a href="https://www.linkedin.com/in/nseale/">
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />
 </a>
