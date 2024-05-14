
const summArray=(arr)=>{

let result = 0;
for (const key of arr) {
  result += key;
}
return {result};
}


let nums=[1,2,3,4,6,7]

console.log(summArray(nums));
