const inquirer = require('inquirer');
const { type } = require('os');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'Select option',
        choices: [
            { name: '1. Create task', value: '1' },
            { name: '2. List task', value: '2' },
            { name: '3. List complete task', value: '3' },
            { name: '4. List pending task', value: '4' },
            { name: '5. Complete task(s)', value: '5' },
            { name: '6. Remove task', value: '6' },
            { name: '0. Exit', value: '0' }
        ]
    }
]
const inquirerMenu = async () => {
    
    console.clear();
    console.log('============================');
    console.log('    Select option'.green);
    console.log('============================\n');
    const { option } = await inquirer.prompt(questions);
    
    return option;
}

const pause = async () => {
    const stopQuestion = [
        {
            type: 'input',
            name: 'stop',
            message: `\nPress ${'Enter'.green } to continue\n`
        }
    ];
    console.log('\n');  // Add a blank line
    await inquirer.prompt(stopQuestion);
}

const readInput = async () => {
    const inputQuestion = [
        {
            type:'input',
            name:'desc',
            message:'Enter task description',
            validate: ( value ) =>{
                if( value.length === 0 ){
                    return 'Task description is required';
                }
                return true;
            }
        }
    ]

    const { desc } = await inquirer.prompt(inputQuestion);
    return desc ;
}



module.exports = {
    inquirerMenu,
    pause,
    readInput
}