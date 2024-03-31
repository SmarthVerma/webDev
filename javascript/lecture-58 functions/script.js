function samy(name) {
  console.log("Hi my name is " + name);
  console.log("And today I " + name + " gonna be learning javascript");
  console.log("Hi my name is " + name + " and my teacher is CodeWithHarry");
}

samy("Smarth");
samy("Ajay");
samy("Arpit");

function sum(a, b, c = 0) {
  return a + b;
}

result1 = sum(5, 6);
result2 = sum(-6, 0.6, 5);
result3 = sum(51.11, 0.45);

console.log(result1);
console.log(result2);
console.log(result3);

// arrow function

const fun1 = (x)=>{
    console.log("Hey there i am",x,"And i hecking love arrow fn");
}
    
    fun1(45);