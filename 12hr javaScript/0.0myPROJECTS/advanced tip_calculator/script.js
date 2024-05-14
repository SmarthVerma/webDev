console.log(`hello`);

let people = 1;
let tip = 0;
let cost = 0;

let plus = document.querySelector(".plus");
plus.addEventListener("click", () => {
  let number = document.querySelector(".num");
  people++;
  number.innerHTML = people;
});

let minus = document.querySelector(".minus");
minus.addEventListener("click", () => {
  let number = document.querySelector(".num");
  if (people > 1) {
    people--;
    number.innerHTML = people;
  }
});

let cash = document.querySelector("#amount");
cash.addEventListener("input", (e) => {
  console.log(e);
  if (e.data == null) {
    let str = document.querySelector(".show").innerHTML;
    document.querySelector(".show").innerHTML = str.slice(0, -1);
  } else {
    document.querySelector(".show").innerHTML += e.data;
  }
  cost = parseInt(document.querySelector(".show").innerHTML);
});

let tipsy = document.querySelector("#tip");
let str2 = "";
tipsy.addEventListener("input", (e) => {
  console.log(e);
  if (e.data == null) {
    str2 = str2.slice(0, -1);
  } else {
    str2 += e.data;
  }
  console.log(str2);
  tip = parseInt(str2);
  console.log(`deasd`, tip);
});

function calculation() {
  let total_RESULt = (cost * (tip / 100)) / people;
  document.querySelector(".show").innerHTML = total_RESULt;
}
