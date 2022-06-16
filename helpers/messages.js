require('colors');

const showMessage = () => {
    return new Promise(resolve => {
        console.clear();
        console.log('============================');
        console.log('    Select option'.green);
        console.log('============================\n');
        console.log(`${'1.'.green} Create task`);
        console.log(`${'2.'.green} List task`);
        console.log(`${'3.'.green} List complete task`);
        console.log(`${'4.'.green} List pending task`);
        console.log(`${'5.'.green} Complete task(s)`);
        console.log(`${'6.'.green} Remove task`);
        console.log(`${'0.'.red} Exit`);
        
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Select option: ', (option) => {
            resolve(option);
            readline.close();}
        );
    });
}

const pause = () => {
    return new Promise(resolve => {

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question(`\nPress ${'Enter'.green } to continue\n` , (option) => {
            readline.close();
            resolve();
        });
    });
}
module.exports = {
    showMessage,
    pause
}