let arr=[4,56,7,9,123,31,54,62,13,8];

let a= arr.map((item,index,arr)=>{
    return item + index;
} )


console.log(a);