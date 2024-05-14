// 3. The Mirror Mirror:
//    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.


function reverseAppened(a) {
  let reverse = "";
  for (let i = a.length - 1; i >= 0; i--) {
    reverse += a[i];
  }

  a += reverse;
  console.log(a);

  return a;
}

let a="abcdefgh"



reverseAppened(a);






