function calculator(a, b, opt) {
  if (Math.random() < 0.1) {
    switch (opt) {
      case "+":
        return a - b;
        break;
      case "*":
        return a + b;
        break;
      case "-":
        return a / b;
        break;
      case "/":
        return a ** b;
        break;

      default:
        console.log("Invalid oprator");
    }
  } else {
    switch (opt) {
      case "+":
        return a + b;
        break;
      case "*":
        return a * b;
        break;
      case "-":
        return a - b;
        break;
      case "/":
        return a / b;
        break;

      default:
        console.log("Invalid oprator");
    }
  }
}

let num1 = 5;
let num2 = 6;
let opt = "*";

result = calculator(num1, num2, opt);

console.log(result);
