//An example problem to learn file operations using fs module of node - https://github.com/tech-university-2022/node-fs-example
//eslint-disable-next-line no-unused-vars
const {readFileContent, fileNamesArray, fileAppendData} = require('./utils/fileOperations.js');
const {filteredObject, filterByChar, filterRemoveChar} = require('./utils/filterOperations.js');

const printObject = async (dirname)=>{
    let fileObject = {};
    let fileNamesPromise = fileNamesArray(dirname)
    let fileNames = await fileNamesPromise;
    for(const file of fileNames) {
        let fileDataPromise = readFileContent(dirname+'/'+file);
        let fileContent = await fileDataPromise;
        fileObject[file] = fileContent;
    }
    //question 1
    console.log(fileObject);
    let objectToFilter = {...fileObject};
    let objectByChar = {...fileObject};
    let objectRemoveChar = {...fileObject};
    await filteredObject(objectToFilter);
    //quetsion 1 part2 
    await filterByChar(objectByChar,'b');
    //question 3
    await filterRemoveChar(objectRemoveChar, 'c');
    return fileObject;  
}
//question 2
fileAppendData('./seed/beverages.txt', 'tea\r\nhot chocolate\r\ncoffee');
//  fileAppendData('./seed/fruits.txt', `\r\nstrawberry\r\npeach`);
//  fileAppendData('./seed/vegetables.txt', `\r\npumpkin`);
printObject('./seed');

module.exports = {readFileContent, fileNamesArray, printObject, filteredObject};