let sum = (a, b) => a + b;
const friends = [
  { name: "smarth", age: 20 },
  { name: "gano", age: 18 },
  { name: "aradhay", age: 19 },
  { name: "arnav", age: 20 },
  { name: "kartik", age: 21 },
];

let result = friends.filter((e) => e.age < 20);

// maping
let result2 = result.map((e) => e.name);
// join

let result3 = result2.join(", ");

// reduce
let result4 = friends.map((e) => e.age);
console.log(result4.reduce(sum,-20));

console.log(result4);

console.log(JSON.stringify(result3));
