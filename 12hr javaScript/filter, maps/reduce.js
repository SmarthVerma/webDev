let sum= (a,b)=> a+b;
let multi= (a,b)=> a*b;

    const arr=[2,5,7,45,14]

console.log(arr.reduce((curr, next) => curr + next));
    // two arguments
console.log(arr.reduce(sum,-13));
console.log(arr.reduce(multi));
 