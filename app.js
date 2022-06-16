const { inquirerMenu } = require('./helpers/inquirer');

require('colors');

const main = async () => {
    let option = '';
    do{
        option = await inquirerMenu(); 
    }while(option !== '0');
    showMessage('Hola Mundo');
    
}

main()