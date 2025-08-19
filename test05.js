//Fuction คือ การทำงานหนึ่งๆ จะไม่ทำหากไม่เรียกใช้ หรือที่เขาเรียก Call Function
//Function มี 4 ประเภท
//1. no parameter no return
function showHi() {
  console.log("Hi hi hi ...");
}
showHi(); //เรียกใช้ฟังก์ชั่น

//2. have parameters no return
function sumNumberAndShow(n1, n2) {
  console.log(`${n1} + ${n2} = ${n1 + n2}`);
}
sumNumberAndShow(10, 20); //argument คือ ค่าที่ส่งไปให้ parameter
sumNumberAndShow(100, 200);

//3. no parameter has return

//4. have parameters has return
