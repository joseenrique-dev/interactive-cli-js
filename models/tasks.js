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

    /**
    * Create a new task
    * @param {string} description
    * @memberof Tasks
    */
    createTask(description = '') {
        let task = new Task(description);
        console.log('Get Task', task);
        this._list[task.id] = task;
        return task;
    }

    /**
     * Load tasks from an array
     * @param {array} tasks Array of tasks
     * @memberof Tasks
     * @param {*} tasks 
     */
    loadTasksFromArray(tasks = []) {
        tasks.forEach(data =>{
            this._list[ data.id ] = data;
        })
    }

    /**
     * List all tasks in the list with the following format:
     * Description :: Complete/Pending with color
     * @returns {string} 
     * @memberof Tasks
     */
    fullList() {
        let resultList = '';
        Object.keys(this._list).forEach(key => {
            const task = this._list[key];
            resultList += `${task.description} :: ${task.completed !== null ? 'Complete'.green : 'Pending'.red}\n`;
        });
        return resultList;
    }

    getListByStatus( status = 'completed'){
        let resultList = '';
        Object.keys(this._list).forEach(key => {
            const task = this._list[key];
            if(status === 'completed'){
                if( task.completed !== null ){
                    resultList += `${task.description}` +' :: Complete'.green+'\n';
                } 
            }else if(status === 'pending'){
                    resultList += `${task.description}`+ ' :: Pending'.red+'\n';
            }
        });
        return resultList;
    }

    /**
    * Get task
    */
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