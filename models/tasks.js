const { v4: uuidv4 } = require('uuid');
const Task = require('./task');

/**
 *  Task class
 *  @class Task
 *  _list:
 *  {'uuid-123712371237': {id:12, name: 'Task 1', description: 'Task 1 description'}}
 */
class Tasks {
    constructor() {
        this._list = {};
    }

    createTask(description){
        let task = new Task(description);
        console.log('Get Task', task);
        this._list[task.id] = task;
        return task;
    }

    getTask(){
        return this._list;
    }
}

module.exports = Tasks;