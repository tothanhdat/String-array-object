var voters = [
    { name: 'Bob', age: 30, voted: 1 },
    { name: 'Jake', age: 32, voted: 1 },
    { name: 'Kate', age: 25, voted: 0 },
    { name: 'Sam', age: 20, voted: 0 },
    { name: 'Phil', age: 21, voted: 1 },
    { name: 'Ed', age: 55, voted: 1 },
    { name: 'Tami', age: 54, voted: 1 },
    { name: 'Mary', age: 31, voted: 0 },
    { name: 'Becky', age: 43, voted: 0 },
    { name: 'Joey', age: 41, voted: 1 },
    { name: 'Jeff', age: 30, voted: 1 },
    { name: 'Zack', age: 19, voted: 0 }
];

const resultSum = voters.reduce((previosVal, currentVal) => {
    if (Object.is(currentVal.voted, 1))
        return previosVal + currentVal.age;
    return previosVal;
}, 0);
console.log(resultSum);

let votersLength = voters.length;
let filUser = voters.filter(voter => voter.voted === 0 && voter);
const resultAvg = voters.reduce((previosVal, currentVal, index) => {
    if (Object.is(currentVal.voted, 0)) {
        if (Object.is(index, votersLength - 1)) {
            return (previosVal + currentVal.age) / votersLength;
        }
        return previosVal + currentVal.age;
    }
    return previosVal;
});
console.log({ resultAvg });


// let sumAgeUser = voters.reduce((previosVal, currentVal) => {
//     if (voters.voted === 1){
//         return previosVal + currentVal.age;
//     }
//     return previosVal + currentVal.age;
// }, 0);
// console.log(sumAgeUser);

// // let avgAgeUser = voters.reduce((previosVal, currentVal, index) => {
// //     if (voters.length - 1 === index && Object.is(currentVal.voted, 0) )
// //         return (previosVal + currentVal.age) / voters.length;
// //     return previosVal + currentVal.age;
// // }, 0);
// // console.log(avgAgeUser);

