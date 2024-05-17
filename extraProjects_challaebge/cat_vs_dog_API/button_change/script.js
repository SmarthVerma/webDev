async function dog(){
    let a = await fetch("https://dog.ceo/api/breeds/image/random")
    let b = await a.json()
    return b.message
}

async function logging(){
    let c= await dog()
    console.log(c);   
}

async function updating(){
    let update = document.querySelector(".update")
    update.src= await dog() 
}


let change= document.getElementById("change")
change.addEventListener("click",updating)

