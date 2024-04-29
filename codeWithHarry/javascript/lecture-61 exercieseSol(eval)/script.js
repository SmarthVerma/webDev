let random = Math.random();
console.log(random);
let a = prompt(`Enter your first no: `);
let b = prompt(`Enter your second no: `);
let c = prompt(`Enter Operation: `);

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (random > 0.1) {
  alert(`Your answer is: ${eval(`${a} ${c} ${b}`)}`);
} else {
  c = obj[c];
  alert(`Your answer is: ${eval(`${a} ${c} ${b}`)}`);
}
