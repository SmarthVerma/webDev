const doublyy = (numbers) => {
  let result = [];
  for (const num of numbers) {
    result.push(num * 2);
  }
  return result;
};

   let num = [1, 67, 7, 78, 79, 3, 16, 498];

   let num2= doublyy(num)

   for (const key of num2) {
    console.log(key);
    
   }