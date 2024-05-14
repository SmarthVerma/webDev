let arr = [4, 56, 7, 9, 123, 31, 54, 62, 13, 8];

let a = arr.filter((item, index, arr) => {
  return item<10;
});

console.log(a);
