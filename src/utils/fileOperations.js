const fs = require('fs');
const readFileContent = (filename='') => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, data) => {
            if(err)
                return reject('File cannot be read');
             resolve(data.toString().split('\r\n'));
        });
    });
};
const fileNamesArray = (dirname='') => {
    return new Promise((resolve, reject) => {
        fs.readdir(dirname, (err, files) => {
            if (err)
              reject('cant read files in dir');
            resolve(files);
        });
    });
};
const fileAppendData = (filename, dataToAppend)=>{
    fs.appendFile(filename, dataToAppend, (err)=>{
        if(err)
            throw err;
        console.log('data appended to '+filename);
    });
};

module.exports = {readFileContent, fileNamesArray, fileAppendData};