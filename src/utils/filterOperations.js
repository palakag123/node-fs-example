
const filteredObject = (fileObj, firstletter=true) => {
    if(!firstletter)
        return fileObj;
    let keyValues = Object.keys(fileObj);
    let index =0;
    Object.values(fileObj).forEach(contentValue => {
        if(firstletter === '')
            index ++;
        else {
            let letter = contentValue[0][0];
            let filteredValue = contentValue.filter((eachWord)=>eachWord[0]===letter);
            fileObj[keyValues[index]] = filteredValue;
            index++;
        }
    });
    console.log('filtered object based on first character of each file');
    console.log(fileObj);
    return fileObj;
}
const filterByChar = (fileObj, charToFilter='') =>{
    if(charToFilter === '')
        return fileObj;
    let keyValues = Object.keys(fileObj);
    let index =0;
    Object.values(fileObj).forEach(contentValue => {
        let filteredValue = contentValue.filter((eachWord)=>eachWord[0]===charToFilter);
        fileObj[keyValues[index]] = filteredValue;
        index++;
    });
    console.log('filtered object based on character passed');
    console.log('filtered object by '+charToFilter);
    console.log(fileObj);
}
const filterRemoveChar = (fileObj, charToFilter='') =>{
    if(charToFilter === '')
        return fileObj;
    let keyValues = Object.keys(fileObj);
    let index =0;
    Object.values(fileObj).forEach(contentValue => {
        let filteredValue = contentValue.filter((eachWord)=>eachWord[0]!==charToFilter);
        fileObj[keyValues[index]] = filteredValue;
        index++;
    });
    console.log('filtered object based on character passed');
    console.log('filtered object by '+charToFilter);
    console.log(fileObj);
}

module.exports = {filteredObject, filterByChar, filterRemoveChar};