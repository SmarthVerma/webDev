const btn= document.getElementById("btn");
const space= document.querySelector(".space");
function convertSeconds(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return {
        hours: hours,
        minutes: minutes,
        seconds: remainingSeconds
    };
}

console.log(`hello`);

btn.addEventListener("click",(e)=>{
    console.log(e);
    let obj = convertSeconds(e.timeStamp / 1000); // timeStamp is in milliseconds, converting to seconds
    console.log(obj);
    
    space.innerHTML = `Time at you clicked me: ${obj.seconds.toFixed(2) }`
    
    

})
