//call back function

let aa = function () {
  console.log("Hi....");
};

const bb = (n1, n2) => n1 * n2;

function Dti(a, b, c, d) {
  a(); //เรียกใช้ฟังก์ชั่น aa
  console.log(`ผลคูณ คือ ${b(10, 20)}`);
  console.log(`สวัสดี ${c}`);
  d("wow", "woo", 100);
}
Dti(aa, bb, "Nattapong", (x, y, z) => {
  console.log(`${x} ${y} `);
  console.log(z);
});
