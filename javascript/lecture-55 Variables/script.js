console.log("WelcomeBack to new adventures");
var num1 = 46;
var num1 = num1 + 1;
var num2 = 45;
let num3 = 45;

const p = 56;
// p = p + 1;    not allowed

console.log(p);

var _name = "SMaerth";
// var 2name= "verma"; not valid

// console.log(num1 + num2 + 1);
// console.log(typeof num1, typeof num2);
console.log("Before block num2 " + num2);
console.log("Before block num3 " + num3);

{
  var num2 = 56; // Aukaat gloabal variable
  console.log(num2);
  let num3 = 11; // aukat bs block tak hi ha, WILL BE USING "let" IN MORDERN JS
  console.log(num3);
}
console.log("After block num2 " + num2);
console.log("After block num3 " + num3);
