//Object
const arrStudent = [
    { name: 'Dat', age: 29, gender: 1 },
    { name: 'Nhan', age: 27, gender: 1 },
    { name: 'Due', age: 22, gender: 0 },
    { name: 'Nguyen', age: 23, gender: 1 }
];
const statementQuery = user => user.name === 'Dat';

//Find
let findNameUser = arrStudent.find(statementQuery);
console.log(findNameUser);

//FindIndex
let findIndexUser = arrStudent.findIndex(statementQuery);
console.log(findIndexUser);

//MAP function
let mapUser = arrStudent.map(function (user) {
    return Math.pow(user.age, 2);
});

//ES6
let mapUserES6 = arrStudent.map(user => Math.pow(user.age, 2));
console.log(mapUser);

//Filter => Lọc theo điều kiện
let filterUser = arrStudent.filter(user => user.age > 25);
console.log(filterUser);

//SOME => tồn tại một đối tượng thỏa điều kiện
let someUser = arrStudent.some(user => user.gender === 1)
console.log(someUser); //true

//EVERY => bắt buộc toàn bộ đối tượng phải thỏa điều kiện
let everyUser = arrStudent.every(user => user.gender === 1)
console.log(everyUser); //false

// //SPLICE => (start, count) start: vị trí bắt đầu, count: số phần tử muốn lấy ra từ vị trí start
// let sliceUser = arrStudent.splice(1, 3);
// console.log(sliceUser);

// //PUSH => thêm phần tử cuối
// let newUser = { name: 'Duy', age: '32', gender: 1 };
// let pushUser = arrStudent.push(newUser);
// console.log(newUser);

// // POP => xóa phần tử cuối
// let popUser = arrStudent.pop();
// console.log(arrStudent);

// REDUCE => dùng để thực thi một hàm lên từng phần tử của mảng(từ trái sang phải) với một biến tích lũy để thu về một giá trị duy nhất.
//     EX: Tính tổng độ tuổi
let sumAgeStudent = arrStudent.reduce((previosVal, currentVal) => {
    previosVal = previosVal + currentVal.age;
    return previosVal;
}, 0);
console.log(sumAgeStudent);

//EX: Tính trung bình độ tuổi
let avgAgeStudent = arrStudent.reduce((previosVal, currentVal, index, array) => {
    if (arrStudent.length - 1 === index)
        return (previosVal + currentVal.age) / array.length;
    return previosVal + currentVal.age
}, 0);
console.log(avgAgeStudent);

//EX: Tìm đối tượng có gender = 1 && age > 25
let filUser = arrStudent.reduce((previosVal, currentVal) => {
    if (currentVal.age > 25 && Object.is(currentVal.gender, 1)) {
        previosVal.push(currentVal)
    }
    return previosVal;
}, []);
console.log({ filUser })
