const obj = {
  harry: 78,
  aakash: 59,
  sammy: 46,
};

for (const key in obj) {
  if (Object.hasOwnProperty.call(obj, key)) {
    const element = obj[key];
    console.log("Student is " + key + " and number is: " + obj[key]);
  }
}

