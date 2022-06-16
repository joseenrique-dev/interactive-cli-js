const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'Select option',
        choices: [
            'opt1',
            'opt2',
            'opt3',
        ]
    }
]
const inquirerMenu = async () => {
    
    console.log('============================');
    console.log('    Select option'.green);
    console.log('============================\n');
    const opt = await inquirer.prompt(questions);
    console.log(opt)
    return opt;
}


module.exports = {
    inquirerMenu
}