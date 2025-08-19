var data1 = 10;
data1 = 20;
let data2 = 50;
data2 = 60;
const data3 = 100;
//data3 = 200;

console.log(data1); // 20
console.log(data2); // 60
console.log(data3); // 100
{
  let data4 = 555;
  console.log(data4); // 555
  console.log(data3); // 100
}

//console.log(data4) Error
console.log(data3);
