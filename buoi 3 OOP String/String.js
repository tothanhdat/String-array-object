const nameCourse = 'mern stack js 0106';

//String.indexOf() => trả về chỉ số(vị trí) giá trị đầu tiên tìm thấy
console.log(nameCourse.indexOf('s')); //5

//String.includes() => trả về một boolean(true, flase) nếu tìm thấy giá trị trong chuỗi
console.log(nameCourse.includes('mern')); //true

//String.slice() => trả về một phần của chuỗi với (start, end) start: vị trí bắt đầu, end: vị trí kết thúc (lưu ý: KHÔNG BAO GỒM END)
console.log(nameCourse.slice(1, 3)); //"er"

//String.split() => tách chuỗi thành những chuỗi con, trả về giá trị trong 1 mảng
console.log(nameCourse.split(' ')); //["mern", "stack", "js", "0106"];

//String.substr() => trả về một phần của chuỗi với (start, end) start: vị trí bắt đầu, end: vị trí kết thúc (lưu ý: BAO GỒM END)
console.log(nameCourse.substr(1,3)); //"ern"

//String.substring() => giống phương pháp String.slice() (KHÔNG CHẮC CHẮN)
console.log(nameCourse.substring(1, 3)); //"er"

//String.trim() => phương pháp loại bỏ khoảng trắng từ cả 2 đầu của một chuỗi
const text = ' Hello Hutech University ';
console.log(text.trim()); //"Hello Hutech University"

//String.replace() => trả về 1 chuỗi mới, thay thế một chuỗi con xuất hiện ĐẦU TIÊN trong chuỗi mẹ thành một chuỗi con khác
console.log(nameCourse.replace('mern', 'MERN')); //"MERN stack js 0106"

//------------------------------------
//Ngoài ra còn 1 số phương pháp xử lý khác 

//String.fromCharCode => phương pháp trả về một chuỗi được tạo từ chuỗi đơn vị mã UTF-16
String.fromCharCode(65, 66, 67, 90, 91, 92); //"ABCZ[\"

//String.concat() => phương pháp nối chuỗi
var str1 = 'Hello ';
var str2 = 'World';
console.log(str1.concat(' ', str2)); //"Hello World"

//String.repeat() => phương pháp lặp chuỗi
console.log(str1.repeat(5)); //"Hello Hello Hello Hello Hello "

//String.search() => phương pháp tìm kiếm trả về một chỉ số
var stringSearch = 'Today, I am talking about...';
console.log(stringSearch.search('talking')) //12

//String.toUpperCase() => Viết hoa chuỗi
console.log(stringSearch.toUpperCase()); //"TODAY, I AM TALKING ABOUT..."

//String.toLoweCase() => Viết thường chuỗi
console.log(stringSearch.toLowerCase()); //"today, i am talking about..."



