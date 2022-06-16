require('colors');
const { showMessage, pause } = require('./helpers/messages');
const main = async () => {
    let option = '';
    do{
        option = await showMessage();
        if(option !== '0') await pause(); 
    }while(option !== '0');
    showMessage('Hola Mundo');
    
}

main()