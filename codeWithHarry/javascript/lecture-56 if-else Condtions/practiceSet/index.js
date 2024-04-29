let age = 21;

if (age > 10 && age < 20) {
  console.log("YEs age lies betwen 10 and 20");
} else console.log("NOh the age doesnt lies betwween 10 and 20");

// question 2

let b = 54;
switch (b) {
  case 1:
    console.log("Your number is 1");
    break;
  case 2:
    console.log("Your number is 2");
    break;
  case 3:
    console.log("Your number is 3");
    break;
  default:
    console.log("I dont know what your number is");
}

//question 3
let c = 156;
if (c % 2 == 0 && c % 3 == 0) console.log("Divisble by 3 and 2");
else console.log("Not divisible by 3 and 2");

//question 4

let d = 156;
if (d % 2 == 0 || d % 3 == 0) console.log("Divisble by 3 or 2");
else console.log("Not divisible by 3 or 2");

//question 5

let ageOfSomeone=45;

ageOfSomeone>18? console.log("You can drive"):console.log("You cannot drive");
