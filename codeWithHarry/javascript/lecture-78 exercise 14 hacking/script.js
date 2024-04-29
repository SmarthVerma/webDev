let a= document.querySelectorAll(".msg")

function timeRand(){
    let val= Math.ceil(1+ Math.random()*(1+7));
    return val*1000;
}


function displayWithDelay(e, delay){
     setTimeout(() => {
        e.style.visibility="visible"
     }, delay);
        
}


let accumDelay=timeRand();
Array.from(a).forEach((e)=>{
    displayWithDelay(e,accumDelay)
    accumDelay+=timeRand();
})