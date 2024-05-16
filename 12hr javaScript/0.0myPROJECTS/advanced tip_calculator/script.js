let amount = 0
let people = 1;
let tip = 0;
let tip_ammount = 0
let total = 0

const show = document.querySelector(".show")
const num = document.querySelector(".num")
const input = document.querySelector("#amount")
const tipsy = document.querySelector("#tip")
const plus= document.querySelector(".plus")
const minus= document.querySelector(".minus")
function calculation() {
  amount=Number(input.value)
  tip=Number(tipsy.value)
  tip = tip / 100;
  tip_ammount = (amount * tip);  
  total = (tip_ammount + amount) / people;
  show.innerHTML =  `₹${total.toFixed(2)}`
}

function increase_decrease(flag) { // flag representing increase click or decrease
  if (flag) {
    people++;
    num.innerHTML =people
    calculation()
  }
  else 
    if (people == 1)console.error("cant decrease people more than 1");
    else {
      people--
      num.innerHTML = people
      calculation()
    } 
}


// ALL EVENT LISTNERS
input.addEventListener("keyup", calculation)
tipsy.addEventListener("keyup", calculation)
plus.addEventListener("click", ()=>{
    increase_decrease(true)
})
minus.addEventListener("click",()=>{
  increase_decrease(false)
} )

