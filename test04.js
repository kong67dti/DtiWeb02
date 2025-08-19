//break, continue ใน Loop

for (let a = 1; a <= 5; a++) {
  //++a, a= a + 1, a += 1
  if (a === 3) {
    break;
  }
  console.log(`${a} SAU`); //backtick ` Alt+9+6
}
console.log("++++++++++++++++++++++++++++++++++++++++++++++");
for (let b = 1; b <= 5; b++) {
  //++b, b= b + 1, b += 1
  if (b === 3) {
    continue;
  }
  console.log(`${b} SAU`); //backtick ` Alt+9+6
}
