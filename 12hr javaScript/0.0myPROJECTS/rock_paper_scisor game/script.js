let outcomes = ["rock", "paper", "scissors"]
let score= document.querySelector(".score").firstElementChild
let versus = document.querySelector(".versus")
let res = document.querySelector(".result")
let user=""
let stone= document.getElementById("stone")
let paper= document.getElementById("paper")
let scis= document.getElementById("scis")
let stopy= document.getElementById("stop")
let score_val=0;

const random=(arr)=>{
    let index = Math.floor(Math.random() * 3)
    return arr[index]
    
}

function result(){
    let cpu =random(outcomes)
    console.log(user, cpu);
    
    if (user === cpu) {
        res.innerHTML = "It's a Draw!";
    } else if ((user === "rock" && cpu === "paper") ||
        (user === "paper" && cpu === "scissors") ||
        (user === "scissors" && cpu === "rock")) {
        score_val--;
        res.innerHTML = "You lose!";
    } else {
        score_val++;
        res.innerHTML = "You WIN!";
    }

    versus.innerHTML = `👨${user} vs 🤖${cpu}`;
    score.innerHTML = score_val;

}

stone.addEventListener("click",()=>{
    user="rock"
    result();
})
paper.addEventListener("click",()=>{
    user="paper"
    result();
})
scis.addEventListener("click",()=>{
    user="scissors"
    result();
})

stopy.addEventListener("click",()=>{
    score_val=0
    score.innerHTML= ""
    res.innerHTML = ""
    versus.innerHTML = ``
})





