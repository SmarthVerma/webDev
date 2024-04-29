console.log("We gonna be learning sleecting by ids and classes");

let a = document.getElementsByClassName("box");
a[2].style.backgroundColor="green"

let b=document.getElementById("number3");

b.style.color="yellow";

let c= document.querySelector(".box");

c.style.backgroundColor="darkblue"

let d= document.querySelectorAll(".box");

d.forEach(e=>{
    e.style.backgroundColor="skyblue";
})


let e= document.getElementsByTagName("div");

    // matches; returns false or true
let f = e[3].matches("#number3");

    // closest


    let g= e[3].closest("body");

    // container; returns false or true

   let h = e[0].contains(document.getElementById("number3"));