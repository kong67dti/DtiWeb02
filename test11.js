//Data Type ใน JS
//String
let a = " aaa";
let b = " bbb";
let c = " ccc";
//Nmber
let d = 100;
let e = 254.654549888;
//Boolean
let f = true;
let g = false;
//Array
let h = [10, 20, 30];
console.log(h[1]); //เข้าถึงสมาชิกใน Array
let i = ["a", 100, "c", true, 15.1235, [1, 2, 3]];

console.log(i[4]);
console.log(i[5][2]); //เข้าถึงสมาชิกใน Array ซ้อน Array
//Object
let j = {
  name: "Somsak",
  age: 20,
  address: {
    province: "Bangkok",
    city: "Bang Na",
  },
  color: ["blue", "red", "green"],
  isMarried: true,
};

console.log(j.color[2]);
//-------------------------------------------------------------------
let x;
console.log(x);
console.log(10 / x);
let y = null;
console.log(y);
