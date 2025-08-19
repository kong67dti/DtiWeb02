//Expression Function
// 1. anonymous function

const dti01 = function () {
  console.log("Hi...");
  console.log("Hey...");
};
let dti02 = function (n1, n2) {
  return n1 * n2;
};

dti01(); //เรียกใช้ฟังก์ชั่น
console.log(dti02(100, 200)); //เรียกใช้ฟังก์ชั่น
//
// 2. arrow function

const dti03 = () => {
  console.log("Hi...");
  console.log("Hey...");
};
dti03(); //เรียกใช้ฟังก์ชั่น

let dti04 = (n1, n2) => {
  return n1 * n2;
};
console.log(dti04(111, 2)); //เรียกใช้ฟังก์ชั่น
