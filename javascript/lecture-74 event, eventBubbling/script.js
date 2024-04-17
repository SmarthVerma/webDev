let button= document.querySelector(".btn")

button.addEventListener("click", ()=>{
document.querySelector(".container h2").textContent = "Click me harder";
})
document.addEventListener("contextmenu", ()=>{
    alert("tune right click kia, u sooo gay"); 
})

let textarea=document.querySelector("#textarea");

textarea.addEventListener("keydown", (e)=>{
    console.log(e, "Keys Pressed: ",e.key,"keycode: ", e.keycode);
})