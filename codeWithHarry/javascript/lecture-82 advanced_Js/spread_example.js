function sum_array(...arr){
    
    let total= arr.reduce((a,b)=>a+b,0)
    return total
}

let numbers=[1,2,3,4,5,6,7,8,9,10]
console.log(...numbers);
console.log(numbers);


console.log("Total is",sum_array(...numbers));
