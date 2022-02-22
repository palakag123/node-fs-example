const fs = require('fs');
const {readFileContent, fileNamesArray, fileAppendData} = require('../src/utils/fileOperations.js');

describe('readFileContent to return data in the form of array', () => {
    it('should return data in the form of array', () =>{
        jest.spyOn(fs,'readFile').mockImplementation((filepath, callback) => {
            callback(null, 'mango\r\nbanana\r\norange\r\napple\r\nstrawberry\r\npeach');
        });
        const fruitTest = readFileContent('../seed/fruits.txt');
        expect(fruitTest).resolves.toEqual(['mango', 'banana', 'orange', 'apple', 'strawberry', 'peach']);
    });
    it('should return error if file doesnt exist', () =>{
        jest.spyOn(fs,'readFile').mockImplementation((filepath, callback) => {
            callback('File cannot be read',null);
        });
        const fruitTest = readFileContent('noFile.txt');
        expect(fruitTest).rejects.toEqual('File cannot be read');
    });
    it('should return empty array for empty file', () =>{
        jest.spyOn(fs,'readFile').mockImplementation((filepath, callback) => {
            callback(null,'');
        });
        const fruitTest = readFileContent('empty.txt');
        expect(fruitTest).resolves.toEqual(['']);
    });
    it('should return error if no file passed', () =>{
        jest.spyOn(fs,'readFile').mockImplementation((filepath, callback) => {
            callback('File cannot be read',null);
        });
        const fruitTest = readFileContent();
        expect(fruitTest).rejects.toEqual('File cannot be read');
    });
});

describe('fileNamesArray that returns names of files in dir as array', () => {
    it('should return files in dir as array', ()=>{
        return fileNamesArray('seed').then((files)=>{
            expect(files).toEqual([ 'beverages.txt', 'fruits.txt', 'vegetables.txt' ]);
        });
    });
    it('should return error if dir doesnt exist', () =>{
        return fileNamesArray('noDir').then(null, (data)=>{
            expect(data).toBe('cant read files in dir');
        });
    });
    it('should return empty array for empty dir', () =>{
        return fileNamesArray('tests/testDir').then((data)=>{
            expect(data).toEqual([]);
        });
    });
    it('should return error if no directory passed', () =>{
        return fileNamesArray().then(null, (data)=>{
            expect(data).toBe('cant read files in dir');
        });
    });
});

describe('fileAppendData should append data to the file', ()=>{
    xit('should append data in files', async()=>{
        const spy = jest.spyOn(console, 'log');
        await fileAppendData('./seed/fruits.txt', '\r\nkiwi');
        expect(spy).toBeCalled();
    })

})