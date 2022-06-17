const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const Tasks = require('./models/tasks');

require('colors');

const main = async () => {
    let option = '';
    const tasks = new Tasks()
    do{
        option = await inquirerMenu(); 
        
        switch(option){
            case '1':
                const description = await readInput();
                
                tasks.createTask(description);
                break;
            case '2':
                console.log('List task', tasks.getTask());
                break;
        }
        await pause();
    }while(option !== '0');
    
}

main()