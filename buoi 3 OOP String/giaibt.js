let { BAITAP } = require('./baitap');

let splitString = BAITAP.split('<item>');
let spliceString = splitString.splice(0, 1);

const getBody = (strOrigin, keyStart, keyEnd) => {
    let indexStart = strOrigin.indexOf(keyStart);
    let indexEnd = strOrigin.indexOf(keyEnd);
    return strOrigin.slice(indexStart + keyStart.length, indexEnd);
}

const getInfoItem = item => {
    let title = getBody(item, '<item>', '</item>');
    let description = getBody(item, '<description>', '</description>');
    return ({ title, description });
};
const arrInfoItem = splitString.map(getInfoItem)
console.log(arrInfoItem);









