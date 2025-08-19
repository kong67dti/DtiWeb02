//3. no parameter has return
function showHello() {
  console.log("wow wow wow....");
  return "Hello.....";
}
console.log(showHello()); //เรียกใช้ฟังก์ชั่นและแสดงผลลัพธ์ที่ return กลับมา

//4. have parameters has return

function callSquareArea(width, longs) {
  //parameter
  return width * longs; //return ค่ากลับไป
}

console.log(
  `พื้นที่สี่เหลี่ยม กว้าง 100 ยาว 50 มีพื้นที่เป็น ${callSquareArea(100, 50)}`
); //เรียกใช้ฟังก์ชั่นและแสดงผลลัพธ์ที่ return กลับมา
