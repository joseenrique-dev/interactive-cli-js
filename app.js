const { inquirerMenu, pause, readInput, taskListRemove, confirm, showCheckList } = require('./helpers/inquirer');
const { saveData, readDBData } = require('./helpers/saveFile');
const Tasks = require('./models/tasks');

require('colors');

const main = async () => {
    let option = '';
    const tasks = new Tasks()

    const readDB = await readDBData();
    
    do{
        option = await inquirerMenu(); 
        if( readDB ){
            tasks.loadTasksFromArray(readDB);
        }
        
        switch(option){
            case '1': // Create task
                const description = await readInput();
                tasks.createTask(description);
                break;
            case '2': // List task
                console.log(tasks.getTask);
                break;
            case '3': // List complete task
                console.log(tasks.fullList());
                break;
            case '4': // List pending task
                console.log(tasks.getListByStatus('pending'));
                break;
            case '5': // Complete task(s)
                const ids  = await showCheckList(tasks.getTask);
                console.log(ids);
                break;
            case '6': // Remove task
                const id = await taskListRemove(tasks.getTask);
                console.log('VAL ID-->', id);
                const ok = await confirm(`Are you sure to remove task ${id}?`);
                console.log({ok})
                if( id !== '0' ){
                    if (ok) {
                        tasks.removeTask(id);
                        console.log(`Task ${id} removed.`);
                    }
                }
                break;
            
        }

        saveData(tasks.getTask);
        await pause();
    }while(option !== '0');
    
}

main()