

const max = (arr) => {
  let result = arr[0];
  for (const key of arr) {
    if(key>result){
        result=key
    }
  }
  return { result };
};

let nums = [1, 2, 3, 4, 6, 7,1,,13,1,523,23,,1,131,31,424];

console.log(max(nums));
