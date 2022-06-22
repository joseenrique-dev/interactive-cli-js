const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
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
            case '1':
                const description = await readInput();
                
                tasks.createTask(description);
                break;
            case '2':
                console.log(tasks.getTask);
                break;
        }

        await saveData(tasks.getTask);
        await pause();
    }while(option !== '0');
    
}

main()