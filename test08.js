// arrow function
// กรณีทมี 1 parameter พารามิเตอร์จะอยู่่ในวงเล็บหรือไม่ก็ได้
// const dtiA = (yourname) =>{
const dtiA = (yourname) => {
  console.log(`สวัสดี ${yourname}`);
};

// กรณีคำสั่งการทำงานมีคำสั่งเดียว เเละไม่ใช่ return ไม่ต้องอยู่ใน { } ก็ได้
const dtiB = (yourname) => console.log(`สวัสดี ${yourname}`);

// กรณีคคำสั่งการทำงานมีคำสั่งเดียว เเละเป็น return
// ไม่ต้องอยู่ใน { } ก็ได้ เเต่จะต้องเขียน return ลงไปด
const dtiC = (radius) => {
  return 3.14 * radius * radius;
};

const dtiD = (radius) => 3.14 * radius * radius;
