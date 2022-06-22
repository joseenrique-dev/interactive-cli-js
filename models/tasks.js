const { v4: uuidv4 } = require('uuid');
const Task = require('./task');
const colors = require('colors');
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

    createTask(description = '') {
        let task = new Task(description);
        console.log('Get Task', task);
        this._list[task.id] = task;
        return task;
    }

    loadTasksFromArray(tasks = []) {
        tasks.forEach(data =>{
            this._list[ data.id ] = data;
        })
    }

    fullList() {
        // Expected result:
        // Complete: green
        // Pending: red
        // 1. Description #1 :: Complete | Pending
        // 2. Description #2 :: Complete | Pending
        // 3. Description #3 :: Complete | Pending

        let resultList = '';
        Object.keys(this._list).forEach(key => {
            const task = this._list[key];
            resultList += `${task.description} :: ${task.completed !== null ? 'Complete'.green : 'Pending'.red}\n`;
        });
        return resultList;


    }

    get getTask(){  
        const list = [];
        Object.keys(this._list).forEach(key => {
            list.push(this._list[key]);
        }
        );
        return list;
    }

}

module.exports = Tasks;