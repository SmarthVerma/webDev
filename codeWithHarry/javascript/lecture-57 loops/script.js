// YEh toh sabko aata hi ha
/*
for(let i= 0; i<45; i++){ 
    console.log("I love myself");
}
*/

// bhai yeh toh kuch naya hi discorver krdia maine
/*
let a=[45,64,8,789,1,321,34,346,476,798,7];

a.forEach(element => {
    console.log(element);
});
*/

let studentInfo = {
  name: "Smarth verma",
  age: 18,
  phoneNo: "4668687878",
  address: "Solan, himachal pradesh",
  RollNo: "231030118",
};

for (const key in studentInfo) {
  if (Object.hasOwnProperty.call(studentInfo, key)) {
    const element = studentInfo[key];
    console.log(key+":", element);
  }
}

for (const iterator of "smarthIs") {
    console.log(iterator);
}

/*
i=0;
while(i<6){
    console.log("Ilove Sammy");
    i++;
}
*/


let i = 10;
do {
  console.log(i);
  i++;
} while (i < 6);