console.log("Today i am learning about conditionals in javascript");

let age=45;


let num1=2;
num1= 2**4;
console.log(num1);

if(age>=18){
    console.log("You can drive");
}
else if(16<=age<18){
    console.log("You can have under 18 license");
}
else{
    console.log("You cant drive");
}

let a=5;
let b=4;

let c= a>b ? (a-b) : (a+b);
/*  Upper code means:-

    if(a>b){
        c= a-b;
    }
    else c=a+b;
*/

console.log(c);