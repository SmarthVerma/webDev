// given 5 boxes, Assigen a random color and a random background to each box using DOM concepts
let all=document.getElementsByClassName("box");

Array.from(all);

function getRandomColor(){
    let val1= Math.ceil(0+Math.random()*(225));     // min + Math.random() *(max-min)
    let val2= Math.ceil(0+Math.random()*(225));
    let val3= Math.ceil(0+Math.random()*(225));

    return `rgb(${val1}, ${val2}, ${val3})`;
}

function randomBackground(){

    Array.from(all).forEach((e) => {
      e.style.backgroundColor = getRandomColor();
    });
}

function randomColor(){

    Array.from(all).forEach((e) => {
      e.style.color = getRandomColor(); 
    });
}

randomBackground();
randomColor();

document.color