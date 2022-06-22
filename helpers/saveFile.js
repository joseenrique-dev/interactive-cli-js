const fs = require('fs');

const archive = './db/data.json';
const saveData = async ( data ) => {
    fs.writeFileSync(archive,JSON.stringify(data) );
}

const readDBData = async () => {
    if( !fs.existsSync(archive) ){
        return null;
    }

    const data = fs.readFileSync(archive, {encoding: 'utf-8'});
    return JSON.parse(data);
}



module.exports = {
    saveData,
    readDBData
    };


