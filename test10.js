//Function: Default parameter
function FuncA(a, b, c, d = 100, e = 200) {
  console.log(a + b + c + d + e);
}

FuncA(10, 20, 30); // d และ e จะใช้ค่า default คือ 100 และ 200
FuncA(10, 20, 30, 40); // d จะเป็น 40 และ e จะใช้ค่า default คือ 200
FuncA(10, 20, 30, 40, 50); // d เป็น 40 และ e เป็น 50
