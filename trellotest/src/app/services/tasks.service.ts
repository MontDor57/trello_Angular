export class TaskService {

    tasks = []

    constructor () {}

    addColumn (title) {
        const statusObject = {
            status: '',
            tasks: []
        }

        statusObject.status = title
        this.tasks.push(statusObject)
    }

    addTask (task, status) {
        const tasksObject = {
            task: ''
        }

        tasksObject.task = task
        this.tasks[status].tasks.push(tasksObject)
    }
    
    editTask (task, indexOfTask, indexOfCol) {
        this.tasks[indexOfCol].tasks[indexOfTask].task = task
    }

    deleteTask (indexOfTask, indexOfCol) {
        this.tasks[indexOfCol].tasks.splice(indexOfTask, 1)
    }
}