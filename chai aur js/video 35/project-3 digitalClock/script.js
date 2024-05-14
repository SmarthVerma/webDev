const time= document.querySelector(".time")

setInterval(() => {
    let date= new Date();
    console.log(date.toLocaleTimeString());
    console.log(date.getDate());
    console.log(date.getDay());
    console.log(date.getFullYear());
    console.log(date.getTime());
    console.log(date.toDateString());

    
    time.innerHTML = date.toLocaleTimeString();
}, 1000);